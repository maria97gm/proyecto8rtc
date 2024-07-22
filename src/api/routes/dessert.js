const { uploadDessert } = require('../../middlewares/file')
const {
  getDessert,
  postDessert,
  updateDessert,
  deleteDessert
} = require('../controllers/dessert')

const dessertRoutes = require('express').Router()

dessertRoutes.get('/', getDessert)
dessertRoutes.post('/', uploadDessert.single('img'), postDessert)
dessertRoutes.put('/:id', updateDessert)
dessertRoutes.delete('/:id', deleteDessert)

module.exports = dessertRoutes
