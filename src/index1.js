//*********  access this api in broser as http://localhost:5711/api/memmast
"use strict";
var express = require("express");
var bodyParser = require("body-parser");
var sql = require("mssql");
//const  sqlite3  =  require('mssql');
var app = express(); 
const router  =  express.Router();
const cors = require('cors')
const jwt  =  require('jsonwebtoken');
const bcrypt  =  require('bcryptjs');
const SECRET_KEY = "secretkey23456";

app.use(bodyParser.json()); 
app.use(function (req, res, next) {
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});  

app.use(cors())
router.use(bodyParser.urlencoded({ extended:  false }));
router.use(bodyParser.json());
//const database = new mssql.Database("Member");
//Setting up server
app.use(router);
const  port  =  process.env.PORT  ||  5711;
const  server  =  app.listen(port, () => {
    console.log('Server listening at http://localhost:'  +  port);
}); 
//var server = app.listen(process.env.PORT || 5711, function () {
//    var port = server.address().port;
//    console.log("App now running on port", port);
// });

//Initiallising connection string
var dbConfig = {
    user:  'sa',
    password: 'ISD@123',
    server: '117.254.196.48',
    //password: 'Spd@10073',
    //server: '192.168.43.189',   
    database:'Member'
};

//*Function to connect to database and execute query----> SECOND ENTRY POINT
var  executeQuery = function(res, query)
    {             
      sql.connect(dbConfig, function (err) {
         if (err) {   
                     console.log("Error while connecting database :- " + err);
                     res.send(err);
                  }
                  else {
                         var request = new sql.Request();
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
                                }
                           }); 
                       }
      });           
}
//-----------------------------------------------------------------------------------

const  createUsersTable  = () => {
    const  sqlQuery  =  
       `CREATE TABLE IF NOT EXISTS users (
        id integer PRIMARY KEY,
        name text,
        email text UNIQUE,
        password text)`;
        sql.db
        console.log("User Table Created");
        return executeQuery (res, sqlQuery);
        //return executeQuery.run(sqlQuery);
}

const  findUserByEmail  = (email, cb) => {
    return  database.get(`SELECT * FROM users WHERE email = ?`,[email], (err, row) => {
            cb(err, row)
    });
}

const  createUser  = (user, cb) => {
    return  database.run('INSERT INTO users (name, email, password) VALUES (?,?,?)',user, (err) => {
        cb(err)
    });
}

createUsersTable();

router.get('/', (req, res) => {
    res.status(200).send('This is an authentication server');
});

router.post('/register', (req, res) => {

    const  name  =  req.body.name;
    const  email  =  req.body.email;
    console.log(req.body);
    const  password  =  bcrypt.hashSync(req.body.password);

    createUser([name, email, password], (err)=>{
        if(err) return  res.status(500).send("Server error!");
        findUserByEmail(email, (err, user)=>{
            if (err) return  res.status(500).send('Server error!');  
            const  expiresIn  =  24  *  60  *  60;
            const  accessToken  =  jwt.sign({ id:  user.id }, SECRET_KEY, {
                expiresIn:  expiresIn
            });
            res.status(200).send({ "user":  user, "access_token":  accessToken, "expires_in":  expiresIn          
            });
        });
    });
});


router.post('/login', (req, res) => {
    const  email  =  req.body.email;
    const  password  =  req.body.password;
    findUserByEmail(email, (err, user)=>{
        if (err) return  res.status(500).send('Server error!');
        if (!user) return  res.status(404).send('User not found!');
        const  result  =  bcrypt.compareSync(password, user.password);
        if(!result) return  res.status(401).send('Password not valid!');

        const  expiresIn  =  24  *  60  *  60;
        const  accessToken  =  jwt.sign({ id:  user.id }, SECRET_KEY, {
            expiresIn:  expiresIn
        });
        res.status(200).send({ "user":  user, "access_token":  accessToken, "expires_in":  expiresIn});
    });
});
