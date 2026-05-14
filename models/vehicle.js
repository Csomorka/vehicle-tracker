const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  brand: String,
  model: String,
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
