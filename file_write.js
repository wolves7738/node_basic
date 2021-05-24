var fs = require('fs');


//파일에 입력될 문자열
var data = 'My first data...\r\nhello there';

// 비동기 방식으로 파일 생성 함수의 인자는 앞에서부터 순서대로 파일명, 입력데이터, 인코딩, 콜백함수
fs.writeFile('file01_async.txt', data, 'utf-8', function(err){
    if(err){
        // 파일 생성중 오류가 발생하면 오류 출력
        console.log(err);
    }else{ 
        // 파일 생성중 오류가 없으면 완료 문자열 출력
        console.log('01 write done');
    }
});

// 동기 방식은 callback 함수를 통한 오류처리를 할 수 없으므로 함수 전체를 try 문으로 예외 처리
try{
    // 동기 방식으로 파일을 생성. 함수의 인자는 앞에서 부터 순서대로 파일명, 입력데이터, 인코딩
    fs.writeFileSync('file02_sync.txt', data, 'utf-8');
    console.log('02 write done');
}catch(err){
    console.log(err);
}