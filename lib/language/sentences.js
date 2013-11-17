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
var utilities = [
  'Utilities included are {{included_utilities}}',
  '{{included_utilities}} are included'
];
var managedByAndCost = [
  'the asking price is £{{cost}} and the property is {{managed_by}} managed',
  'the property is managed by {{managed_by}}, and the asking price is £{{cost}}'
];

var getSentenceTemplates = function(){
  var sentenceFrom = function(list){
    var idx = Math.floor(Math.random()*list.length);
    return { id: idx, sentence: list[idx] };
  };

  return [
    sentenceFrom(typeAndLocation),
    sentenceFrom(floorAndDecor),
    sentenceFrom(utilities),
    sentenceFrom(managedByAndCost)
  ];
}

module.exports = getSentenceTemplates;
