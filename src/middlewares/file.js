const multer = require('multer')
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')

const storageRestaurant = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'Restaurantes',
    allowedFormated: ['jpg', 'png', 'gif', 'jpeg', 'webp']
  }
})

const storageDessert = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'Postres',
    allowedFormated: ['jpg', 'png', 'gif', 'jpeg', 'webp']
  }
})

const uploadRestaurant = multer({ storage: storageRestaurant })
const uploadDessert = multer({ storage: storageDessert })

module.exports = { uploadRestaurant, uploadDessert }
