const mysql = require('mysql');
const connection = mysql.createConnection({
    host:'localhost', 
    port:3306,
    user:'root',
    password: 'Erojas',
    database: 'Mydatabase'
});

connection.connect(function(err){
    if (err) {
        console.log(err);   
        return;     
    } else {
        console.log('DB is connected');
    }
});

//function insert(id, json) {
    
//};

//connection.end();

module.exports = connection;