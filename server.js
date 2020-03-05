const express = require("express")
const serveStatic = require("serve-static")
const path = require('path');
app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));

//var port = process.env.PORT
//if (port == undefined){
//	port = 8080
//};

var port = ""

if (process.env.PORT){
    port = process.env.PORT
    app.get("/", (req,res) => res.sendFile(path.join(__dirname,'/dist/index.html')))
} else {
    port = 8080
    app.get("/", (req,res) => res.sendFile(path.join(__dirname,'/public/index.html')))
}



app.listen(port);


//app.get("/", (req,res) => res.send("hey there"))