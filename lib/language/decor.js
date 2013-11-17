var getDecorString = function(val){
  var map = {
    '2013': 'This Year',
    '2012': '2012',
    '2011': '2011',
    'pre-2010': '2010 or earlier'
  }
  return map[val];
};

module.exports = getDecorString;
