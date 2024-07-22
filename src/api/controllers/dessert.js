const { deleteImgCloudinary } = require('../../utils/deleteFile')
const Dessert = require('../models/dessert')

const getDessert = async (req, res, next) => {
  try {
    const allDesserts = await Dessert.find()
    return res.status(200).json(allDesserts)
  } catch (error) {
    return res.status(404).json('No hemos podido acceder a los postres')
  }
}

const postDessert = async (req, res, next) => {
  try {
    const newDessert = new Dessert(req.body)
    if (req.file) {
      newDessert.img = req.file.path
    }
    const dessertSaved = await newDessert.save()
    return res.status(201).json(dessertSaved)
  } catch (error) {
    return res.status(404).json('No se ha podido publicar el postre')
  }
}

const deleteDessert = async (req, res, next) => {
  const { id } = req.params
  try {
    const dessertDeleted = await Dessert.findByIdAndDelete(id)
    deleteImgCloudinary(dessertDeleted.img)

    return res.status(200).json(dessertDeleted)
  } catch (error) {
    return res.status(400).json('No se ha podido eliminar el postre')
  }
}

const updateDessert = async (req, res, next) => {
  try {
    const { id } = req.params
    const updateData = req.body
    if (req.file) {
      updateData.img = req.file.path
    }
    const updatedDessert = await Dessert.findByIdAndUpdate(id, updateData, {
      new: true
    })
    return res.status(201).json(updatedDessert)
  } catch (error) {
    return res.status(400).json('No se ha podido actualizr el postre')
  }
}

module.exports = { getDessert, postDessert, updateDessert, deleteDessert }
