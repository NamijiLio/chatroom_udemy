var socket ;

var URL = 'http://localhost:9090' ;

socket = io.connect(URL);

socket.emit('start');

socket.on('disconnect',function() {
    socket.emit('disconnect');
});

socket.on('recMsg',function(txt) {
    var area = document.getElementById('txt-area');
    area.innerHTML = area.innerHTML+ '\n' + txt ;
});