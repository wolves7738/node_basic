var http = require('http');

var url = require('url');
// 요청한 url 중에 Query String 을 객체로 만들기 위해 querystring 모듈 사용
var querystring = require('querystring');

var server = http.createServer(function(request,response){
    console.log('--- log start ---');
    // 브라우저에서 요청한 주소를 parsing하여 객체화 후 출력
    var parsedUrl = url.parse(request.url);
    console.log(parsedUrl);
    // 객체화된 url 중에 Query String 부분만 따로 객체화 후 출력
    var parsedQuery = querystring.parse(parsedUrl.query, '&', '=');
    console.log(parsedQuery);

    console.log('--- log end ---')

    response.writeHead(200,{'Content-Type' : 'text/html;charset=UTF-8'});
    response.end('var1의 값은 '+parsedQuery.var1+', var2의 값은 '+parsedQuery.var2+', var3의 값은 '+parsedQuery.var3);

});

server.listen(8080, function(){

    console.log('Server is running...');

});