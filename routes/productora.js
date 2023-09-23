const { Router } = require('express')
const { createProductora, getProductora, updateProductoraByID} = require('../controllers/productora')
const router = Router()

// crear
router.post('/', createProductora)

// consultar todos
router.get('/', getProductora)

//actualizar
router.put('/:id', updateProductoraByID)

module.exports = router;