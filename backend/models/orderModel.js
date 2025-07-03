const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customer: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  cart: [
    {
      pizzaId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pizza",
        required: true,
      },
      name: String,
      quantity: Number,
      totalPrice: Number, // price * quantity
    },
  ],
  priority: { type: Boolean, default: false },
  position: { type: String }, // e.g., "lat,lng"
  status: { type: String, default: "placed" }, // placed, preparing, delivered, etc.
  orderPrice: { type: Number, required: true }, // total price before priority
  priorityPrice: { type: Number, default: 0 }, // extra for priority
  estimatedDelivery: { type: Date },
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
