$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
       $('#dynamic').addClass('newClass');
    } else {
       $('#dynamic').removeClass('newClass');
    }
});