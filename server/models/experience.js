const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const experienceSchema = new Schema({
  name: String,
  location: String,
  title: String,
  startDate: String,
  endDate: String,
  currentWork: Boolean,
  type: String,
  projects: [Schema.ObjectId],
  details: Object
});

module.exports = mongoose.model("experiences", experienceSchema);
