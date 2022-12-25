const express = require("express");
const router = express.Router();

const allJobsController = require('../controllers/all-jobs');

router.route('/').get(allJobsController.getAllJobs);

router.route('/save/:jobId/:userId').get(allJobsController.saveJob);

router.route('/apply/:jobId/:userId').post(allJobsController.applyJob);


module.exports = router;