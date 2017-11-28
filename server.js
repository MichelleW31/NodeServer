var express = require("express");
var app = express();
var myInfo = require("./taskinfo");
var myRoute = require("./route.js");

app.use(express.static(__dirname + "/public"));

//Need help
app.use("/", myRoute);

var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log("App's server listening at http://localhost:%s", port);
});




// Creating server with nodejs
// function onRequest(request,response){
//   response.writeHead(200, {"Content-type": "text/plain"});
//   response.write(myInfo.random());
//   response.end();
// }
