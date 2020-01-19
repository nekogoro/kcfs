var title = document.getElementById("ship_name_title");
title.style.display = "none";

function appearTitle() {
  var list = document.ship_list;

  var index = list.selectedIndex;
  if (!list.disabled && index > 0) {
    title.style.display = "block";
  } else {
    title.style.display = "none";
  }
}