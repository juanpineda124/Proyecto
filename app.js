const express = require('express')
const {mongoconn} = require('./databases/configuration')
const dotenv = require('dotenv').config()
const app = express()
app.use(express.json())
const generos = require('./routes/genero')
const directores = require('./routes/director')
const productoras = require('./routes/productora')
const tipos = require('./routes/tipo')
const medias = require('./routes/media')

mongoconn()


app.use('/api/v1/generos', generos)
app.use('/api/v1/directores', directores)
app.use('/api/v1/productoras', productoras)
app.use('/api/v1/tipos', tipos)
app.use('/api/v1/medias', medias)



module.exports = app