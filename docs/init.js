const TAB1 = "list";
const TAB2 = "input";

$(function() {
  var ulObj = $('#output');
  var titleObj = $('#ship-title');
  var shipTitle = "";

  var arg = new Object;
  var pair = location.search.substring(1).split('&');
  for (var i=0; pair[i]; i++) {
    var kv = pair[i].split('=');
    arg[kv[0]] = kv[1];
  }

  if (equalsIgnoreCase(arg.t, TAB2)) {
    $('input[id=tab2]:radio').prop('checked', true);
  } else {
    $('input[id=tab1]:radio').prop('checked', true);
  }
  
  var params = arg.id.split('_');
  var param_class = params[0];
  var param_ship = params.length === 3 ? params[1] + '_' + params[2] : params[1];
  $.getJSON('combinedData.json', function(data) {
    for (var i = 0; i < data.length; i++) {
      if (equalsIgnoreCase(data[i].class, param_class) && equalsIgnoreCase(data[i].ship, param_ship)) {
        outputMaterialList(ulObj, titleObj, data[i].name, data[i].class, data[i].ship);
        break;
      }
    }
  });
});

function equalsIgnoreCase(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase();
}