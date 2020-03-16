const mysql = require('mysql');


/*const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '***51x70.j053',
    database: 'caol'
});*/


const mysqlConnection = mysql.createConnection({
    host: 'us-cdbr-iron-east-04.cleardb.net',
    user: 'b3c99f7dabe4d1',
    password: 'c469fb22',
    port: 3306,
    database: 'heroku_14d779aa1e89abe'
});



mysqlConnection.connect(function (err) {
    if (err) {
        console.log('Ha ocurrido un error al conectarse', err);
        return;
    }

    console.log('La base de datos está conectada');

});


module.exports = mysqlConnection;