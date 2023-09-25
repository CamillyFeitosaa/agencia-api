import { type Router } from 'express'

export default (router: Router): void => {
  router.get('/', (request, response) =>
    response.json({ olá: 'Esta é a rota principal' }))
}
