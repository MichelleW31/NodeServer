var express = require("express");
var routes = express.Router();


routes.get("/tasks", function(req, res){
  res.send("Get has been successful");
  console.log("Get has been successful");
});

routes.post("/tasks", function(req, res){
  res.send("Post has been successful");
  console.log("Post has been successful");
});

routes.put("/tasks", function(req, res){
  res.send("Put has been successful");
  console.log("Put has been successful");
});

routes.delete("/tasks", function(req, res){
  res.send("Delete has been successful");
  console.log("Delete has been successful");
});
//How is this console logging to terminal

module.exports= routes;
