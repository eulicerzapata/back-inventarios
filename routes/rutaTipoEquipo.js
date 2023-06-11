const { Router } = require('express')
const { createTipoEquipo, getTipoEquipos, deleteTipoEquipo, updateTipoEquipo } = require('../controllers/controlTipoEquipo')
const { validarJWT } = require('../middleware/validar_WJT')
const { validarRol } = require('../middleware/validar-rol')

const router = Router()

// crear
router.post('/',[validarJWT],[validarRol], createTipoEquipo)

// eliminar 
router.delete('/:id',[validarJWT],[validarRol], deleteTipoEquipo)


// modificar 
router.put('/:id',[validarJWT],[validarRol], updateTipoEquipo)


// listar
router.get('/',[validarJWT],[validarRol], getTipoEquipos)

module.exports = router