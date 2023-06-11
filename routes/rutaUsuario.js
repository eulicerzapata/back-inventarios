const { Router } = require('express')
const { createUsuario,updateUsusario,  getUsuario, deleteUsusario } = require('../controllers/controlUsuario')
const { validarJWT } = require('../middleware/validar_WJT')
const { validarRol } = require('../middleware/validar-rol')

const router = Router()

// crear
router.post('/',[validarJWT],[validarRol], createUsuario)

// eliminar 
router.delete('/:id',[validarJWT],[validarRol], deleteUsusario)


// modificar 
router.put('/:id',[validarJWT],[validarRol], updateUsusario)


// listar
router.get('/',[validarJWT],[validarRol] ,getUsuario)



module.exports = router