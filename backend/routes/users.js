const { Router } = require('express');
const router = Router();
const mysqlconnection = require('../DB/DB');
//Sign in
router.post('/registrarse', (req, res)=>{ 
    const {codigo}=req.params;
    const {nombre, Barrio, direccion, correo, contraseña}=req.body;
    let User=[nombre, Barrio, direccion, correo, contraseña];
    let new_user='INSERT INTO usuario(nombre, Barrio, direccion, correo, contraseña) VALUES(?,?,?,?,?)';
    mysqlconnection.query(new_user, User, (err, rows, fields)=>{
        if(err){
            console.error(err);
        }else{
            res.json({message: 'Registro existoso'});
        }
    });
});
//Log in
router.get('/usuarios/:correo', (req, res)=>{ 
    const {correo}=req.params;
    mysqlconnection.query('SELECT * FROM usuario WHERE correo=?', [correo], 
    (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});
//change information
router.put('/usuarios/:codigo', (req, res) =>{
    const {nombre, apellidos, direccion, contrasena, correo}=req.body;
    const {codigo}=req.params;
    let Update='UPDATE usuario SET nombre=?, apellidos=?, direccion=?, contrasena=?, correo=?';
    mysqlconnection.query(Update, (err, rows, fields) => {
        if(!err){
            res.json({status: 'Actualización con éxito'});
        }else{
            console.log(err);
        }
    });
});
//Delete user
router.delete('/usuario/:nombre', (req, res)=>{
    const {codigo}=req.params;
    mysqlconeccion('DELETE FROM usuario WHERE nombre=?',
    [codigo], (err, rows, fields)=>{
        if(!err){
            res.json({status: 'Usuario eliminado'});
        }else{
            console.log(err);
        }
    });
});
module.exports=router;