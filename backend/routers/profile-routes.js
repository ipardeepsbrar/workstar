const express = require("express");
const router = express.Router();

const { getActivity, getDetails, setDetails } = require("../controllers/profile");

router.route("/details").get(getDetails).post(setDetails);

router.route("/activity/:userId").get(getActivity);

module.exports = router;
