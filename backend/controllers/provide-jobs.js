const MyCustomError = require("../models/CustomError");
const Jobs = require('../models/jobs');

const allOpenedPositions = async (req, res, next) => {
  const jobs = await Jobs.find({openedBy: req.user.userId})
  res.status(200).json(jobs);
};


const getCandidates = (req, res, next) => {
  // get candidates for a job from database
  const candidates = ['dummy candidates'];

  if (!candidates) {
    res.status(200).json({ message: "No candidates for this job yet" });
  }
  res.status(200).json({ candidates });
};

const openPosition = async (req, res, next) => {
  const {title, description} = req.body;
  if (!title || !description){
    return next(new MyCustomError('Please provide all the values', 400));
  }
  const job = {title, description, openedBy: req.user.userId}

  const returnedJob = await Jobs.create(job);
  res.status(201).json({msg:`A ${returnedJob.title}'s position has been opened by you.`})
};

module.exports = { allOpenedPositions, getCandidates, openPosition };
