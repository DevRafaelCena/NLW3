import express from 'express'

//importacao da conexão com o db
import './database/connection'
const app = express()

app.use(express.json())

app.get('/users', (request,response) => {
   return response.json({message:"Hello world"})
})

app.listen(3333);