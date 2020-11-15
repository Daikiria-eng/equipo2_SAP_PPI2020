const mysql=require('mysql');
const mysqlconnection=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'rank',
    multiplestatements: true
});
mysqlconnection.connect((error) => {
    if(error){
        console.log(error);
        return;
    }else{
        console.log(`Connected DB`);
    }
});
module.exports=mysqlconnection;