import express from 'express'
import { Image } from './imageModel.js'

const ImageRouter = express.Router()

ImageRouter.post('/upload/', async (request, response) => {

    const new_image = new Image(request.body)

    await new_image.save()

    response.json(new_image)
})

ImageRouter.get('/:id/', async (request, response) => {

    const image = await Image.findById(request.params.id);

    response.json(image)

})

export default ImageRouter