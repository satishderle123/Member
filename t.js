const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  	res.send('Hello World')
	console.log('On console logs')
	console.log('Second hello')
})
 
app.listen(3000)