var http = require("http");
var myInfo = require("./taskinfo");

http.createServer(onRequest).listen(3000);


function onRequest(request,response){
  response.writeHead(200, {"Content-type": "text/plain"});
  response.write(myInfo.random());
  response.end();
}
