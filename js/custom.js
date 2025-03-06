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


  document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector(".slider-presta")) {
        var offbeat = new Swiper(".slider-presta", {
            slidesPerView: 3,
            spaceBetween: 20,
            speed: 3000,
            loop: true,
         
                delay: 200, // 2 seconds delay between slides
                disableOnInteraction: false, // Autoplay na rukhe on user interaction
           

            allowTouchMove: false, // Disable manual dragging for smoother effect
            freeMode: true, // Freeflow smooth scrolling
            freeModeMomentum: false, // Remove momentum stopping effect
            loopAdditionalSlides: 3, // Ensure smooth looping


            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            breakpoints: {
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                480: {
                    slidesPerView: 1.5,
                    spaceBetween: 10
                }
            },
            on: {
                slideChangeTransitionStart: function () {
                    let slides = document.querySelectorAll('.swiper-slide');
                    slides.forEach((slide, index) => {
                        if (index % 2 === 0) {
                            slide.style.transform = 'translateY(-20px)';
                        } else {
                            slide.style.transform = 'translateY(20px)';
                        }
                    });
                },
                slideChangeTransitionEnd: function () {
                    document.querySelectorAll('.swiper-slide').forEach(slide => {
                        slide.style.transform = 'translateY(0)';
                    });
                }
            }
        });

        console.log("Swiper initialized with infinite autoplay:", offbeat);
    }
});
