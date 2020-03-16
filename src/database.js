const mysql = require('mysql');


/*const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '***51x70.j053',
    database: 'caol'
});*/



// const mysqlConnection = mysql.createConnection({
//     host: 'us-cdbr-iron-east-04.cleardb.net',
//     user: 'b3c99f7dabe4d1',
//     password: 'c469fb22',
//     port: 3306,
//     database: 'heroku_14d779aa1e89abe'
// });

//Para validar con esta
// var pool = mysql.createPool({
//     connectionLimit : 100,
//     host : 'us-cdbr-iron-east-05.cleardb.net',
//     user : 'b5837b0f1d3d06',
//     password : '9d9ae3d5',
//     database : 'heroku_db89e2842543609',
//     debug : 'false'
// });

const mysqlConnection = mysql.createConnection('mysql://b3c99f7dabe4d1:c469fb22@us-cdbr-iron-east-04.cleardb.net/heroku_14d779aa1e89abe?reconnect=true');


mysqlConnection.connect(function (err) {
    if (err) {
        console.log('Ha ocurrido un error al conectarse', err);
        return;
    }

    console.log('La base de datos está conectada');

});


module.exports = mysqlConnection;