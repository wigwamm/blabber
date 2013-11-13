var string = require('string');

var generateDescription = function(request, content, callback){
    var shortDesc = '{{furnished}} {{propertyType}} {{bedrooms}} in a popular {{decor}} development. {{dss}}, {{pets}}';
    var interpolated = string(shortDesc).template(content).s;
    callback(null, interpolated);
};

module.exports = generateDescription;
