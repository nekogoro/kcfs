$(function() {
  var classId = '';
  var ulObj = $('#output');
  var titleObj = $('#ship-title');

  var searchBox = $('#search-box');

  $searchBox.on('input', function(event) {
    var input = $searchBox.val();
    $.getJSON('search.json', function(data) {
      for (var i = 0; i < data.length; i++) {
        if (data[i].name === input) {
          outputMaterialList(ulObj, titleObj, classId, shipId);
          break;
        }
      }
    });
  });
});
