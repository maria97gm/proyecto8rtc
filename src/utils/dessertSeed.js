require('dotenv').config()
const mongoose = require('mongoose')
const Dessert = require('../api/models/dessert')

const desserts = [
  {
    name: 'Tarta de Manzana',
    img: 'imagen.png',
    ingredients: ['Manzanas', 'Azúcar', 'Harina', 'Mantequilla', 'Canela']
  },
  {
    name: 'Pastel de Chocolate',
    img: 'imagen.png',
    ingredients: ['Chocolate', 'Harina', 'Azúcar', 'Huevos', 'Mantequilla']
  },
  {
    name: 'Cheesecake',
    img: 'imagen.png',
    ingredients: ['Queso crema', 'Azúcar', 'Huevos', 'Galletas', 'Mantequilla']
  },
  {
    name: 'Brownie',
    img: 'imagen.png',
    ingredients: ['Chocolate', 'Harina', 'Azúcar', 'Huevos', 'Nueces']
  }
]

mongoose.connect(process.env.DB_URL).then(async () => {
  try {
    await Dessert.insertMany(desserts)
    console.log('Se han insertado los datos de la semilla')
  } catch (error) {
    console.log('No se han insertado los datos de la semilla')
  } finally {
    mongoose.connection.close()
  }
})
