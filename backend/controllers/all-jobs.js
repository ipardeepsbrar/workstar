const MyCustomError = require("../models/CustomError");

const getAllJobs = (req, res, next) => {
  const dummyJobs = [{ job: "IT guy", salary: "20k", id: 1 }];
  // const dummyJobs = [];

  if (dummyJobs.length < 1) {
    throw new MyCustomError("no jobs available right now", 501);
  }

  res.status(200).json({ dummyJobs });
};

const saveJob = (req, res, next) => {
  const jobId = req.body.jobId;

  // save job to database
};
const applyJob = (req, res, next) => {
  const jobId = req.body.jobId;
  // get user details from user id and experience from body
  // collect resume from user
  // save job to database
  res.status(200).json({ message: "dummy message, job applied" });
};

module.exports = { getAllJobs, saveJob, applyJob };
