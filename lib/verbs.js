var getVerb = function(){
  var verbs = ['Offers', 'Provides'];
  var idx = Math.floor(Math.random()*verbs.length);
  return verbs[idx];
};

module.exports = getVerb;
