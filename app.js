var express = require('express');
var app = express();

var path = require("path");

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '92',
  database : 'cats_db'
});

app.get('/', function(req, res){
    //main page
    res.sendFile(path.join(__dirname, 'files/index.html'));
})
 
// 		in the html file make an ajax call to a movie nicolas-cage was in and display the json on the page
app.get('/cats', function(req, res){
    connection.connect();
    connection.query('SELECT * from cats', function (error, results, fields) {
        if (error) res.send(error);
        else res.json(results);
    });
    
    connection.end();
    
});

app.listen(3000, function(){
    console.log('listening on 3000');
});