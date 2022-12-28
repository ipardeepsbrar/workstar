const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
require('express-async-errors');

const allJobsRoutes = require("./routers/all-jobs");
const providerRoutes = require("./routers/provide-jobs");
const profileRoutes = require("./routers/profile-routes");
const authRoutes = require("./routers/auth");
const MyCustomError = require("./models/CustomError");
const authMiddleware = require('./middlewares/auth')

const app = express();

app.use(express.json());

// CORS Error
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
// })

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
  // a simple custom message
  // res.status(500).json({ message: 'Something went wrong, please try again later' });

  // the original error is sent back
  res.status(500).json({ msg: err });
});

const port = process.env.PORT || 5000;
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
