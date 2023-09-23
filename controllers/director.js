const Director = require('../models/director')
const { request, response} = require('express')

// crear
const createDirector = async (req = request, res = response) => {
    const {nombre} = req.body

    try{
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
            const { estado } = req.query
            const director = await Director.find({estado})//select * from clientes
            return res.json(director)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

// actualizar
const updateDirectorByID = async (req = request, res = response) => {
    try{
        console.log(req.body)
        console.log(req.params)
        const datos = req.body
        const id = req.params.id
        data.fechaActualizacion = new Date()
        console.log(datos)
        const director = await Director.findByIdAndUpdate(id, datos, {new: true})
        return res.json(Director)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}

module.exports = {createDirector, 
    getDirector,
    updateDirectorByID
   }
