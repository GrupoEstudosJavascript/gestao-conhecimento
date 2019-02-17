import express from 'express'
import bodyParser from 'body-parser'
import compression from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import logger from 'morgan'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import router from '~/routers'
import config from './config/configServer'
import configDatabase from './config/database'

mongoose.connect(configDatabase.urlMongo, {
  useCreateIndex: true,
  useNewUrlParser: true
})

dotenv.config()
const app = express()
app.set('port', config.port)
app.set('secretConhecimento', config.secretConhecimento)
// Definindo middlewares
app.use(logger('dev'))
app.use(cors())
app.use(helmet())
app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(router)
app.listen(app.get('port'), () => {
  console.log(`Server stated port ${app.get('port')}`)
})
