var _ = require('underscore');
var string = require('string');

var descriptions = (function(){
  // TODOS
  // 1. Supply a range of superlatives
  // 2. Draw conclusions based on {{decor}} or {{locationDesc}} to say who might be the {{idealTenantType}} 
  // 3. Decide on real input data, instead of passing strings we might maintain a map of ids to descriptions
  // ie... "locationType": 1 -> "Hip urban neighborhood", "locationType": 2 -> "Haven for intellectuals"
  var typeAndLocation = [
    'A beautiful {{propertyType}}, {{locationDesc}}',
    '{{locationDesc}}, this {{propertyType}} is perfect for anyone'
  ];
  var furnishingAndBeds = [
    'Decorated in a {{decor}} style, the property has {{numBeds}}BD and {{numBaths}}BR',
    'This {{decor}} dwelling has {{numBeds}} beds and {{numBaths}} baths'
  ];
  var footNotes = [
    'Restrictions: pets {{pets}}, DSS {{dss}}',
    'Pets are {{pets}}, DSS tenants are {{dss}}'
  ];

  var sentenceFrom = function(list){
    var idx = Math.floor(Math.random()*list.length);
    return {
      id: idx,
      sentence: list[idx]
    };
  };

  return {
    generate: function(request, content, callback){
      var aggregate = [sentenceFrom(typeAndLocation), sentenceFrom(furnishingAndBeds), sentenceFrom(footNotes)];
      var description_sentence = '';
      var description_signature = '';

      _.each(aggregate, function(obj){
          var interpolated = string(obj.sentence).template(content).capitalize().s;
          description_signature += obj.id;
          description_sentence += interpolated + '. ';
      });

      callback(null, {
        id: description_signature,
        sentence: description_sentence
      });
    }
  };
}());

module.exports = descriptions;
