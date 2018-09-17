const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req,res){
    var fileName = process.argv[2];

    fs.readFile(fileName, (err, file) => {
        if(err){
          res.end(err)
         }
         else{
             res.statusCode = 200;
             res.end(file.toString());
         }
       });

})

server.listen(3001,function(){
    console.log("Server listening on port 3001");
});