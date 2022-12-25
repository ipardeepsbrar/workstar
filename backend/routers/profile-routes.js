const express = require('express');
const router = express.Router();

// yet to create controllers for these routes

router.route('/details/:userId').get()
router.route('/activity/:userId').get()

module.exports = router;