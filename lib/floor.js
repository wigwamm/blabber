var getFloor = function(val){
  var map = {
    G: 'garage',
    1: 'first',
    2: 'second',
    3: 'third',
    4: 'fourth',
    5: 'fifth'
  };
  return map[val];
};

module.exports = getFloor;
