const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const userRouter = require("../backend/routes/userRoutes");
const orderRouter = require("./routes/orderRoutes");

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected!"))
  .catch((err) => console.log("Error: ", err));

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/user/", userRouter);
app.use("/api/orders", orderRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on Port: ${PORT}`));
