const Usuario = require("../models/modeloUsuario");
const { request, response, Router } = require("express");
const bycript = require("bcryptjs");
const {generarJWT}=require('../helpers/jwt')



const logiarUsuario = async (req = request, res = response) => {
    try {
      const data = req.body;
      const email = data.email;
      const contraseña = data.contraseña;
  
      const salt = bycript.genSaltSync();
      const password = bycript.hashSync(contraseña, salt);
  
      const usuarioBD = await Usuario.findOne({ email });
      if (!usuarioBD) {
        return res.status(400).json({ msg: "usuario no se encuentra" });
      }
        const esIgual=bycript.compareSync(contraseña, password);

        if(!esIgual){
            return res.status(400).send({mensaje:'usuario no se encuetra'});
        }

        //generar token

        const token = generarJWT(usuarioBD);

        res.json({ _id:usuarioBD._id,
           nombre: usuarioBD.nombre,
            rol: usuarioBD.rol,
             email:usuarioBD.email,
             access_token: token
             });
      
     
    } catch (e) {
      return res.status(500).json({
        msg: e,
      });
    }
  };

  module.exports = { logiarUsuario };