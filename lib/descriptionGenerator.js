var _ = require('underscore');
var string = require('string');
var getDescriptionData = require('./language/description');
var getSentenceTemplates = require('./language/sentences');

var descriptions = (function(){
  return {
    generate: function(request, data){
      var type = request.params.type;
     
      var data = getDescriptionData(request.body);
      var aggregate = getSentenceTemplates();
  
      var description_sentence = '';
      var description_signature = '';

      _.each(aggregate, function(obj){
          var interpolated = string(obj.sentence).template(data).capitalize().s;
          description_signature += obj.id;
          description_sentence += interpolated + '. ';
      });

      return {
        "id": description_signature,
        "sentence": description_sentence
      };
    }
  };
}());

module.exports = descriptions;
