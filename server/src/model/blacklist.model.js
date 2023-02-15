const mongoose = require("mongoose");

const tok = new mongoose.Schema({
  token: { type: String, required: true },
});

const Blacklist = mongoose.model("BlacklistToken", tok);

module.exports = Blacklist;