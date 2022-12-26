const MyCustomError = require("../models/CustomError");

const allOpenedPositions = (req, res, next) => {
  const dummyJobs = [{ job: "IT guy", salary: "20k" }];

  if (!dummyJobs) {
    throw new MyCustomError("no jobs available right now", 500);
  }

//   res.status(200).json({ dummyJobs });
  res.status(200).json('all opened positions by you page');
};

const getCandidates = (req, res, next) => {
  // get candidates for a job from database
  const candidates = ['dummy candidates'];

  if (!candidates) {
    res.status(200).json({ message: "No candidates for this job yet" });
  }
  res.status(200).json({ candidates });
};

const openPosition = (req, res, next) => {
  // create and save job in database
  // create a reference to job in user model
};

module.exports = { allOpenedPositions, getCandidates, openPosition };
