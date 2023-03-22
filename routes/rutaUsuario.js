const { Router } = require('express')
const { createUsuario,updateUsusario,  getUsuario, deleteUsusario } = require('../controllers/controlUsuario')

const router = Router()

// crear
router.post('/', createUsuario)

// eliminar 
router.delete('/:id', deleteUsusario)


// modificar 
router.put('/:id', updateUsusario)


// listar
router.get('/', getUsuario)

module.exports = router