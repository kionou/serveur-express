
// var http = require('http');
// let fs = require('fs')

// const requrstListener = function(req ,res ){
   
//     fs.readFile('index.html' , (err,data) =>{
//         if(err){
//             res.writeHead(404)
//             res.end(" ce ficher n'existe pas")
//         }else{
//             res.writeHead(200)
//             res.end(data)
//         }
//     })
// }

// const server = http.createServer(requrstListener);
// server.listen(8080);


const express = require("express");
const  app = express();
app.use(express.static('plublic'));

app.listen(8080,
    () => console.log("serveur listen on port 8080")
    );
