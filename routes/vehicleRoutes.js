const express = require('express');
const {
  getVehicles,
  getVehicleById,
  createVehicle,
  deleteVehicle,
  updateVehicle,
} = require('../controllers/vehicleController');

const router = express.Router();

router.route('/').get(getVehicles).post(createVehicle);
router
  .route('/:id')
  .get(getVehicleById)
  .delete(deleteVehicle)
  .patch(updateVehicle);

module.exports = router;
