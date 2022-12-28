const mongoose = require("mongoose");

const JobsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  openedBy: { type: mongoose.Types.ObjectId, ref: "User", required: true },
  candidates: [{type: mongoose.Types.ObjectId, ref: 'Users'}]
});

module.exports = mongoose.model('Jobs', JobsSchema);