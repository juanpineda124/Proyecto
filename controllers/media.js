const Media = require('../models/media')
const { request, response} = require('express')
const Genero = require('../models/genero')
const Director = require('../models/director')
const Productora= require('../models/productora')
const Tipo = require('../models/tipo')
// crear
const createMedia= async (req = request, res = response) => {
    try{
        const datos = req.body
        console.log(datos)
        const { genero, director, productora, tipo } = datos;
        // validando genero
        const generoDB = Genero.findOne({
            _id: genero._id,
            estado: true
        })// select * from genero where _id=? and estado=true
        if(!generoDB){
            return res.status(400).json({msg: 'genero invalido'})
        }
        // validando director
        const directorDB = Director.findOne({
            _id: director._id,
            estado: true
        })// select * from director where _id=? and estado=true
        if(!directorDB){
           return res.status(400).json({msg: 'director invalido'})
        }
        // validando productora
        const productoraDB = Productora.findOne({
            _id: productora._id,
            estado: true
        })// select * from productora where _id=? and estado=true
        if(!productoraDB){
           return res.status(400).json({msg: 'productora invalido'})
        }
        // validando tipo
        const tipoDB = Tipo.findOne({
            _id: tipo._id,
            estado: true
        })// select * from tipo where _id=? and estado=true
        if(!tipoDB){
           return res.status(400).json({msg: 'universidad invalida'})
        }      
        const media = new Media(datos)

        await media.save()
        
        return res.status(201).json(media)
    }catch(error){
        console.log(error)
        return res.status(500).json({msj: error})
        }
}

//listar todos
const getMedia = async (req = request, res = response) => {
        try{
            const mediaDB = await Media.find()//select * from media
                .populate({
                    path: 'genero'
                })
                .populate({
                    path: 'director'
                })
                .populate({
                    path: 'productora'
                })
                .populate({
                    path: 'tipo'
                })
            return res.json(mediaDB)
        }catch(error){
            console.log(error)
            return res.status(500).json({msj: error})
        }
}

// actualizar proyecto
const updateMediaByID = async (req = request, res = response) => {
    try{
        console.log(req.body)
        console.log(req.params)
        const datos = req.body
        const id = req.params.id
        datos.fechaModificacion = new Date()
        console.log(datos)
        const media = await Media.findByIdAndUpdate(id, datos, {new: true})
        return res.json(media)
    }catch(error){
        console.log(error)
        return res.status(500).json({msj: error})
    }
}


module.exports = { createMedia, 
    getMedia, 
    updateMediaByID}