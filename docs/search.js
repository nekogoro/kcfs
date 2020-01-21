$(function() {
  var ulObj = $('#output');
  var titleObj = $('#ship-title');

  var $searchBox = $('#search-box');

  $searchBox.on('input', function(event) {
    var input = $searchBox.val();
    var flag = false;
    $.getJSON('search.json', function(data) {
      for (var i = 0; i < data.length; i++) {
        if (data[i].name === input) {
          outputMaterialList(ulObj, titleObj, data[i].class, data[i].ship);
          flag = true;
          break;
        }
      }
      if (!flag) {
        console.log(input + 'is not found.');
      }
    });
  });
});
