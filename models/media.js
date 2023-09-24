const { Schema, model } = require('mongoose')

const MediaSchema = Schema({
    serial: {
        type: String,
        required: [true, 'Serial requerido'],
        unique: [true, 'Media ya existe']
    },
    titulo: {
        type: String,
        required: [true, 'Titulo requerido'],
        minlength: 1
    },
    sinopsis: {
        type: String
    },
    url: {
        type: String,
        required: [true, 'URL requerido'],
    },
    imagen: {
        type: String,
    },
    fechaCreacion: {
        type: Date,
        default: new Date()

    },
    fechaModificacion: {
        type: Date,
        default: new Date()
    },
    añoEstreno: {
        type: Date
    },
   genero: {
        type: Schema.Types.ObjectId,
        ref: 'Genero',
        required: true
   },
   director: {
        type: Schema.Types.ObjectId,
        ref: 'Director',
        required: true
   },
   productora: {
        type: Schema.Types.ObjectId,
        ref: 'Productora',
        required: true
   },
   tipo: {
        type: Schema.Types.ObjectId,
        ref: 'Tipo',
        required: true
   },
})

module.exports = model('Media', MediaSchema )