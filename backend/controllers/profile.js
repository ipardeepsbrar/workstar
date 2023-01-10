const MyCustomError = require("../models/CustomError");
const Users = require("../models/users");

exports.getActivity = (req, res, next) => {
    res.status(200).json('activity page')
}

exports.getDetails = async (req, res, next) => {
    const user = await Users.findById(req.user.userId).select('email firstName lastName')
    res.status(200).json(user);
}

exports.setDetails = (req, res, next) => {
    res.status(200).json('set details page');
}