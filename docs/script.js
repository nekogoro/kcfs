$(function() {
	var ship_class = "";
	var ulObj = $("#output");

	var $children = $('.children');
	var original = $children.html();

		$('.parent').change(function() {
		var val1 = $(this).val();
		ship_class = val1;
		ulObj.empty();

		$children.html(original).find('option').each(function() {
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
			for(var i = 0; i < len; i++) {
				var flag = false;
				var subObj = $('<li/>').html('<a href="https://akashi-list.me/#w' + data[i].id + '" target="_blank">' + data[i].title + '</a>');
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
					ulObj.append(subObj);
				}
			}
		});

	});

});
