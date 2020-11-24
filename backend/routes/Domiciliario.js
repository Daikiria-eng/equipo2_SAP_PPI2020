const {Router}=require('express');
const router=Router();
const mysqlconnection=require('../DB/DB');
//Sig Up
router.post('/domiciliario', (req, res)=>{
	const {barrio, ciudad}=req.body;
	const {codigo_domiciliario}=req.params;
	let domiciliario=[barrio, ciudad];
	let new_domiciliario='INSERT INTO domiciliario(codigo_domiciliario, barrio, ciudad) VALUES(?,?,?)';
	mysqlconnection.query(new_domiciliario, domiciliario, (err, rows, fields)=>{
		if(!err){
			res.json({status:'Registro satisfactorio\n'}, rows);
		}else{
			console.log(err.message);
		}
	});
});
//Search
router.get('/domiciliario:barrio', (req, res)=>{
	const {barrio}=req.params;
	mysqlconnection.query('SELECT * FROM domiciliario WHERE barrio=?',
	[barrio], (err, rows, fields)=>{
		if(!err){
			res.json(rows);
		}else{
			console.log(err.message);
		}
	});
});
//Delte
router.delete('/domiciliario', (req, res)=>{
	const {barrio, ciudad}=req.body;
	const {codigo_domiciliario}=req.params;
	mysqlconnection.query('DELETE FROM domiciliario WHERE codigo_domiciliario=?',
	[codigo_domiciliario], (err, rows, fields)=>{
		if(err){
			console.log(err.message);
		}else{
			res.json({status: 'Domiciliario eliminado'});
		}
	});
});