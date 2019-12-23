var mysql = require('mysql');

var db = mysql.createConnection({
    host: 'localhost:3306',
    user: 'bariwali21_apartment',
    password: '(-9Wb7KtHwFk',
    database: 'bariwali21_apartmentms'
});

db.connect((err)=>{
    if(!err){
        console.log('DB connection success.');
    }else{
        console.log('DB connection failed.\n'+JSON.stringify(err,undefined,2));
    }
});

module.exports = db;