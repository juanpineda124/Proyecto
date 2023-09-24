const Productora = require('../models/productora')
const { request, response} = require('express')

// crear
const createProductora = async (req = request, res = response) => {
    const {nombre, slogan, descripcion} = req.body

    try{
    const datos = {
        nombre,
        slogan,
        descripcion
    }

    const productora = new Productora(datos)
    console.log(productora)
    await productora.save()
    return res.status(201).json(productora)
    }catch(error){
        console.log(error)
        return res.status(500).json({msj: error})
    }
}

//listar
const getProductora = async (req = request, res = response) => {
    try{
        const productora = await Productora.find()//select * from productora
        return res.json(productora)
    }catch(error){
        console.log(error)
        return res.status(500).json({msj: error}) 
    }
}

// actualizar
const updateProductoraByID = async (req = request, res = response) => {
    try{
        console.log(req.body)
        console.log(req.params)
        const datos = req.body
        const id = req.params.id
        datos.fechaModificacion = new Date()
        console.log(datos)
        const productora = await Productora.findByIdAndUpdate(id, datos, {new: true})
        return res.json(productora)
    }catch(error){
        console.log(error)
        return res.status(500).json({msj: error})   
    }
}

module.exports = {createProductora, 
    getProductora,
    updateProductoraByID
   }