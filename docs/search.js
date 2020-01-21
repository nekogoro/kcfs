$(function() {
  var ulObj = $('#output');
  var titleObj = $('#ship-title');

  var $searchBox = $('#search-box');
  var suggestObj = $('#suggest');
  var suggestArray = [];

  $searchBox.on('input', function(event) {
    var input = $searchBox.val();
    suggestArray.empty();
    suggestObj.empty();
    ulObj.empty();
    titleObj.empty();
    if (input === '') {
      return;
    }
    $.getJSON('search.json', function(data) {
      for (var i = 0; i < data.length; i++) {
        if (data[i].name.toLowerCase() === input.toLowerCase()) {
          outputMaterialList(ulObj, titleObj, data[i].name, data[i].class, data[i].ship);
        } else if (~data[i].name.toLowerCase().indexOf(input.toLowerCase())) {
          suggestArray.push(data[i]);
          suggestObj.append($('<li/>').text(data[i].name)
            .on('click', function() {
              outputMaterialList(ulObj, titleObj, suggestArray[i].name, suggestArray[i].class, suggestArray[i].ship);
              suggestObj.empty();
            })
          );
        }
      }
    });
  });
});
