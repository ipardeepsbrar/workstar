const express = require("express");
const router = express.Router();

const providerController = require("../controllers/provide-jobs");

router
  .route("/opened-positions")
  .get(providerController.allOpenedPositions);

router
  .route("/opened-positions/candidates/:userId")
  .get(providerController.getCandidates);

router.route("/opened-positions/open-position").post(providerController.openPosition);

module.exports = router;
