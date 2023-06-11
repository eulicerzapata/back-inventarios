const { Router } = require('express')
const { createEstadoEquipo, getEstadoEquipo,updateEstadoEquipo, deleteEstadoEquipo } = require('../controllers/controlEstadoEquipo')
const { validarJWT } = require('../middleware/validar_WJT')
const { validarRol } = require('../middleware/validar-rol')

const router = Router()

// crear
router.post('/',[validarJWT],[validarRol], createEstadoEquipo)

// eliminar 
router.delete('/:id',[validarJWT],[validarRol], deleteEstadoEquipo)


// modificar 
router.put('/:id',[validarJWT],[validarRol], updateEstadoEquipo)


// listar
router.get('/',[validarJWT],[validarRol], getEstadoEquipo)

module.exports = router