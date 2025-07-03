const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs"); // Use bcryptjs if that's what you installed
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

// REGISTER CONTROLLER
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.json({
        success: false,
        message: "Missing Details",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userData = {
      name,
      email,
      password: hashedPassword,
    };

    const newUser = new userModel(userData);
    const user = await newUser.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.json({
      success: true,
      token,
      user: { name: user.name },
      message: "User Signed in successfully!",
    });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};

// LOGIN CONTROLLER
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({
        success: false,
        message: "User does not exist!",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      res.json({
        success: true,
        token,
        user: { name: user.name },
        message: "User Logged in successfully!",
      });
    } else {
      return res.json({
        success: false,
        message: "Invalid Credentials",
      });
    }
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};

// Export your controllers
module.exports = {
  register,
  login,
};
