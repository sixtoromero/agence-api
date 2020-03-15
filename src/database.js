const mysql = require('mysql');

/*const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '***51x70.j053',
    database: 'caol'
});*/

const mysqlConnection = mysql.createConnection({
    host: 'us-cdbr-iron-east-04.cleardb.net',
    user: 'bd174f69686133',
    password: '5fa10d1a',
    database: 'heroku_d5531d8aec95f1a'
});

mysqlConnection.connect(function (err) {
    if (err) {
        console.log('Ha ocurrido un error al conectarse', err);
        return;
    }

    console.log('La base de datos está conectada');

});


module.exports = mysqlConnection;