$(document).ready(function () {
  $('#image-url').bind('input',function(){
    var write = $('#image-url').val();
    $('#meme').attr('src',write)
  });
  $('#top-text').bind('input',function(){
    var write = $('#top-text').val();
    $('.top-caption').html(write)
  })
  $('#bottom-text').bind('input',function(){
    var write = $('#bottom-text').val();
    $('.bottom-caption').html(write)
  })

})
