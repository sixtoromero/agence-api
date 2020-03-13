const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '***51x70.j053',
    database: 'caol'
});

mysqlConnection.connect(function (err) {
    if (err) {
        console.log('Ha ocurrido un error al conectarse', err);
        return;
    }

    console.log('La base de datos está conectada');

});


module.exports = mysqlConnection;