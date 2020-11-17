var mysql = require('mysql');
var connection = mysql.createConnection({
    host='localhost', 
    port=3306,
    user='root',
    password= 'Erojas',
    database= 'MySQL80'
});

connection.connect();

connection.query('Select 1+1 As solution',function(error, results, fields){
    if (error) throw error;
    console.log('the soluction is:',results[0].solution)
});

connection.end();