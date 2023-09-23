const { Router } = require('express')
const { createTipo, getTipo, updateTipoByID} = require('../controllers/tipo')
const router = Router()

// crear
router.post('/', createTipo)

// consultar todos
router.get('/', getTipo)

//actualizar
router.put('/:id', updateTipoByID)

module.exports = router;