var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var url = require('url');
var mysql = require('mysql');
var nbr=1;
server.listen(3000);


  //================================rooter===============================

      //==================Home=================
        app.get('/home', function (req, res) {
          res.sendfile(__dirname + '/index.html');
        });

        app.get('/', function (req, res) {
          res.sendfile(__dirname + '/index.html');
        });
      //==================Home=================

      //==================Room===========================
        app.get('/room/:slug/:id', function (req, res) {
          res.sendfile(__dirname + '/room.html');
          nbr = req.params.id;
        });
      //==================Room===========================

  //================================rooter===============================

  //===============Events===============
    io.of('/').on('connection',function(){
      console.log('You are in Home1');
    });

    io.of('/home').on('connection',function(){
      console.log('You are in Home');
    });

    io.of('/room/:slug/:id').on('connection',function(){
      console.log('in Rooms num '+nbr);
    });
  //===============Events===============