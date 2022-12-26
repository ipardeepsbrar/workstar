const MyCustomError = require("../models/CustomError");

exports.getActivity = (req, res, next) => {
    res.status(200).json('activity page')
}

exports.getDetails = (req, res, next) => {
    res.status(200).json('details page');
}
