var fs = require('fs');

var data = fs.readFileSync('./package.json', 'utf8'); //다 읽을 때까지 대기
console.log(data);