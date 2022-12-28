const express = require("express");
const router = express.Router();
const auth = require('../middlewares/auth')

const allJobsController = require('../controllers/all-jobs');

router.route('/').get(allJobsController.getAllJobs);

router.route('/save/:jobId').get(auth, allJobsController.saveJob);

router.route('/apply/:jobId/:userId').post(allJobsController.applyJob);


module.exports = router;