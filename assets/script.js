$(document).ready(function(){
    $(".open").click(function(){
    $(this).hide();
    $('.close').show();
    $('.mobile-nav').show();
    $('body').css('background-color', 'var(--clr-Dark-grayish-blue)');
    $('.mobile-nav ul::before').height()=$('body').height()+'10rem';
  });

  $(".close").click(function(){
    $(this).hide();
    $('.open').show();
    $('.mobile-nav').hide();
    $('body').css('background-color', 'var(--clr-Off-white)');
  });
  });

