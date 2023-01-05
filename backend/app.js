const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
require('express-async-errors');
// security packages
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss');
const rateLimiter = require('express-rate-limit');


const allJobsRoutes = require("./routers/all-jobs");
const providerRoutes = require("./routers/provide-jobs");
const profileRoutes = require("./routers/profile-routes");
const authRoutes = require("./routers/auth");
const MyCustomError = require("./models/CustomError");
const authMiddleware = require('./middlewares/auth')

const app = express();

// app.use(rateLimiter({
// 	windowMs: 15 * 60 * 1000, // 15 minutes
// 	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
// 	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
// 	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
// }))

app.use(express.json());
app.use(helmet());
app.use(cors());
// app.use(xss())

app.use("/api/all-jobs", allJobsRoutes);
app.use("/api/provide-jobs",authMiddleware, providerRoutes);
app.use("/api/my-profile",authMiddleware, profileRoutes);
app.use("/api/auth", authRoutes);

// resource not found
app.use('*',(req, res, next) => {
  res.status(404).json({ message: "resource does not exist" });
});

// custom error handler
app.use((err, req, res, next) => {
  if(res.headerSent){
    console.log('in custom error');
    return next(err)
  }
  if(err instanceof MyCustomError){
    return res.status(err.code).json({ message: err.message });
  }
  // a simple custom message
  // res.status(500).json({ message: 'Something went wrong, please try again later' });

  // the original error is sent back
  res.status(500).json({ msg: err });
});

const port = process.env.PORT || 8000;
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
