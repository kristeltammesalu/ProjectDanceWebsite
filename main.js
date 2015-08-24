/**
 * Created by Kristel on 22.08.2015.
 */
$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
        $('nav').addClass("sticky");
    }
    else{
        $('nav').removeClass("sticky");
    }
});

$(document).ready(function(){
    $(".parallax").parallax();
});
