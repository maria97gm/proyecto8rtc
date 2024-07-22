const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: true },
    address: { type: String, required: true },
    desserts: [{ type: mongoose.Types.ObjectId, ref: 'desserts' }]
  },
  {
    timestaps: true,
    collection: 'restaurants'
  }
)

const Restaurant = mongoose.model('restaurant', restaurantSchema, 'restaurant')

module.exports = Restaurant
