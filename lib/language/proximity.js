var getProximityDescription = function(){
  var proximityDescriptions = ['directly opposite', 'nearby', 'close to', 'conveniently located near'];
  var idx = Math.floor(Math.random()*proximityDescriptions.length);
  return proximityDescriptions[idx];
};

module.exports = getProximityDescription;
