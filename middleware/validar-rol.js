const jwt = require('jsonwebtoken');

const validarRol = (req, res, next)=>{
    if (req.payload.rol != 'administrador'){
        return res.status(401).json({mensaje:'no autoriazado' })
    }
    next();
}

module.exports={
    validarRol
}