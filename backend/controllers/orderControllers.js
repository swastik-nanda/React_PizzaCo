const Order = require("../models/orderModel");

const createOrder = async (req, res) => {
  try {
    const { customer, phone, address, cart, priority, position } = req.body;

    if (!customer || !phone || !address || !cart || cart.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "Missing details" });
    }

    // Coerce priority to boolean in case it's a string
    const priorityBool = priority === true || priority === "true";

    const orderPrice = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    const priorityPrice = priorityBool ? orderPrice * 0.2 : 0;
    const estimatedDelivery = new Date(
      Date.now() + (priorityBool ? 20 : 40) * 60 * 1000
    ); // 20 or 40 min

    const newOrder = await Order.create({
      customer,
      phone,
      address,
      cart,
      priority: priorityBool,
      position,
      orderPrice,
      priorityPrice,
      estimatedDelivery,
    });

    res.status(201).json({
      success: true,
      order: {
        ...newOrder.toObject(),
        id: newOrder._id, // for frontend compatibility
      },
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);
    if (!order)
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });
    res.json({
      success: true,
      order: {
        ...order.toObject(),
        id: order._id, // for frontend compatibility
      },
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const updateOrder = async (req, res) => {
  try {
    const { priority } = req.body;
    const order = await Order.findById(req.params.orderId);
    if (!order)
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });

    // Coerce priority to boolean
    const priorityBool = priority === true || priority === "true";

    if (priorityBool && !order.priority) {
      order.priority = true;
      order.priorityPrice = order.orderPrice * 0.2;
      order.estimatedDelivery = new Date(Date.now() + 20 * 60 * 1000); // 20 min from now
      await order.save();
    }

    res.json({
      success: true,
      order: {
        ...order.toObject(),
        id: order._id,
      },
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = { createOrder, getOrder, updateOrder };
