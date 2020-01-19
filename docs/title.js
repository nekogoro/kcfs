var list = document.getElementById("ship_list");
var title = document.getElementById("ship_name_title");
title.style.display = "none";

function appearTitle() {
  var index = list.selectedIndex;
  if (!list.disabled && title.style.display == "none" && index > 0) {
    title.style.display = "block";
  } else {
    title.style.display = "none";
  }
}