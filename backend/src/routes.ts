import { Router } from 'express'
import * as cars from './cars.json'

const router = Router()

router.get('/', (req, res) => {
  const _cars = cars.items.map(element => ({...element, image:{url:`${res.locals.fullHost}${element.image.url}`}}))
  res.json(_cars)
})

export default router
