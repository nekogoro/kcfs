$(function() {
  var ulObj = $('#output');
  var titleObj = $('#ship-title');

  var $searchBox = $('#search-box');
  var $suggestObj = $('#suggest');

  $searchBox.on('input', function(event) {
    var input = $searchBox.val();
    var flag = false;
    $.getJSON('search.json', function(data) {
      for (var i = 0; i < data.length; i++) {
        if (data[i].name.toLowerCase() === input.toLowerCase()) {
          outputMaterialList(ulObj, titleObj, data[i].name, data[i].class, data[i].ship);
          flag = true;
        } else if (~data[i].name.toLowerCase().indexOf(input.toLowerCase())) {
          $suggestObj.append($('<li/>').text(data[i].name));
        }
      }
      if (!flag) {
        ulObj.empty();
        titleObj.empty();
      }
    });
  });
});
