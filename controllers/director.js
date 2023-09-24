const Director = require('../models/director')
const { request, response} = require('express')

// crear
const createDirector = async (req = request, res = response) => {
    const {nombre} = req.body

    try{
        const directorDB = await Director.findOne({ nombre })
        if(directorDB){
         return res.status(400).json ({mjs: 'Ya esxiste nombre'})
    }
    const datos = {
        nombre,
    }

    const director = new Director(datos)
    console.log(director)
    await director.save()
    return res.status(201).json(director)
    }catch(error){
        console.log(error)
        return res.status(500).json({msj: error})
    }
}

//listar
const getDirector = async (req = request, res = response) => {
    try{
        const director = await Director.find()//select * from director
        return res.json(director)
    }catch(error){
         console.log(error)
        return res.status(500).json({msj: error}) 
     }
}

// actualizar
const updateDirectorByID = async (req = request, res = response) => {
    try{
        console.log(req.body)
        console.log(req.params)
        const datos = req.body
        const id = req.params.id
        datos.fechaModificacion = new Date()
        console.log(datos)
        const director = await Director.findByIdAndUpdate(id, datos, {new: true})
        return res.json(director)
    }catch(error){
        console.log(error)
        return res.status(500).json({msj: error})
    }
}

module.exports = {createDirector, 
    getDirector,
    updateDirectorByID
}
