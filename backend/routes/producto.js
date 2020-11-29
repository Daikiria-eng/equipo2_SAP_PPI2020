const {Router}=require('express');
const router=Router();
const mysqlconnection=require('../DB/DB');
//Sign up product
router.post('/producto', (req,res) => {
    const {nombre, marca, tipo}=req.body;
    let product = [nombre, marca, tipo];
    mysqlconnection.query('INSERT INTO producto(nombre, marca, tipo) VALUES(?,?,?)',
    (err, rows, fields)=>{
        if(err){
            return console.log(err.message);
        }else{
            res.json({status: 'Registro exitoso'});
        }
    });
    const {codigo_producto}=req.params;
});
//Delete product
router.delete('/producto/:codigo_producto', (req, res) =>{
    const {codigo_producto}=req.params;
    mysqlconnection.query('DELETE FROM producto WHERE codigo_producto=?', [codigo_producto],
    (err, rows, fields)=>{
        if(!err){
            res.json({status: 'Se borró satisfactorio'});
        }else{
            console.log(err.message);
        }
    });
});
module.exports=router;
