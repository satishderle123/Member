function square(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Math.pow(x, 2));
      }, 2000);
    });
  }
  
  square(10).then(data => {
    console.log(data);
  });

//--------------------------------------------------------------------
var sql = require("mssql");
var result = "VarChar";

const request = new sql.Request()
request.input('myval', sql.VarChar, 'Satish Derle')
request.query('select @myval as myval', (err, result) => {
    console.log("Is this perform first?");
    console.dir(result);
    console.log(result);
    __dirname='E:\Angular\member';
    console.log(__dirname);
})