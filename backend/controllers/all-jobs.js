const MyCustomError = require("../models/CustomError");
const Jobs = require("../models/jobs");
const Users = require('../models/users')

const getAllJobs = async (req, res, next) => {
  const allJobs = await Jobs.find();
  res.status(200).json(allJobs);
};

const saveJob = async (req, res, next) => {
  const jobId = req.body.jobId;
  let user =await Users.findById(req.user.userId)
  user = await user.savedJobs.push(jobId)
  // console.log('hi');
  // save job to database
  res.status(200).json(user.savedJobs)
};
const applyJob = async (req, res, next) => {
  const jobId = req.body.jobId;
  // get user details from user id and experience from body
  // collect resume from user
  // save job to database
  res.status(200).json({ message: "dummy message, job applied" });
};

module.exports = { getAllJobs, saveJob, applyJob };
