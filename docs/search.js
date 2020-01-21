$(function() {
  var ulObj = $('#output');
  var titleObj = $('#ship-title');

  var $searchBox = $('#search-box');
  var suggestObj = $('#suggest');

  $searchBox.on('input', function(event) {
    var input = $searchBox.val();
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
          suggestObj.append($('<li/>').text(data[i].name));
        }
      }
    });
  });
});
