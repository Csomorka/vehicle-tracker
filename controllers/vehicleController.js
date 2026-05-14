const Vehicle = require('../models/vehicle.js');

const getVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.status(200).json({ success: true, data: vehicles });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getVehicleById = async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    if (!vehicle)
      return res
        .status(404)
        .json({ success: false, message: 'Vehicle not found' });
    res.status(200).json({ success: true, data: vehicle });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const createVehicle = async (req, res) => {
  try {
    const newVehicle = await Vehicle.create(req.body);

    res.status(201).json({ success: true, data: newVehicle });
    console.log('Vehicle successfully created');
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.findByIdAndDelete(req.params.id);

    if (!vehicle)
      return res
        .status(404)
        .json({ success: false, message: 'Vehicle not found' });

    res.status(200).json({ message: 'Vehicle deleted' });
    console.log('Vehicle successfully deleted');
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateVehicle = async (req, res) => {
  try {
    const updatedVehicle = await Vehicle.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    );
    if (!updatedVehicle)
      return res
        .status(404)
        .json({ success: false, message: 'Vehicle not found' });

    res.status(200).json({ success: true, data: updatedVehicle });
    console.log('Vehicle successfully updated');
  } catch (error) {
    res.status(500).json({
      success: false,
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
