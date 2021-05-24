var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response){
    //1. 실제 요청한 주소 전체를 콘솔에 출력
    console.log(request.url);
    var parsedUrl = url.parse(request.url);
    //2. parsing 된 url 중에 서버URI에 해당하는 pathname만 따로 저장
    var resource = parsedUrl.pathname;
    console.log('resource path=%s', resource);
    //3. 리소스에 해당하는 문자열이 아래와 같으면 해당 메시지를 클라이언트에 전달
    if(resource == '/address'){
        response.writeHead(200, {'Content-Type':'text/plqin; charset=utf-8'});
        response.end('서울특별시 동대문구 천호대로');
    }else if(resource == '/phone'){
        response.writeHead(200, {'Content-Type':'text/plqin; charset=utf-8'});
        response.end('010-1234-5678');
    }else if(resource == '/name'){
        response.writeHead(200, {'Content-Type':'text/plqin; charset=utf-8'});
        response.end('Seong Hyun Min');
    }else{
        response.writeHead(404, {'Content-Type':'text/plqin; charset=utf-8'});
        response.end('404 Page Not Found!');
    }

});


server.listen(7000, function(){
    console.log('Server is running...');
});
