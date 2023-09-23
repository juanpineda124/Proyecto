const { Router } = require('express')
const { createGenero, getGenero, updateGeneroByID} = require('../controllers/genero')
const router = Router()

// crear
router.post('/', createGenero)

// consultar todos
router.get('/', getGenero)

//actualizar
router.put('/:id', updateGeneroByID)

module.exports = router;