var io = require('socket.io').listen(9090);

io.sockets.on('connection',function(socket) {
    
    socket.on('start',function(result) {
        console.log('anyone connected to chatroom');
    });

    socket.on('disconnect',function(result) {
        console.log('anyone disconnected');
    });

});