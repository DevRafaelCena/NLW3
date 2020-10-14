import express from 'express'
//importacao da conexão com o db
import './database/connection'


import routes from './routes'

const app = express()

app.use(express.json())
app.use(routes)

app.listen(3333);