const jwt = require('jsonwebtoken');

const generarJWT = (usuario)=>{
    const payload={ 
        _id: usuario._id,
        nombre:usuario.nombre,
        email:usuario.email,
        contraseña:usuario.contraseña,
        rol:usuario.rol
    };

    const token =jwt.sign(payload,'123456', {expiresIn:'12h'});
    return token;
}

module.exports={
    generarJWT
}