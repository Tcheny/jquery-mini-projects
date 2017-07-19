$(document).ready(function(){
  $('.notification').click(function () {
    $('.notification-menu').toggle(500)
  });
  $('.btn').click(function(){
    $(this).toggleClass("btn-like")
  })
});
