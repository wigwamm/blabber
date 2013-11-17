var _ = require('underscore');
var string = require('string');
var getDescriptionData = require('./language/description');

var descriptions = (function(){


  var typeAndLocation = [
    '{{superlativeOne}} {{propertyType}} located moments from {{localArea}}, this {{superlativeTwo}} {{bedrooms}} bedroomed {{propertyType}} {{verb}} family friendly space',
    'This {{propertyType}} is within easy reach of the shops, bars, cafés and restaurants of {{localArea}}, and has {{bedrooms}} bedrooms',
    'A {{superlativeOne}} {{propertyType}} with {{bedrooms}} bedrooms, {{proximity}} shops'
  ];

  var floorAndDecor = [
    'The {{propertyType}} is located on the {{floor}} level and was decorated in {{last_decorated}}',
    'Located on the {{floor}} floor, the {{superlativeOne}} property was decorated in {{last_decorated}}',
    'This {{superlativeOne}} residence on the {{floor}} floor, was redecorated in {{last_decorated}}'
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
      var type = request.params.type;
     
      var data = getDescriptionData(content);

      var aggregate = [sentenceFrom(typeAndLocation), sentenceFrom(floorAndDecor)];
      var description_sentence = '';
      var description_signature = '';

      _.each(aggregate, function(obj){
          var interpolated = string(obj.sentence).template(data).capitalize().s;
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
