import http from 'http';
import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import socketio from 'socket.io';
//import api from './sever/routes';
import bodyParser from 'body-parser';

const app = express();
const server = http.createServer(app);

const io = socketio(server);

//const router = express.Router().use('/api', api);

//app.use(router);

app.use(express.static(path.join(__dirname, 'public')));

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  const addr = server.address();
  console.log(`Server running ${addr.address}:${addr.port}`);
});

const onConnect = (socket) => {

};

io.on('connect', onConnect);
