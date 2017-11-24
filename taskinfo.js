var random = function(){
  var array = ["I'm 26", "I'm 5'5", "I like zombie movies", "I love to travel", "My middle name is Mattie", "I have asthma", "I love being near water and nature"];
  var number = Math.floor(Math.random() * (array.length));
  var phrase = array[number];
  return phrase;
}


module.exports.random = random;
