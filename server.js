var express = require('express');
app = express();
var Firebird = require('node-firebird');

var port = 8080;
app.listen(port);

console.log('Server started at http://localhost:'+port);


var options = {};

const path_DB= 'C:/Firebird_2_5/examples/empbuild/UCMA.FDB';
options.host = '127.0.0.1';
options.port = 3050;
options.database = path_DB;
options.user = 'SYSDBA';
options.password = 'masterkey';
options.lowercase_keys = false; // set to true to lowercase keys
options.role = null;            // default
options.pageSize = 4096;        // default when creating database
options.pageSize = 4096;        // default when creating database
options.retryConnectionInterval = 1000; // reconnect interval in case of connection drop

Firebird.attach(options, function(err, db) {

    if (err)
        throw err;

    // db = DATABASE PATERNO,MATERNO,NOMBRE,NIVEL,TELEFONO,CELULAR,MATRICULA,FOTOGRAFIA
    db.query('SELECT PATERNO,MATERNO,NOMBRE,NIVEL,TELEFONO,CELULAR,MATRICULA,FOTOGRAFIA FROM ALUMNOS WHERE NIVEL=?',["ODON"], function(err, result) {
        console.log(result);
        // IMPORTANT: close the connection
        db.detach();
    });

});

