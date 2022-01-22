// const express = require('express');
// const path = require('path');
// const app = express();

// const http = require('http').createServer(app);
// http.listen(3000, function() {
//     console.log('listening on 3000')
// });
// // app.use(express.static(path.join(__dirname, 'my-app/build')));
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, './client.html'));
// });


const express = require('express');
const path = require('path');
const app = express();
const http = require('http').createServer(app);
var io = require('socket.io')(http);

http.listen(3000, function() {
    console.log('listening on 3000')
});
// app.use(express.static(path.join(__dirname, 'socket_chat/build')));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './client.html'));
});

io.on('connection', function (socket) {
    console.log(socket.id, 'Connected');
  
    socket.emit('msg', `${socket.id} 연결 되었습니다.`);
    
    socket.on('msg', function (data) {
      console.log(socket.id, data);
      
      socket.emit('msg', `Server : "${data}" 받았습니다.`);
    });
  });