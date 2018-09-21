const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();

const func = require('./StringRead.js');
const server = http.createServer(app);

app.get('/product',function(req,res){
    let firstValue = req.query.firstValue;
    let secondValue = req.query.secondValue;
    const product = firstValue * secondValue;
  
    if(!product || isNaN(firstValue) || isNaN(secondValue)){
        res.sendStatus(404);
        res.end("Not found")
    }
    else{
    res.writeHead(200, {"Content-Type": "text/plain"});    
    res.end("Product is:" + product);
    }
})

app.get('/string',function(req,res){
    var str = req.query.string;
     const result = func.readString(str);
     res.send(result);
 })

 
app.get('/writefile',function(req,res){

    var rawData = req.query.rawData;
    fs.writeFile('output.txt',rawData, (err) => {
        if(err){
          res.end(err)
         }
         else{
             res.statusCode = 200;
             res.end("File saved successfully as output.txt");
         }
       });
})


server.listen(3001,function(){
    console.log("Server listening on port 3001");
});

module.exports = server;