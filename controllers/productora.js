const productora = require('../models/productora')
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
            const { estado } = req.query
            const productora = await Productora.find({estado})//select * from clientes
            return res.json(productora)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

// actualizar
const updateProductoraByID = async (req = request, res = response) => {
    try{
        console.log(req.body)
        console.log(req.params)
        const datos = req.body
        const id = req.params.id
        data.fechaActualizacion = new Date()
        console.log(datos)
        const director = await Director.findByIdAndUpdate(id, datos, {new: true})
        return res.json(productora)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}

module.exports = {createProductora, 
    getProductora,
    updateProductoraByID
   }