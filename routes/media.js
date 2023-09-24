const { Router } = require('express')
const { createMedia, getMedia, updateMediaByID} = require('../controllers/media')
const router = Router()

// crear
router.post('/', createMedia)

// consultar todos
router.get('/', getMedia)

//actualizar
router.put('/:id', updateMediaByID)

module.exports = router;