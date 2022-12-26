const express = require("express");
const router = express.Router();

const { getActivity, getDetails } = require("../controllers/profile");

router.route("/details/:userId").get(getDetails);

router.route("/activity/:userId").get(getActivity);

module.exports = router;
