var bedroomString = function(num){
  var map = {
    0: 'studio',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five'
  };
  return map[num];
};

module.exports = bedroomString;
