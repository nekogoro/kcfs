const CHEVRON ='<li class="parent no1"><input type="checkbox" id="ch1" checked/><label class="box" for="ch1"></label>'

function outputMaterialList(ulObj, titleObj, shipTitle, classId, shipId) {
  $.getJSON("equipments.json" , function(data) {
    ulObj.empty();
    if (shipTitle !== '') {
      titleObj.text(shipTitle);
    } else {
      titleObj.empty();
    }
    var isEmpty = true;
    for(var i = 0; i < data.length; i++) {
      var subObj;
      var label = generateLabelsForList(data[i].type);
      var markorId = generateListMarkor(data[i].id);
      if (data[i].title.indexOf('その他') == -1) {
        subObj = $('<li/>').html(markorId + label + '<a href="https://akashi-list.me/#w' + data[i].id + '" title="「明石の工廠早見表」装備ページ" target="_blank" rel="noopener">' + data[i].title + '</a>'
          + ' <a href="https://wikiwiki.jp/kancolle/' + data[i].title + '" title="「艦これ wiki」装備ページ" target="_blank" rel="noopener"><i class="icon icon-export"></i></a>');
      } else {
        subObj = $('<li/>').html(markorId + label + data[i].title);
      }
      var isBonusFound = false;
      for(var j = 0; j < data[i].bonus.length; j++) {
        for(var k = 0; k < data[i].bonus[j].items.length; k++) {
          if (data[i].bonus[j].items[k].ship_class == shipId) {
            var synergyItem = generateListMarkor(data[i].id + '-' + k) + data[i].bonus[j].synergy;
            subObj.append($('<ul/>')
              .append($('<li/>').append(synergyItem)
                .append($('<ul/>')
                  .append($('<li>').append(data[i].bonus[j].items[k].text.replace(/(..)(-[0-9])/g, '$1<span class="bonus_minus">$2</span>'))))
                    // .replace(/(火力.[0-9]+)/g, '<span class="bonus_firepower">$1</span>')
                    // .replace(/(雷装.[0-9]+)/g, '<span class="bonus_torpedo">$1</span>')
                    // .replace(/(対空.[0-9]+)/g, '<span class="bonus_aa">$1</span>')
                    // .replace(/(対潜.[0-9]+)/g, '<span class="bonus_asw">$1</span>')
                    // .replace(/(索敵.[0-9]+)/g, '<span class="bonus_los">$1</span>')
                    // .replace(/(回避.[0-9]+)/g, '<span class="bonus_evasion">$1</span>')
                    // .replace(/(装甲.[0-9]+)/g, '<span class="bonus_armor">$1</span>')
                    // .replace(/(射程.*$)/g, '<span class="bonus_other">$1</span>')
                    // .replace(/(速力.*$)/g, '<span class="bonus_other">$1</span>')
            ));
            isBonusFound = true;
            break;
          } else if (data[i].bonus[j].items[k].ship_class == classId) {
            var synergyItem = generateListMarkor(data[i].id + '-' + k) + data[i].bonus[j].synergy;
            subObj.append($('<ul/>').attr('class', 'list_child')
              .append($('<li/>').append(synergyItem)
                .append($('<ul/>')
                  .append($('<li>').append(data[i].bonus[j].items[k].text.replace(/(..)(-[0-9])/g, '$1<span class="bonus_minus">$2</span>'))))
                    // .replace(/(火力.[0-9]+)/g, '<span class="bonus_firepower">$1</span>')
                    // .replace(/(雷装.[0-9]+)/g, '<span class="bonus_torpedo">$1</span>')
                    // .replace(/(対空.[0-9]+)/g, '<span class="bonus_aa">$1</span>')
                    // .replace(/(対潜.[0-9]+)/g, '<span class="bonus_asw">$1</span>')
                    // .replace(/(索敵.[0-9]+)/g, '<span class="bonus_los">$1</span>')
                    // .replace(/(回避.[0-9]+)/g, '<span class="bonus_evasion">$1</span>')
                    // .replace(/(装甲.[0-9]+)/g, '<span class="bonus_armor">$1</span>')
                    // .replace(/(射程.*$)/g, '<span class="bonus_other">$1</span>')
                    // .replace(/(速力.*$)/g, '<span class="bonus_other">$1</span>')
            ));
            isBonusFound = true;
            break;
          }
        }
      }
      if (isBonusFound) {
        isEmpty = false;
        ulObj.append(subObj);
        checkOption();
      }
    }
    if (isEmpty) {
      ulObj.append($('<li/>').html('この艦に適用される装備ボーナスは登録されていません'));
    }
    pushShipIdUrl(shipId);
  });
}

function checkOption() {
  var minus = $('#option_minus').prop('checked');
  var label = $('#option_label').prop('checked');
  var compact = $('#option_compact').prop('checked');

  if (minus) {
    $('.bonus_minus').css('color', '#ff4b00');
  } else {
    $('.bonus_minus').css('color', '');
  }

  if (label) {
    $('.label_wrap').show();
  } else {
    $('.label_wrap').hide();
  }

  if (compact) {
    $('.label_full').hide();
    $('.label_compact').show();
  } else {
    $('.label_full').show();
    $('.label_compact').hide();
  }
}

function generateListMarkor(id) {
  var markorId = 'i-' + id;
  return '<li class="list_parent"><input type="checkbox" id="' + markorId
        + '" checked/><label class="box" for="' + markorId
        + '"></label>';
}