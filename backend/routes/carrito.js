const {Router}=require('express');
const router=Router();
const mysqlconnection=require('../DB/DB');
//Search
router.get('/carrito:nombre', (req,res) => {
    mysqlconnection.query('SELECT * FROM carrito WHERE nombre=?', (err, rows, fields) => {
        if(err){
            console.log(err);
        }else{
            res.json(rows);
        }
    });
});
//Create
router.post('/carrito', (req, res) => {
    const {nombre_carrito, nombre_productos, productos}=req.body;
    let products=[nombre_carrito, nombre_productos, productos];
    let queryCarrito='INSERT INTO carrito(nombre_carrito, nombre_productos, productos) VALUES(?,?,?)';
    mysqlconnection.query(products, queryCarrito, (err, rows, fields) => {
        if(!err){
            console.log(err.message);
        }else{
            res.json({status: 'Creación exitosa'});
        }
    });
});
//Delete
router.delete('/carrito:codigo_carrito', (req, res) =>{
    const {codigo_carrito}=req.params;
    mysqlconnection.query('DELETE FROM carrito WHERE codigo_carrito=?',
    [codigo_carito], (err, rows, fields)=>{
        if(err){
            console.log(err.message);
        }else{
            res.json({status: 'Carrito eliminado con exito'});
        }
    });
});
//Change
router.put('/carrito:codigo_carrito', (req, res) => {
    const {nombre_carrito, nombre_productos, productos}=req.body;
    const {codigo_carrito}=req.params;
    mysqlconnection.query('UPDATE carrito SET nombre_carrito=?, nombre_productos=?, productos=?',
    [nombre_carrito, nombre_productos, productos], (err, rows, fields)=>{
        if(err){
            console.log(err.message);
        }else{
            res.json({status: 'Actualizacion exitosa'});
        }
    });
});
module.exports=mysqlconnection;