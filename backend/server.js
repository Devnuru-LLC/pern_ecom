//const express = require('express');

import express from 'express';
import helmet from 'helmet'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv';


import productRoutes from './routes/productRoutes.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// console.log(PORT);

app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors()); // Enable CORS for all routes
app.use(helmet()); // Helmet is a Security middleware that helps you protect your Express apps by setting various HTTP headers.
app.use(morgan('dev')); // Logging middleware


app.use('/api/products', productRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});     

//module.exports = app;
// export default app;



