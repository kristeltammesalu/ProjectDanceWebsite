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

$(window).scroll(function(){
    $(".top").css("opacity", 1 - $(window).scrollTop() / 250);
});

$('#link').click(function(){
    $("html, body").animate({ scrollTop: 700 });
    return false;
});


//lisa

new scrollReveal();

$(document).ready(function(){
    $('.scrollspy').scrollSpy();
});

$('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: true, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: true // Displays dropdown below the button
    }
);

// Init Skrollr
var s = skrollr.init();

// Refresh Skrollr after resizing our sections
s.refresh($('.homeSlide'));