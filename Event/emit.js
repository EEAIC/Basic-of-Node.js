var Calc = require('./calc3');

var calc1 = new Calc();

console.log('Calc에 stop 이벤트 전달함.');

calc1.emit('stop');

