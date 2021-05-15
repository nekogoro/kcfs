var type = '';

$(function() {
  $('input[name="tab_btn"]').change(function() {
    var result = $(this).attr('id');
    
    if (result === 'tab1') {
      type = TAB1;
    } else if (result === 'tab2') {
      type = TAB2;
    } else {
      type = '';
    }
    
    pushTypeUrl();
  })

  // TODO URL で記録する
  $('#option_label').change(function() {
    var label = $('#option_label').prop('checked');
  
    if (label) {
      $('.label_wrap').show();
    } else {
      $('.label_wrap').hide();
    }
  })

  $('#option_compact').change(function() {
    var compact = $('#option_compact').prop('checked');

    if (compact) {
      $('.label_full').hide();
      $('.label_compact').show();
    } else {
      $('.label_full').show();
      $('.label_compact').hide();
    }
  })
});

function pushTypeUrl() {
  if (type === '') {
    return;
  }

  history.pushState(null, null, './?t=' + type);
}

function pushShipIdUrl (shipId) {
  if (shipId === '') {
    pushTypeUrl();
  }

  if (type.length === 0) {
    history.pushState(null, null, './?id=' + shipId);
  } else {
    history.pushState(null, null, './?t=' + type + '&id=' + shipId);
  }
}