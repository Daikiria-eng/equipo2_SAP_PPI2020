const {Router}=require('express');
const router=Router();
const mysqlconnection=require('../DB/DB');
//Sig Up
router.post('/domiciliario', (req, res)=>{
	const {codigo}=req.params;
	const {Barrio, nombre, abarrote}=req.body;
	let domiciliario=[Barrio, nombre, abarrote];
	let new_domiciliario='INSERT INTO domiciliario(Barrio, nombre, abarrote) VALUES(?,?,?)';
	mysqlconnection.query(new_domiciliario, domiciliario, (err, rows, fields)=>{
		if(!err){
			res.json({status:'Registro satisfactorio\n'}, rows);
		}else{
			console.log(err.message);
		}
	});
});
//Search
router.get('/domiciliario:Barrio', (req, res)=>{
	const {Barrio}=req.params;
	mysqlconnection.query('SELECT * FROM domiciliario WHERE Barrio=?',
	[Barrio], (err, rows, fields)=>{
		if(!err){
			res.json(rows);
		}else{
			console.log(err.message);
		}
	});
});
//Delete
router.delete('/domiciliario', (req, res)=>{
	const {Barrio, ciudad}=req.body;
	const {codigo}=req.params;
	mysqlconnection.query('DELETE FROM domiciliario WHERE codigo=?',
	[codigo], (err, rows, fields)=>{
		if(err){
			console.log(err.message);
		}else{
			res.json({status: 'Domiciliario eliminado'});
		}
	});
});
module.exports=router;