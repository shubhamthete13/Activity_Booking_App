const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  dateTime: Date
});

module.exports = mongoose.model('Activity', activitySchema);
