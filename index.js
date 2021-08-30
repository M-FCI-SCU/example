const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path')
 

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
/********************** Cors Issue **************************/
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization')
    next()
  })
const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.on('connection', () => { /* … */ });
server.listen(3000,()=>{
    console.log("Server Running")
});