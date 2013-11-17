var _ = require('underscore');
var string = require('string');

var stringifyUtilities = function(included){
  var stringMap = {
    'water_bill': 'water',
    'council_tax': 'council tax',
    'energy_bill': 'energy',
    'phone_bill': 'telephone',
    'internet_bill': 'internet',
    'tv_license': 'television'
  };
  
  var str = _.reduce(included, function(string, val, key){
    string += (val === true) ? stringMap[key] + ', ' : '';
    return string;
  }, '');

  // remove the last comma and replace it with ... and ...
  str = string(str.replace(/,([^,]*)$/,'$1')).trim().s;
  str = str.replace(/,([^,]*)$/,' and'+'$1');
  return str;
}

var getIncludedUtilities = function(utilities){
  return stringifyUtilities(utilities);
};

module.exports = getIncludedUtilities;
