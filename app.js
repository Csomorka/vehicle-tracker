const express = require('express');
const mongoose = require('mongoose');
const vehicleRoutes = require('./routes/vehicleRoutes');

require('dotenv').config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

const app = express();
app.use(express.json());

const port = process.env.PORT || 8000;

mongoose
  .connect(DB)
  .then((con) => {
    console.log('MongoDB connected');

    app.listen(port, () => {
      console.log(`Server is running on port: ${port} `);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use('/api/vehicles', vehicleRoutes);
