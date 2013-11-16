var getPropertyType = function(val){
  var map = {
    'detached': 'Detached',
    'semi-detached': 'Semi-detached',
    'terraced': 'Terraced',
    'flat/conversion': 'Flat &mdash; Conversion',
    'flat/block': 'Flat &mdash; Appt. Block',
    'room': 'Room to Let',
    'other': 'Other'
  };
  return map[val];
};

module.exports = getPropertyType;
