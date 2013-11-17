

var ordinalSuffix = function(i){
  var j = i % 10;
  if (j == 1 && i != 11) {
    return i + "st";
  }
  if (j == 2 && i != 12) {
    return i + "nd";
  }
  if (j == 3 && i != 13) {
    return i + "rd";
  }
  return i + "th";
};

var getFloor = function(val){
  var map = {
    G: 'garage',
    1: 'first',
    2: 'second',
    3: 'third',
    4: 'fourth',
    5: 'fifth',
    6: 'sixth',
    7: 'seventh',
    8: 'eighth',
    9: 'ninth'
  };
  if (map[val]){
    return map[val];
  } else {
    return ordinalSuffix(val);
  }
};

module.exports = getFloor;
