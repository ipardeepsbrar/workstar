const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());

// welcome page
// get('/')

// all jobs page
// get('/all-jobs')

//apply for a job
// post('/all-jobs/apply/:jobId)

//save a job
// post('/all-jobs/save/:jobId)

// opened positions by a user
// get('/provide-jobs/:userId)

// open a position
// post('/provide-jobs/open-position/:userId)

// my profile page
// get('/my-profile/details')
// get('/my-profile/activity')

const allJobsRoutes = require("./routers/all-jobs");
const providerRoutes = require("./routers/provide-jobs");

app.use("/api/all-jobs", allJobsRoutes);
app.use("/api/provide-jobs", providerRoutes);


// resource not found
app.use((req, res, next) => {
    res.status(404).json({message: 'resource does not exist'})
});

// custom error handler
app.use((err, req, res, next) => {
    res.status(err.code).json({message: err.message})
})

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
