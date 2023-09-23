const{Router} = require('express')
const router = Router()
const {testing} = require('../controllers/test')

router.get('/test', testing)

module.exports = router