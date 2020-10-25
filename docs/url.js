var type;

$(function() {
  $('input[name="tab_btn"]').change(function() {
    var result = $(this).attr('id');
    
    if (result === 'tab1') {
      type = TAB1;
    } else if (result === 'tab2') {
      type = TAB2;
    } else {
      type = "";
    }
    
    if (type.length !== 0) {
      history.pushState(null, null, './?t=' + type);
    }
  })
});

function pushShipIdUrl (shipId) {
  if (shipId === '') {
    return;
  }
  if (type.length === 0) {
    history.pushState(null, null, './?id=' + shipId);
  } else {
    history.pushState(null, null, './?t=' + type + '&id=' + shipId);
  }
}