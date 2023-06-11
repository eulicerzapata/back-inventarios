const { Router } = require('express')
const { createInventario, getInventarios, deleteInventario, updateInventario} =
 require('../controllers/controlInventario')
 const { validarJWT } = require('../middleware/validar_WJT')
const { validarRol } = require('../middleware/validar-rol')

const router = Router()

// crear
router.post('/',[validarJWT],[validarRol], createInventario)

// eliminar 
router.delete('/:id',[validarJWT],[validarRol], deleteInventario)


// modificar 
router.put('/:id',[validarJWT],[validarRol], updateInventario)


// consultar todos
router.get('/',[validarJWT], getInventarios)

module.exports = router;