import 'dotenv/config'
import cors from 'cors'
import express, { Errback, NextFunction, Request, Response } from 'express'
import router from './routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.protocol}://${req.hostname}`)
  res.locals.fullHost = `${req.protocol}://${req.hostname}:${process.env.APP_PORT}`
  next()
})
app.use(router)

app.use('/assets', express.static('assets'))

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ message: 'Page Not Found' })
})

app.use((err: Errback, req: Request, res: Response, next: NextFunction) => {
  return res.status(500).json({ message: 'Internal Error' })
})

export default app
