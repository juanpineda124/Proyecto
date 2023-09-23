const { Router } = require('express')
const { createDirector, getDirector, updateDirectorByID} = require('../controllers/director')
const router = Router()

// crear
router.post('/', createDirector)

// consultar todos
router.get('/', getDirector)

//actualizar
router.put('/:id', updateDirectorByID)

module.exports = router;