var _ = require('underscore');
var string = require('string');
var getDescriptionData = require('./language/description');

var descriptions = (function(){
  var typeAndLocation = [
    '{{superlativeOne}} {{propertyType}} located moments from {{localArea}}, this {{superlativeTwo}} {{bedrooms}} bedroomed {{propertyType}} {{verb}} family friendly space',
    'This {{propertyType}} is within easy reach of the shops, bars, cafés and restaurants of {{localArea}}',
    '{{superlativeOne}} {{floor}} floor {{propertyType}} with {{bedrooms}} bedrooms, {{proximity}} shops'
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

      var aggregate = [sentenceFrom(typeAndLocation)];
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
