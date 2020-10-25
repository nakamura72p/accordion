$(function(){
$('.menu').click(function(){
  $(this).next().slideToggle('fast');
  $('.menu').not($(this)).next().slideUp('fast');
});
});
