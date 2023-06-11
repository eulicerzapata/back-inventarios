const { Schema, model } = require('mongoose')


const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre requerido']
    },
    email: {
        type: String,
        required: [true, 'email requerido'],
        unique: true
       
    },
    
    contraseña: {
        type: String,
        required: [true, 'constraseña requerido']
    },
    rol: {
        type: String,
        required: [true, 'rol requerido'],
        enum:['administrador','docente']
    },
    fechaCreacion:{
        type: Date,
        default: new Date()
    },
    fechaActualizacion:{
        type: Date,
        default: new Date()
    },
})

module.exports = model('Usuario', UsuarioSchema)