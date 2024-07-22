const cloudinary = require('cloudinary').v2

const deleteImgCloudinary = (imgUrl) => {
  const array = imgUrl.split('/')
  const name = array.at(-1).split('.')[0]
  let public_id = `${array.at(-2)}/${name}`

  cloudinary.uploader.destroy(public_id),()=>{
    console.log("Imagen eliminada");
  }
}

module.exports={deleteImgCloudinary}