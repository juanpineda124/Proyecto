const Tipo = require('../models/tipo')
const { request, response} = require('express')

// crear
const createTipo = async (req = request, res = response) => {
    const {nombre, descripcion} = req.body

    try{
    const datos = {
        nombre,
        descripcion
    }

    const tipo = new Tipo(datos)
    console.log(tipo)
    await tipo.save()
    return res.status(201).json(tipo)
    }catch(error){
        console.log(error)
        return res.status(500).json({msj: error})
    }
}

//listar
const getTipo = async (req = request, res = response) => {
    try{
        const tipo = await Tipo.find()//select * from tipo
        return res.json(tipo)
    }catch(error){
         console.log(error)
        return res.status(500).json({msj: error}) 
     }
}

// actualizar
const updateTipoByID = async (req = request, res = response) => {
    try{
        console.log(req.body)
        console.log(req.params)
        const datos = req.body
        const id = req.params.id
        datos.fechaModificacion = new Date()
        console.log(datos)
        const tipo = await Tipo.findByIdAndUpdate(id, datos, {new: true})
        return res.json(tipo)
    }catch(error){
        console.log(error)
        return res.status(500).json({msj: error}) 
    }
}

module.exports = {createTipo, 
    getTipo,
    updateTipoByID
   }
