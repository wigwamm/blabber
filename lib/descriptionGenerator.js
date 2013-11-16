var _ = require('underscore');
var string = require('string');
var superlatives = require('./superlatives');
var bedrooms = require('./bedroomString');
var verb = require('./verbs');
var proximityDescription = require('./proximity');
var getFloor = require('./floor');
var propertyType = require('./propertyType');

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
      
      var data = _.extend({}, content, {
        propertyType: propertyType(content.details.property_type),
        superlativeOne: superlatives(),
        superlativeTwo: superlatives(),
        bedrooms: bedrooms(content.details.bedrooms),
        verb: verb(),
        proximity: proximityDescription(),
        floor: getFloor(content.details.entrance_floor),
        localArea: 'Old town', // TODO - Get from postcode
      });

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
