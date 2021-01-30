const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tasksSchema = new Schema({
  date: String,
  task: String,
});

const tasksModels = mongoose.model("tasks", tasksSchema);

module.exports = tasksModels;