const expressApp = require('express');
const app = expressApp();
const http = require('http');
const cors = require('cors');
require('dotenv').config({path :'./config/.env'});


app.use(cors({
    origin: [
            'http://localhost:3000',
            '*'
            ]
}))

app.use('/',async function(req,res){
    res.send("fuck you");
})


app.use(function(req,res){
    console.log("Here the incoming request id",req.ip, req.ips)
})
const server = http.createServer(app);
const port = process.env.port ||  5000;
server.listen(port,function(req,res){
    console.log(`server listening on ${port}`);
})
