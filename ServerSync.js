var sql = require('mssql');
var config = {
    server: 'localhost',
    database: 'Member',
    user: 'sa',
    password: 'Spd@10073',
    port: 1433
};

function loadData() {
    var dbConn = new sql.Connection(config);
    dbConn.connect().then(function () {
        var request = new sql.Request(dbConn);
        request.query("select * from memmast").then(function (recordSet) {
            console.log(recordSet);
            dbConn.close();
        }).catch(function (err) {
            console.log(err);
            dbConn.close();
        });
    }).catch(function (err) {
        console.log(err);
    });
}
loadData();