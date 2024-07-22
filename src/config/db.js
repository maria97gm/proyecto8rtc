const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log('Conectados a la BBDD. Seguimosss')
  } catch (error) {
    console.log('No hemos podido conectar a la BBDD')
  }
}

module.exports = { connectDB }
