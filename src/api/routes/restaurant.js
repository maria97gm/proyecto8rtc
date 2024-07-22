const { uploadRestaurant } = require('../../middlewares/file')
const {
  getRestaurant,
  deleteRestaurant,
  updateRestaurant,
  postRestaurant
} = require('../controllers/restaurant')

const restaurantRoutes = require('express').Router()

restaurantRoutes.get('/', getRestaurant)
restaurantRoutes.post('/', uploadRestaurant.single('img'), postRestaurant)
restaurantRoutes.put('/:id', updateRestaurant)
restaurantRoutes.delete('/:id', deleteRestaurant)

module.exports = restaurantRoutes
