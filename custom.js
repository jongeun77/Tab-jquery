$(function(){
  $('.testimonial-pic img').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
     $('.content').removeClass('active');
    //$(this).attr('data-alt') = tab1~4
    $('#' + $(this).attr('data-alt')).addClass('active');
  })

})