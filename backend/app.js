const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
require('express-async-errors');

const app = express();

app.use(express.json());

const allJobsRoutes = require("./routers/all-jobs");
const providerRoutes = require("./routers/provide-jobs");
const profileRoutes = require("./routers/profile-routes");
const authRoutes = require("./routers/auth");
const MyCustomError = require("./models/CustomError");
const authMiddleware = require('./middlewares/auth')

app.use("/api/all-jobs", allJobsRoutes);
app.use("/api/provide-jobs",authMiddleware, providerRoutes);
app.use("/api/my-profile",authMiddleware, profileRoutes);
app.use("/api/auth", authRoutes);

// resource not found
app.use((req, res, next) => {
  res.status(404).json({ message: "resource does not exist" });
});

// custom error handler
app.use((err, req, res, next) => {
  if(err instanceof MyCustomError){
    res.status(err.code).json({ message: err.message });
  }
  res.status(500).json({ message: 'Something went wrong, please try again later' });
});

const port = process.env.PORT || 6000;
const connect = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URI);
    await app.listen(port);
    console.log("DB connected and server listening...");
  } catch (error) {
    console.log("DB ERROR or SERVER LISTENING ERROR...");
    console.log(error);
  }
};

connect();
