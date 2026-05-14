const Vehicle = require('../models/vehicle.js');

const getVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.status(200).json(vehicles);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getVehicleById = async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    res.status(200).json({ success: true, data: vehicle });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const createVehicle = async (req, res) => {
  try {
    const newVehicle = await Vehicle.create(req.body);

    res.status(201).json(newVehicle);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteVehicle = async (req, res) => {
  try {
    await Vehicle.findByIdAndDelete(req.params.id);

    res.json({ message: 'Vehicle deleted' });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateVehicle = async (req, res) => {
  try {
    const updatedVehicle = await Vehicle.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    res.json(updatedVehicle);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getVehicles,
  getVehicleById,
  createVehicle,
  deleteVehicle,
  updateVehicle,
};
