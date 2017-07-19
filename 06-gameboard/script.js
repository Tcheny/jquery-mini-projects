$(document).ready(function (){
  $('.bell').click(function(){
    $(this).children().toggleClass('active')
  });
  $('.more-btn').click(function(){
    $(this).next('.more-menu').toggle(200)
  });
  $('.share').click(function(){
    $(this).next('.share-menu').toggle(200)
  })
});
