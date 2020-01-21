function outputMaterialList(ulObj, titleObj, shipTitle, classId, shipId) {
  $.getJSON("materials.json" , function(data) {
    ulObj.empty();
    if (shipTitle !== '') {
      titleObj.text(shipTitle);
    } else {
      titleObj.empty();
    }
    var isEmpty = true;
    for(var i = 0; i < data.length; i++) {
      var subObj = $('<li/>').html('<a href="https://akashi-list.me/#w' + data[i].id + '" title="「明石の工廠早見表」装備ページ" target="_blank" rel="noopener">' + data[i].title + '</a>'
        + ' <a href="https://wikiwiki.jp/kancolle/' + data[i].title + '" title="「艦これ wiki」装備ページ" target="_blank" rel="noopener"><span class="fi fi-link"></span></a>');
      var isBonusFound = false;
      for(var j = 0; j < data[i].bonus.length; j++) {
        for(var k = 0; k < data[i].bonus[j].items.length; k++) {
          if (data[i].bonus[j].items[k].ship_class == shipId) {
            subObj.append($('<ul/>')
              .append($('<li/>').text(data[i].bonus[j].synergy)
                .append($('<ul/>')
                  .append($('<li>').text(data[i].bonus[j].items[k].text)))
            ));
            isBonusFound = true;
            break;
          } else if (data[i].bonus[j].items[k].ship_class == classId) {
            subObj.append($('<ul/>')
              .append($('<li/>').text(data[i].bonus[j].synergy)
                .append($('<ul/>')
                  .append($('<li>').text(data[i].bonus[j].items[k].text)))
            ));
            isBonusFound = true;
            break;
          }
        }
      }
      if (isBonusFound) {
        isEmpty = false;
        ulObj.append(subObj);
      }
    }
    if (isEmpty) {
      ulObj.append($('<li/>').html('この艦に適用される装備ボーナスは登録されていません'));
    }
  });
}
