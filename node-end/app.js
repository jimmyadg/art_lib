var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var fs = require('fs');
var reloadJSON = require('self-reload-json');
var file = new reloadJSON('../tf_files/data.json');
var fileChange = file.on('updated', function() {
  });
//var file = fs.readFileSync('../tf_files/data.json');
var data;
var port = 9000;
//var jsonFile = JSON.parse(file);

connections = [];
//console.log(jsonFile);

server.listen(process.env.PORT || port,err);

function err() {
  console.log("server running on 54.161.90.87:" + port)
}

app.use(express.static(__dirname +'/public'));

//socket on connect
io.on('connection',function(socket){
  connections.push(socket);
  console.log('connection %s sockets connected',connections.length);


//disconnect
  socket.on('disconnect',function(){
    connections.splice(connections.indexOf(socket),1);
    console.log('Disconnected: %s sockets connected',connections.length);
  });

  //send json data
    io.emit('display info',file);
    console.log(file);

});
