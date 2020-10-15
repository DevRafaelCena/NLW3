import express from 'express'
import 'express-async-errors'
//importacao da conexão com o db
import './database/connection'
import path from 'path'

import cors from 'cors'

import errorHandler from './errors/handler'

import routes from './routes'

const app = express()

app.use(express.json())
app.use(routes)
app.use('/uploads',express.static(path.join(__dirname,'..','uploads')))
app.use(cors())

app.use(errorHandler)
app.listen(3333);