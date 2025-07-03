const express = require("express");
const { register, login } = require("../controllers/authController.js");

const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);

// userRouter.post("/pay-razor", userAuth, paymentRazorPay);
// userRouter.post("/verify-razor", verifyRazorPay);

module.exports = userRouter;
