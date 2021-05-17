$(function() {
  $('.list_parent input[type=checkbox]').change(function() {
    if ($(this).prop('checked')) {
      $(this).closest('li').children('ul').hide();
    } else {
      $(this).closest('li').children('ul').show();
    }
  });
});
    