
const { Router } = require('express')
const { logiarUsuario} = require('../controllers/controlauth')

const router = Router()

// login
router.post('/', logiarUsuario)


module.exports = router