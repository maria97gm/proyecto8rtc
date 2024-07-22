require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/config/db')
const restaurantRoutes = require('./src/api/routes/restaurant')
const dessertRoutes = require('./src/api/routes/dessert')
const { connectCloudinary } = require('./src/config/cloudinary')

connectDB()
connectCloudinary()
const app = express()
app.use(express.json())

app.use('/api/v1/restaurants', restaurantRoutes)
app.use('/api/v1/desserts', dessertRoutes)

app.listen(3000, () => {
  console.log('Haz click aquí para acceder al servidor: http://localhost:3000')
})

app.use('*', (req, res) => {
  res.status(404).json('😴')
})
