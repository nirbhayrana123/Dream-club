$(document).ready(function () {
    // First Slider Initialization
    $(".owl-carousel.first-slider").owlCarousel({
      items: 3,
      margin: 20,
      loop: true,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3 
        }
      },
    });
     ///upcomingslider


     $(".upcoming-events").owlCarousel({
      items: 3,
      margin: 20,
      loop: true,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3 
        }
      },
    });
    // Second Slider Initialization
    $(".owl-carousel.second-slider").owlCarousel({
      items: 4,
      margin: 20,
      loop: true,
      nav: true
    });

    // Third Slider with Different Configurations
    $(".owl-carousel.third-slider").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      center: true,
      stagePadding: 50,
      navText: [
        '<i class="fas fa-chevron-left"></i>',
        '<i class="fas fa-chevron-right"></i>'
      ],
      responsive: {
        0: {
          items: 1,
          stagePadding: 10,
          nav: false
        },
        600: {
          items: 1.2,
          stagePadding: 30,
          nav: true
        },
        1000: {
          items: 1.5,
          stagePadding: 50,
          nav: true
        }
      },
      onTranslated: function () {
        $(".owl-item").removeClass("active-slide left-slide right-slide");
        $(".owl-item.center").addClass("active-slide");
        $(".owl-item.active").not(".center").each(function (index) {
          $(this).addClass(index === 0 ? "left-slide" : "right-slide");
        });
      }
    });

    ///////////////header fixed////////////////
    $(window).scroll(function(){
        if ($(window).scrollTop() > 350) { 
            $("header").addClass("scrolled"); 
        } else { 
            $("header").removeClass("scrolled"); 
        }
    });
  });