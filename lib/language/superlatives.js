var getSuperlative = function(){
  var superlatives = ['Enviable', 'Peaceful', 'Superb', 'Outstanding', 'Beautiful', 'Bright', 'Spacious', 'Large', 'Stunning'];
  var idx = Math.floor(Math.random()*superlatives.length);
  return superlatives[idx];
};

module.exports = getSuperlative;
