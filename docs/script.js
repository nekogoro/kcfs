$(function() {
	var ship_class = "";
	var ulObj = $("#output");

	$('select[name="dd_list"]').change(function() {
		ship_class = $('select[name="dd_list"]').val();

		var dd_list = $('select[name="dd_list"] option:selected').attr("class");
		var count = $('select[name="ship_list"]').children().length;
		ulObj.empty();

		for(var i = 0; i < count; i++){
			var ship_list = $('select[name="ship_list"] option:eq(' + i +')');
			if(ship_list.attr("class") === dd_list){
				ship_list.show();
			} else {
				ship_list.hide();
				if(ship_list.attr("class") === "msg") {
					ship_list.show();
					ship_list.prop('selected',true);
				} else {
					ship_list.hide();
				}
			}
		}
	});

	$('select[name="ship_list"]').change(function() {

		var ship_name = $('select[name="ship_list"]').val();
		$.getJSON("materials.json" , function(data) {
			var len = data.length;

			ulObj.empty();
			for(var i = 0; i < len; i++) {
				var flag = false;
				var subObj = $('<li/>').text(data[i].title);
				var len2 = data[i].bonus.length;
				for(var j = 0; j < len2; j++) {
					var len3 = data[i].bonus[j].items.length;
					for(var k = 0; k < len3; k++) {
						if (data[i].bonus[j].items[k].ship_class == ship_name) {
							subObj.append($('<ul/>')
								.append($('<li #test/>').text(data[i].bonus[j].synergy)
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
