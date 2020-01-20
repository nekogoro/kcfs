$(function() {
	var ship_type = "";
	var ship_class = "";
	var ulObj = $("#output");

	var $parent = $('.parent');
	var $children = $('.children');
	var original_parent = $parent.html();
	var original_children = $children.html();

	$('.grand').change(function() {
		var val1 = $(this).val();
		ship_type = val1;
		ulObj.empty();

		$parent.html(original_parent).find('option').each(function() {
	    var val2 = $(this).data('val');

	    if (val1 != val2) {
	      $(this).not(':first-child').remove();
	    }
	  });

	  if ($(this).val() == "") {
	    $parent.attr('disabled', 'disabled');
	    $children.attr('disabled', 'disabled');
	  } else {
	    $parent.removeAttr('disabled');
	    $children.attr('disabled', 'disabled');
	  }
	});

	$('.parent').change(function() {
		var val1 = $(this).val();
		ship_class = val1;
		ulObj.empty();

		$children.html(original_children).find('option').each(function() {
	    var val2 = $(this).data('val');

	    if (val1 != val2) {
	      $(this).not(':first-child').remove();
	    }
	  });

	  if ($(this).val() == "") {
	    $children.attr('disabled', 'disabled');
	  } else {
	    $children.removeAttr('disabled');
	  }
	});

	$('.children').change(function() {

		var ship_name = $('.children').val();
		$.getJSON("materials.json" , function(data) {
			var len = data.length;

			ulObj.empty();
			var isEmpty = true;
			var defaultObj = $('<li/>').html('この艦に適用される装備ボーナスは登録されていません');
			for(var i = 0; i < len; i++) {
				var flag = false;
				var subObj = $('<li/>').html('<a href="https://akashi-list.me/#w' + data[i].id + '" alt="「明石の工廠早見表」装備ページ" target="_blank" rel="noopener">' + data[i].title + '</a>'
							     + ' <a href="https://wikiwiki.jp/kancolle/' + data[i].title + '" alt="「艦これ wiki」装備ページ" target="_blank" rel="noopener"><i class="fi fi-link" aria-hidden=“true”></i></a>');
				var len2 = data[i].bonus.length;
				for(var j = 0; j < len2; j++) {
					var len3 = data[i].bonus[j].items.length;
					for(var k = 0; k < len3; k++) {
						if (data[i].bonus[j].items[k].ship_class == ship_name) {
							subObj.append($('<ul/>')
								.append($('<li/>').text(data[i].bonus[j].synergy)
									.append($('<ul/>')
										.append($('<li>').text(data[i].bonus[j].items[k].text)))
							));
							flag = true;
							break;
						} else if (data[i].bonus[j].items[k].ship_class == ship_class) {
							subObj.append($('<ul/>')
								.append($('<li/>').text(data[i].bonus[j].synergy)
									.append($('<ul/>')
										.append($('<li>').text(data[i].bonus[j].items[k].text)))
							));
							flag = true;
							break;
						}
					}
				}
				if (flag) {
					isEmpty = false;
					ulObj.append(subObj);
				}
			}
			if (isEmpty) {
				ulObj.append(defaultObj);
			}
		});

	});

});
