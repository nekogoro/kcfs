$(function() {
  $('.box input[type=checkbox]').change(function() {
    if ($(this).prop('checked')) {
    console.log('checked');
    $(this).closest('li').children('ul').hide();
    } else {
    console.log('not checked');
    $(this).closest('li').children('ul').show();
    }
  })
})
    