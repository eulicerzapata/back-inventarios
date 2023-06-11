const express = require('express')
const app = express()
const cors = require ('cors')
// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors({
    origin: '*'
}))

const tipoEquipo = require('./routes/rutaTipoEquipo')
const estadoEquipo = require('./routes/rutaEstadoEquipo')
const usuario = require('./routes/rutaUsuario')
const logiarse = require('./routes/rutaAut')
const marca = require('./routes/rutaMarca')
const inventario = require('./routes/rutaInventario')

// URI o endpoint
 app.use('/api/tipoequipos', tipoEquipo)
 app.use('/api/estadoequipo', estadoEquipo)
 app.use('/api/usuario', usuario)
 app.use('/api/auth', logiarse)
 app.use('/api/marca', marca)
 app.use('/api/inventario', inventario)

module.exports = app