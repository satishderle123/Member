var express = require('express');
var app = express();

app.get('/', function (req, res) 
 {
    var sql = require("mssql");
    var config = 
   {
        user: 'sa',
        password: 'ISD@123',
        server: '117.254.196.48', 
        database: 'Member' 
   };

    sql.connect(config, function (err) 
    {
        if (err) console.log(err);
           var request = new sql.Request();
        request.query('select * from memmast', function (err, recordset) 
        {
            if (err) console.log(err)
               res.send(recordset);
        });
    });
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});