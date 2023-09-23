const express = require('express')
const {mongoconn} = require('./databases/configuration')
const dotenv = require('dotenv').config()
const app = express()
app.use(express.json())
const test = require('./routes/test')
const generos = require('./routes/genero')
const directores = require('./routes/director')
const productoras = require('./routes/productora')
const tipos = require('./routes/tipo')

mongoconn()


app.use('/api/v1/tests', test)
app.use('/api/v1/generos', generos)
app.use('/api/v1/directores', directores)
app.use('/api/v1/productoras', productoras)
app.use('/api/v1/tipos', tipos)



module.exports = app