  // Smooth scrolling using jQuery easing
$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: (target.offset().top - 70)
      }, 1000, "easeInOutExpo");
      return false;
    }
  }
});

// Closes responsive menu when a scroll trigger link is clicked
$('.js-scroll-trigger').click(function() {
  $('.navbar-collapse').collapse('hide');
});

// Activate scrollspy to add active class to navbar items on scroll
$('body').scrollspy({
  target: '#mainNav',
  offset: 100
});

// Collapse Navbar
var navbarCollapse = function() {
  if ($("#mainNav").offset().top > 100) {
    $("#mainNav").addClass("navbar-shrink");
  } else {
    $("#mainNav").removeClass("navbar-shrink");
  }
};
// Collapse now if page is not at top
navbarCollapse();
// Collapse the navbar when page is scrolled
$(window).scroll(navbarCollapse);





$(document).ready(function () {
  $("header a").click(function () {

    // alert("WTF");
    $("nav .navbar-brand").html("<h4> "+ "VISIT MALAYSIA 2020"+ "</h4> ");
    $("nav h4 ").css({
        "padding-top":"5px",
        'font-size' : '1.4rem',
        'font-family': 'Roboto'

    });
    
  });

// Mouse enter & mouse leave can be neglecting using Hover 



});



// Tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


// Video Rate 

setPlaySpeed()
function setPlaySpeed() { 
var vid = document.getElementById("myVideo");

  vid.playbackRate = 0.5;
} 