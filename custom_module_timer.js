var EventEmitter = require('events');
// interval 값 설정 1초에 한번 씩 호출
var sec = 1;
// timer 변수를 EventEmitter 로 초기화
exports.timer = new EventEmitter();
// setInterval 을 사용해 1초에 한번 씩 timer 객체에 tick 이벤트 발생
setInterval(function(){
    exports.timer.emit('tick');
}, sec*1000)