$(window).scroll(function(){
    if ($(this).scrollTop() > 700) {
       $('#dynamic').addClass('newClass');
    } else {
       $('#dynamic').removeClass('newClass');
    }
});