
var taskArray = ["Take out trash", "Wash hair", "Apply for jobs", "Look up flights", "Look for apartments", "Plan birthday", "Go shopping"];

var random = function(){
  var number = Math.floor(Math.random() * (taskArray.length));
  var phrase = taskArray[number];
  return phrase;
}


module.exports.random = random;
