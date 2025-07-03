const express = require("express");
const {
  createOrder,
  getOrder,
  updateOrder,
} = require("../controllers/orderControllers");
const router = express.Router();

router.post("/", createOrder); // Place order
router.get("/:orderId", getOrder); // Get order by ID
router.patch("/:orderId", updateOrder); // Update order (e.g., make priority)

module.exports = router;
