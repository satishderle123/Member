const config = {
    user:  'sa',
    password: 'ISD@123',
    server: '117.254.196.48',
    //password: 'Spd@10073',
    //server: '192.168.43.189',   
    database:'Member'
}

const sql = require('mssql')

sql.on('error', err => {
    console.log("Error while connecting database :- " + err);
    res.send(err);
})

sql.connect(config).then(pool => {    
    return pool.request()
        //.input('input_parameter', sql.Int, value)
        //.output('output_parameter', sql.VarChar(50))
        .execute('spGetMembers')
}).then(result => {
    console.dir(result.recordset[1])   //result.recordset[0] returns 1st record not recordset
}).catch(err => {
    console.log("Error while connecting database :- " + err);
    res.send(err);
})
