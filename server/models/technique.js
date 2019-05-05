const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const techSchema = new Schema({
  name: String,
  img: String
});

module.exports = mongoose.model("technique", techSchema);
