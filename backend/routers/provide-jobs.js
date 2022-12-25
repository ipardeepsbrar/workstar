const express = require("express");
const router = express.Router();

const providerController = require("../controllers/provide-jobs");

router
  .route("/opened-positions/:userId")
  .get(providerController.allOpenedPositions);

router
  .route("/opened-positions/candidates/:userId")
  .get(providerController.getCandidates);

router.route("/open-position/:userId").post(providerController.openPosition);

module.exports = router;
