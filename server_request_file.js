var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(request, response){
    var parsedUrl = url.parse(request.url);
    var resource = parsedUrl.pathname;
    
    // 요청된 pathname이 /hello 이면
    if(resource == '/hello'){
        // hello.html 파일을 읽은 후
        fs.readFile('hello.html', 'utf-8', function(error, data){
            // 오류가 발생하면 오류의 내용을 전달
            if(error){
                response.writeHead(500, {'Content-Type':'text/html'});
                response.end('500 Internal Server Error :'+error);
            // 오류가 없이 읽기가 완료되면 파일의 내용을 클라이언트에 전달
            }else{
                response.writeHead(200, {'Content-Type':'text/html'});
                response.end(data);
            }
        });
        //resource이 /hello가 아니면
    }else{
        response.writeHead(404, {'Content-Type':'text/plain; charset=utf-8'});
        response.end('404 Page Not Found!');
    }
});

server.listen(7000, function(){
    console.log('Server is running...');
});