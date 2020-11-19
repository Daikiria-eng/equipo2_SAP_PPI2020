const { Router } = require('express');
const router = Router();
const mysqlconnection = require('../DB/DB');
//Sign in
router.post('/registrarse', (req, res)=>{
    const {nombre, apellidos, direccion}=req.body;
    let User=[nombre, apellidos, direccion];
    let new_user='INSET INTO (nombre, apellidos, direccion) VALUES(?,?,?,?)';
    mysqlconnection.query(new_user, User, (err, rows, fields)=>{
        if(err){
            return console.error(error.message);
        }else{
            res.json({message: 'Registro existoso'});
        }
    });
});
//Log in
router.get('/usuarios/:codigo_usuario', (req, res)=>{
    mysqlconnection.query('SELECT * FROM usuarios WHERE codigo_usuario=?', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});
//change information
router.put('/usuarios/:codigo_usuario', (req, res) =>{
    const {nombre, apellidos, direccion}=req.body;
    const {codigo_usuario}=req.params;
    let Update='UPDATE usuario SET nombre=?, apellidos=?, direccion=?';
    mysqlconnection.query(Update, (err, rows, fields) => {
        if(!err){
            res.json({status: 'Actualización con éxito'});
        }else{
            console.log(err);
        }
    });
});
//Delete user
router.delete('/usuario/:codigo_usuario', (req, res)=>{
    const {id}=req.params;
    mysqlconeccion('DELETE FROM usuario WHERE codigo_usuario=?',
    [codigo_usuario], (err, rows, fields)=>{
        if(!err){
            res.json({status: 'Deleción exitosa'});
        }else{
            console.log(err);
        }
    });
});
module.exports=mysqlconnection;
