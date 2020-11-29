const {Router}=require('express');
const router=Router();
const mysqlconnection=require('../DB/DB');
//Search
router.get('/buscar:nombre', (req, res) =>{
    const {codigo_abarrote}=req.params;
    mysqlconnection.query('SELECT * FROM abarrote WHERE nombre=?',
    [nombre], (err, rows, fields) => {
        if(err){
            console.log(err.message);
        }else{
            res.json(rows);
        }
    });
});
//sign in
router.post('/registrar_abarrote', (req,res) => {
    const {codigo}=req.params;
    const {nombre, Barrio}=req.body;
    let new_grocery=[nombre, Barrio];
    let queryGrocery='INSERT INTO abarrote(Barrio, nombre) VALUES(?,?)';
    mysqlconnection.query(queryGrocery, new_grocery, (err, rows, fields) => {
        if(err){
            console.log(err.message);
        }else{
            res.json({message: 'Registro Existoso'});
        }
    });
});
//Change Information
router.put('/abarrote:codigo_abarrote', (req, res) =>{
    const {codigo_abarrote}=req.params;
    const {barrio, ciudad, nomrbe}=req.body;
    let queryChange='UPDATE abarrote SET barrio=?, ciudad=?, nombre=?';
    mysqlconnection.connection(queryChange, [barrio, ciudad, nombre], (err, rows, fields)=>{
        if(err){
            console.log(err.message);
        }else{
            res.json({status: 'Cambio exitoso'});
        }
    });
});
//Delete grocery
router.delete('/abarrote:codigo_abarrote', (req, res) => {
    const {codigo_abarrote} = req.params;
    mysqlconnection.query('DELETE FROM abarrote WHERE codigo_abarrote=?',
    [codigo_abarrote], (err, rows, fields) => {
        if(!err){
            res.json({status: 'Se ha borrado con éxito'});
        }else{
            console.log(err);
        }
    });
});
module.exports=router;