var express = require('express');
var bodyParser = require('body-parser')
var app = express(); 


app.listen(3000, function() { 
console.log('server running on port 3000')})
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 

app.get('/:name', callName); 
  
function callName(req, res) { 
      
     
    var spawn = require("child_process").spawn; 
      
     
    var process = spawn('python3',["./app.py", 
                             
                          req.params.name ] ); 

     
    process.stdout.on('data', function(data) { 
        res.send(data.toString());
    } ) 
}
