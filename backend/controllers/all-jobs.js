const MyCustomError = require("../models/CustomError");
const Jobs = require("../models/jobs");
const Users = require('../models/users')

// to get all jobs out there
const getAllJobs = async (req, res, next) => {
  const allJobs = await Jobs.find();
  res.status(200).json(allJobs);
};

// to get all jobs out there except my own
const getAllOtherJobs = async (req, res, next) => {
  console.log('run');
  const allJobs = await Jobs.find().ne('openedBy' ,req.user.userId)
  res.status(200).json(allJobs);
};

const saveJob = async (req, res, next) => {
  const jobId = req.params.jobId;
  const user =await Users.findById(req.user.userId)
  user.savedJobs.push(jobId);
  await user.save()
  res.status(200).json(user)
};


const applyJob = async (req, res, next) => {
  const jobId = req.body.jobId;
  // get user details from user id and experience from body
  // collect resume from user
  // save job to database
  res.status(200).json({ message: "dummy message, job applied" });
};

module.exports = { getAllJobs, getAllOtherJobs, saveJob, applyJob };
