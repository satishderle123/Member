//Initiallising connection string
const config = {
    user:  'sa',
    password: 'ISD@123',
    server: '117.254.196.48',
    //password: 'Spd@10073',
    //server: '192.168.43.189',   
    database:'Member'
}
const sql = require('mssql')

(async function () {
    try {
        let pool = await sql.connect(config)
        let result1 = await pool.request()
            //.input('input_parameter', sql.Int, value)
            .query("select * from memmast where mobileno='9881694295'") //id = @input_parameter')            
        console.dir(result1)
    
        /* //Stored procedure        
        let result2 = await pool.request()
            .input('input_parameter', sql.Int, value)
            .output('output_parameter', sql.VarChar(50))
            .execute('procedure_name')        
        console.dir(result2) */

    } catch (err) {
        console.log("Error while connecting database :- " + err);
        //res.send(err);
    }
})()

sql.on('error', err => {
    console.log("Error while connecting database :- " + err);
    //res.send(err);
})