import { Router } from 'express'

const routes = new Router()

routes.get('/', (request, response) => {
    return response.status(200).json({ message: 'Hello World, tudo certo até agora!'})
})

export default routes 