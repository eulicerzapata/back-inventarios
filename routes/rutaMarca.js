const { Router } = require('express')
const { createMarca, getMarca, deleteMarca, updateMarca } = require('../controllers/controlMarca')
const { validarJWT } = require('../middleware/validar_WJT')
const { validarRol } = require('../middleware/validar-rol')

const router = Router()

// crear
router.post('/',[validarJWT],[validarRol], createMarca)

// eliminar 
router.delete('/:id',[validarJWT],[validarRol], deleteMarca)


// modificar 
router.put('/:id',[validarJWT],[validarRol], updateMarca)


// listar
router.get('/',[validarJWT],[validarRol], getMarca)

module.exports = router