//1. 이벤트가 정의되어 있는 events 모듈 생성.
var EventEmitter = require('events');


//2. 생성된 이벤트 모듈을 사용하기위해 custom_object로 초기화
var custom_object = new EventEmitter();


//3. events 모듈에 선언되어 있는 on() 함수를 재정의하여 'call' 이벤트 처리
custom_object.on('call', () => {
    console.log('called events!');
});

//4. call 이벤트를 강제로 발생
custom_object.emit('call');