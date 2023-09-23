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
            const { estado } = req.query
            const generoDB = await Genero.find({estado})//select * from clientes
            return res.json(generoDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

// actualizar
const updateGeneroByID = async (req = request, res = response) => {
    try{
        console.log(req.body)
        console.log(req.params)
        const datos = req.body
        const id = req.params.id
        data.fechaActualizacion = new Date()
        console.log(datos)
        const genero = await Genero.findByIdAndUpdate(id, datos, {new: true})
        return res.json(genero)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}

module.exports = {createGenero, 
    getGenero,
    updateGeneroByID
   }
