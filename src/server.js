//*********  access this api in broser as http://localhost:5709/api/memmast
var express = require("express");
var bodyParser = require("body-parser"); //for POST 
var sql = require("mssql");
var app = express(); 

// Body Parser Middleware, USED IN POST Request JSON Body.
app.use(bodyParser.json()); 

//CORS Middleware
app.use(function (req, res, next) {
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});  

//Setting up server
 var server = app.listen(process.env.PORT || 5709, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
 });

//Initiallising connection string
var dbConfig = {
    user:  'sa',
    password: 'ISD@123',
    server: '117.254.196.48',
    //password: 'Spd@10073',
    //server: '192.168.43.189',   
    database:'Member'
};

//Function to connect to database and execute query----> SECOND ENTRY POINT
var  executeQuery = function(res, query){             
     sql.connect(dbConfig, function (err) {
         if (err) {   
                     console.log("Error while connecting database :- " + err);
                     res.send(err);
                  }
                  else {
                         // create Request object
                         var request = new sql.Request();
                         //query to the database
                         request.query(query, function (err, data) { 
                           if (err) {
                                      console.log("Error while querying database :- " + err);
                                      res.send(err);
                                      sql.close();
                                     }
                           else {
                                      res.send(data.recordset); // OR data.recordset    
                                      var mRows=data.rowsAffected;
                                      console.log(mRows);
                                      //console.log(data.recordset[0].MemNo, " ",data.recordset[0].Name );                         
                                      //console.log(data.recordset[0]);
                                      //sql.close();
                                }
                           }); 
                       }
      });           
}

//GET API  ----->  THIS IS ENTRY POINT OF THE APIs
app.get("/api/memmast", function(req , res){
                var query = "SELECT MemNo,RegNo,Name,Dead,MobileNo,Sex,Addr1,Addr2,Village,Tal,Corr1,Corr2,Cent_Code,Centre,Cent_SubCode,Cent_SubCentre,Cent_VilCode,mName,mAddr1,mAddr2,mVillage,mTal,mCorr1,mCorr2,Remark FROM memmast WHERE village='SAIKHEDA'"; 
                executeQuery (res, query);
                //res.send('Response send to client::'+req.query.name);
                console.log("In app.get function");
});

//GET API  ----->  For specific IDs format http://localhost:5709/api/memmast/NIP3267
//req.query.age used in GET Query having ? in URL, req.params.age used in GET Route where : is used
app.get("/api/memmast/:id", function(req , res){
    var id = req.params.id;  //var id = req.param('id');
    console.log(id);         //OR res.send(id);
    var query = "SELECT MemNo,RegNo,Name,Dead,MobileNo,Sex,Addr1,Addr2,Village,Tal,Corr1,Corr2,Cent_Code,Centre,Cent_SubCode,Cent_SubCentre,Cent_VilCode,mName,mAddr1,mAddr2,mVillage,mTal,mCorr1,mCorr2,Remark FROM memmast WHERE memno='"+id+"'";  
    executeQuery (res, query);
    console.log("In app.get :id function");
});


//POST API....... req.body.age is used in POST
 app.post("/api/memmast", function(req, res){
                var query = "INSERT INTO [memmast] (MemNo,RegNo,Name,Dead,MobileNo,Sex,Addr1,Addr2,Village,Tal,Corr1,Corr2,Cent_Code,Centre,Cent_SubCode,Cent_SubCentre,Cent_VilCode,mName,mAddr1,mAddr2,mVillage,mTal,mCorr1,mCorr2,Remark) VALUES ('"+req.body.MemNo+"','"+req.body.RegNo+"','"+req.body.Name+"','"+req.body.Dead+"','"+req.body.MobileNo+"','"+req.body.Sex+"','"+req.body.Addr1+"','"+req.body.Addr2+"','"+req.body.Village+"','"+req.body.Tal+"','"+req.body.Corr1+"','"+req.body.Corr2+"',"+req.body.Cent_Code+",'"+req.body.Centre+"','"+req.body.Cent_SubCode+"','"+req.body.Cent_SubCentre+"','"+req.body.Cent_VilCode+"','"+req.body.mName+"','"+req.body.mAddr1+"','"+req.body.mAddr2+"','"+req.body.mVillage+"','"+req.body.mTal+"','"+req.body.mCorr1+"','"+req.body.mCorr2+"','"+req.body.Remark+"')";
                console.log(query);
                executeQuery (res, query);
                console.log("In app.post function");
});

//PUT API for update
 app.put("/api/user/:id", function(req , res){
                var query = "UPDATE [user] SET Name= " + req.body.Name  +  " , Email=  " + req.body.Email + "  WHERE Id= " + req.params.id;
                executeQuery (res, query);
                console.log("In app.put function");
});

//Patch
app.patch("/api/memmast:id", function(req , res){

});

// DELETE API
 app.delete("/api/user /:id", function(req , res){
                var query = "DELETE FROM [user] WHERE Id=" + req.params.id;
                executeQuery (res, query);
                console.log("In app.delete function");
});
