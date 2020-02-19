$(function() {
  var ulObj = $('#output');
  var titleObj = $('#ship-title');

  var $searchBox = $('#search-box');
  var $suggestObj = $('#suggest');
  var suggestArray = [];

  $searchBox.on('input', function(event) {
    var input = $searchBox.val();
    suggestArray = [];
    $suggestObj.empty();
    ulObj.empty();
    titleObj.empty();
    if (input === '') {
      return;
    }
    $.getJSON('combinedData.json', function(data) {
      for (var i = 0; i < data.length; i++) {
        if (data[i].name.toLowerCase() === input.toLowerCase()) {
          outputMaterialList(ulObj, titleObj, data[i].name, data[i].class, data[i].ship);
        } else if (~data[i].name.toLowerCase().indexOf(input.toLowerCase()) || ~data[i].kana.indexOf(input)) {
          suggestArray.push(data[i]);
          $suggestObj.append($('<li/>').text(data[i].name));
        }
      }
    });
    $(document).on('click', '#suggest li', function() {
      var i = $(this).index();
      $searchBox.val(suggestArray[i].name);
      outputMaterialList(ulObj, titleObj, suggestArray[i].name, suggestArray[i].class, suggestArray[i].ship);
      $suggestObj.empty();
      suggestArray = [];
    });
  });
  
  $('input[name="option"]').change(checkOption());
});
