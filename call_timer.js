var module = require('./custom_module_timer.js');
// module 내부에 선언된 timer 객체를 통해 tick 이벤트를 캐치하고, 이벤트 발생시마다 현재시간 출력
module.timer.on('tick', function(time){
    var time = new Date();
    console.log('now:'+time);
});