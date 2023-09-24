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
        // validando cliente
        const generoDB = Genero.findOne({
            _id: genero._id,
            estado: true
        })// select * from clientes where _id=? and estado=true
        if(!generoDB){
            return res.status(400).json({msg: 'genero invalido'})
        }
        // validando etapas
        const directorDB = Director.findOne({
            _id: director._id,
            estado: true
        })// select * from etapas where _id=? and estado=true
        if(!directorDB){
           return res.status(400).json({msg: 'director invalido'})
        }
        // validando tipo proyecto
        const productoraDB = Productora.findOne({
            _id: productora._id,
            estado: true
        })// select * from tipoproyecto where _id=? and estado=true
        if(!productoraDB){
           return res.status(400).json({msg: 'productora invalido'})
        }
        // validando universidad
        const tipoDB = Tipo.findOne({
            _id: tipo._id,
            estado: true
        })// select * from universidad where _id=? and estado=true
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
            const mediaDB = await Media.find()//select * from inventarios
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
        const { id } = req.params.id
        const datos = req.body
        const media  = await Media.findByIdAndUpdate(id, datos, {new: true})
        return res.status(201).json(media)
    }catch(error){
        console.log(error)
        return res.status(500).json({msj: error})
    }

}


module.exports = { createMedia, 
    getMedia, 
    updateMediaByID}