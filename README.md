# Proyecto 8
## Un dulce no amarga a nadie 🍰

Este proyecto ha sido creado agrupando Restaurantes y diferentes postres que ofrecen. Podrás incluir en nuestra Base de Datos imágenes, tanto de tu restaurante favorito como de tu postre más dulce.

## ¿Cómo iniciar el proyecto?

- `npm i`
- `npm run dev`
- `npm run dessertSeed`: para añadir datos al modelo Postres.

## ¿Qué variables se han usado en el proyecto?

- `DB_URL`
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`

## ¿Qué librerías tenemos instaladas?

- Express
- Mongoose
- Nodemon
- Dotenv
- Cloudinary
- Multer
- Multer-storage-cloudinary

## Endpoints

### Desserts

> En la siguiente tabla tendrás la información referida a los endpoints utilizados en este proyecto, referido a los postres

| Método | Ruta                     | Descripción                               |
|--------|--------------------------|-------------------------------------------|
| GET    | /api/v1/desserts         | Obtener todos los postres                 |
| POST   | /api/v1/desserts         | Crear un nuevo postre                     |
| PUT    | /api/v1/desserts/:id     | Actualizar un postre por ID               |
| DELETE | /api/v1/desserts/:id     | Eliminar un postre por ID                 |

### Restaurantes

> En la siguiente tabla tendrás la información referida a los endpoints utilizados en este proyecto, referido a los restaurantes

| Método | Ruta                     | Descripción                               |
|--------|--------------------------|-------------------------------------------|
| GET    | /api/v1/restaurants      | Obtener todos los restaurantes            |
| POST   | /api/v1/restaurants      | Crear un nuevo restaurante                |
| PUT    | /api/v1/restaurants/:id  | Actualizar un restaurante por ID          |
| DELETE | /api/v1/restaurants/:id  | Eliminar un restaurante por ID            |
