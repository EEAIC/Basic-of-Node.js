var http = require('http');

var server = http.createServer();

var host = 'localhost';
var port = 3000;
server.listen(port, host, 50000, function() { //50000 -> 최대 접속자 수
    console.log('웹서버가 실행되었습니다. : ' + host + ':' + port);
});
