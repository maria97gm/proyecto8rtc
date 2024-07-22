const mongoose = require('mongoose')

const dessertSchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
  ingredients: { type: [String] }
})

const Dessert = mongoose.model('desserts', dessertSchema, 'desserts')

module.exports = Dessert
