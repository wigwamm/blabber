var _ = require('underscore');
var superlatives = require('./superlatives');
var bedrooms = require('./bedroomString');
var verb = require('./verbs');
var proximityDescription = require('./proximity');
var getFloor = require('./floor');
var getDecorString = require('./decor');
var propertyType = require('./propertyType');

var getDescriptionData = function(content){
  return {
    propertyType: propertyType(content.details.property_type),
    superlativeOne: superlatives(),
    superlativeTwo: superlatives(),
    bedrooms: bedrooms(content.details.bedrooms),
    verb: verb(),
    proximity: proximityDescription(),
    floor: getFloor(content.details.entrance_floor),
    localArea: 'Old town', // TODO - Get from postcode,
    last_decorated: getDecorString(content.details.last_decorated)
  };
};

module.exports = getDescriptionData;
