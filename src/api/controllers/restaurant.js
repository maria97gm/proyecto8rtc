const { deleteImgCloudinary } = require('../../utils/deleteFile')
const Restaurant = require('../models/restaurant')

const getRestaurant = async (req, res, next) => {
  try {
    const allRestaurants = await Restaurant.find().populate('desserts')
    return res.status(200).json(allRestaurants)
  } catch (error) {
    return res.status(404).json('No hemos podido acceder a los restaurantes')
  }
}

const postRestaurant = async (req, res, next) => {
  try {
    const newRestaurant = new Restaurant(req.body)
    if (req.file) {
      newRestaurant.img = req.file.path
    }
    const restaurantSaved = await newRestaurant.save()
    return res.status(201).json(restaurantSaved)
  } catch (error) {
    return res.status(404).json('No se ha podido publicar el restaurante')
    console.log(error)
  }
}

const deleteRestaurant = async (req, res, next) => {
  const { id } = req.params
  try {
    const restaurantDeleted = await Restaurant.findByIdAndDelete(id)
    deleteImgCloudinary(restaurantDeleted.img)

    return res.status(200).json(restaurantDeleted)
  } catch (error) {
    return res.status(400).json('No se ha podido eliminar el restaurante')
  }
}

const updateRestaurant = async (req, res, next) => {
  try {
    const { id } = req.params
    const updateData = req.body
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true
      }
    )
    return res.status(201).json(updatedRestaurant)
  } catch (error) {
    return res.status(400).json('No se ha podido actualizr el restaurante')
  }
}

module.exports = {
  postRestaurant,
  getRestaurant,
  deleteRestaurant,
  updateRestaurant
}
