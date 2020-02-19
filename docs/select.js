$(function() {
  var classId = '';
  var ulObj = $('#output');
  var titleObj = $('#ship-title');

  var $typeList = $('#type-list');
  var $classList = $('#class-list');
  var $shipList = $('#ship-list');

  var originalClassList = $classList.html();
  var originalShipList = $shipList.html();

  $typeList.change(function() {
    var selectedId = $(this).val();
    ulObj.empty();
    titleObj.empty();

    $classList.html(originalClassList).find('option').each(function() {
      var tmpId = $(this).data('val');

      if (selectedId != tmpId) {
        $(this).not(':first-child').remove();
      }
    });

    if ($(this).val() == '') {
      $classList.attr('disabled', 'disabled');
      $shipList.attr('disabled', 'disabled');
    } else {
      $classList.removeAttr('disabled');
      $shipList.attr('disabled', 'disabled');
    }
  });

  $classList.change(function() {
    var selectedId = $(this).val();
    classId = selectedId;
    ulObj.empty();
    titleObj.empty();

    $shipList.html(originalShipList).find('option').each(function() {
      var tmpId = $(this).data('val');

      if (selectedId != tmpId) {
        $(this).not(':first-child').remove();
      }
    });

    if ($(this).val() == '') {
      $shipList.attr('disabled', 'disabled');
    } else {
      $shipList.removeAttr('disabled');
    }
  });

  $shipList.change(function() {
    var shipId = $shipList.val();
    var shipTitle = $('#ship-list option:selected').text();
    outputMaterialList(ulObj, titleObj, shipTitle, classId, shipId);
    checkOption();
  });
  
  $('input[name="option"]').change(checkOption());
});
