const Genero = require('../models/genero')
const { request, response} = require('express')

// crear
const createGenero = async (req = request, res = response) => {
    const {nombre, descripcion} = req.body

    try{
    const generoDB = await Genero.findOne({ nombre })
        if(generoDB){
         return res.status(400).json ({mjs: 'Ya esxiste nombre'})
    }

    const datos = {
        nombre,
        descripcion
    }

    const genero = new Genero(datos)
    console.log(genero)
    await genero.save()
    return res.status(201).json(genero)
    }catch(error){
        console.log(error)
        return res.status(500).json({msj: error})
    }
}

//listar
const getGenero = async (req = request, res = response) => {
        try{
        const genero = await Genero.find()//select * from genero
        return res.json(genero)
        }catch(error){
            console.log(error)
            return res.status(500).json({msj: error})
            }
 }

// actualizar
const updateGeneroByID = async (req = request, res = response) => {
    try{
        console.log(req.body)
        console.log(req.params)
        const datos = req.body
        const id = req.params.id
        datos.fechaModificacion = new Date()
        const genero = await Genero.findByIdAndUpdate(id, datos, {new: true})
        console.log(datos)
        return res.json(genero)
    }catch(error){
        console.log(error)
        return res.status(500).json({msj: error}) 
    }
}

module.exports = {createGenero, 
    getGenero,
    updateGeneroByID
}
