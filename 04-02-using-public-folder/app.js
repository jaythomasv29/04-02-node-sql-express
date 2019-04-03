var express = require('express');
var app = express();

//automatically creates a url for each file in public directory
app.use(express.static("public"));

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '92',
  database : 'cats_db'
});
 
connection.connect();
 //app.get cats.json
app.get('/cats.json', function(req, res){
	connection.query('SELECT * FROM cats', function (error, results, fields) {
	  if (error) res.send(error)
	  else res.json(results);
	});
});

app.listen(3001, function(){
	console.log('listening on 3001');
});
