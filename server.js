import http from 'http';
import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import socketio from 'socket.io';
import bodyParser from 'body-parser';
import api from './server/api/index';
import session from 'express-session';
import connectMongo from 'connect-mongo/es5';

mongoose.connect(process.env.MONGOOSE_CONNECT_STR || 'mongodb://localhost/dnc');
mongoose.connection.on('error', (err) => {
  console.log(err);
  process.exit();
});

const app = express();

const server = http.createServer(app);

const io = socketio(server);

const router = express.Router().use('/api', api);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

const MongoStore = connectMongo(session);

app.use(session({
  secret: 'https://matmartinez.net/nsfw/',
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

app.use(express.static(path.join(__dirname, 'public')));

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", () => console.log(`Server running ${server.address().address}:${server.address().port}`));

(function() {
  Promise.prototype.select = function(apply) {
    return this.then(apply);
  }

  Promise.prototype.selectMany = function(apply) {
    return this.then(v => apply(v).then(x => x));
  }

  Promise.prototype.where = function([fail, predicate]) {
    return new Promise((resolve, reject) => {
      this.then(v => predicate(v) ? resolve(v) : reject(fail())).catch(reject);
    });
  }
})();

const onConnect = (socket) => {

};

io.on('connect', onConnect);
