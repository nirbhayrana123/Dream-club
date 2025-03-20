$(document).ready(function () {

  $(".dropdown-toggleerd").click(function(e){
    e.preventDefault();
    $(".dropdown-menuesa").slideToggle(200);
    $(".dropdownses").toggleClass("open");
});
// Dropdown ko close karne ke liye jab bahar click ho
$(document).click(function(e){
    if (!$(e.target).closest(".dropdownses").length) {
        $(".dropdown-menuesa").slideUp(200);
        $(".dropdownses").removeClass("open");
    }
});


  // First Slider Initialization
  $(".first-slider").owlCarousel({
    items: 3,
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1.2
      },
      767: {
        items: 1.2
      },
      1000: {
        items: 3.2
      }
    },
  });
  ///upcomingslider
  $(".select-slider").owlCarousel({
    items: 9,
    margin: 0,
    loop: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1.2
      },
      767: {
        items: 1.2
      },
      1000: {
        items: 9
      }
    },
  });
  $(".upcoming-events").owlCarousel({
    items: 3,
    margin: 20,
    loop: true,
    nav: false,
    responsive: {
      0: {
        items: 1.2
      },
      600: {
        items: 2.2
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
    dots: false,
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
  $(".featured-slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    center: true,
    responsive: {
      0: { items: 1.2 },
      480: { items: 1.5, center: true, },
      768: { items: 2.5, center: true },
      1024: { items: 3.5, center: true },
      1200: { items: 3.5, center: true }
    }
  });
  $(".toggle-button").click(function () {
    $(".toggle-button, .navebar ").toggleClass("active");
  });
  //////////////////Know your Connoisseur/////////////////////
  $(".owl-carousel.eventdetails").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      600: { items: 1. },
      1000: { items: 1.1 }
    }
  });
  $(".owl-carousel2").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 1 }
    }
  });
  /////////////////////////////////////////////////////////
  $(".singin-slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 800,
    nav: true,
    dots: true,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 1 }
    },
    onInitialized: function () {
      console.log("Owl Carousel Initialized");
    }
  });
  ////////////////////////////////////////
  $('.loginform').on('click', function () {
    $('.sign-in').hide();
    $('#login').show();
  });
  $('.signupform').on('click', function () {
    $('.sign-in').hide();
    $('#signup').show();
  });
  $('.signupform').on('click', function () {
    $('.sign-in').hide();
    $('#signup').show();
  });
  $('.getstarted').on('click', function () {
    $('.sign-in').hide();
    $('#changepassword').show();
  });
  ///////////////header fixed////////////////
  $(window).scroll(function () {
    if ($(window).scrollTop() > 350) {
      $("header").addClass("scrolled");
    } else {
      $("header").removeClass("scrolled");
    }
  });
});
//////////////sing in////////////////////


$(window).scroll(function() {
  var windscroll = $(window).scrollTop();
  if (windscroll >= 100) {
    $('.season_flexs').each(function(i) { 
      if ($(this).position().top <= windscroll - 0) {
        $('.w-fulls li.nav-item a.nav-link.active').removeClass('active');
        $('.w-fulls li.nav-item a.nav-link').eq(i).addClass('active');
      }
    });

  } else {

    $('.w-fulls li.nav-item a.nav-link.active').removeClass('active');
    $('.w-fulls li.nav-item a.nav-link:first').addClass('active');
  }

  }).scroll();





document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".slider-presta")) {
    var offbeat = new Swiper(".slider-presta", {
      slidesPerView: 3,
      spaceBetween: 20,
      speed: 1500, // Slide transition speed
      loop: true, // Enable infinite loop
      nav: true,
      allowTouchMove: true, //  Allow manual dragging/swiping
      freeMode: true, //  Freeflow smooth scrolling
      freeModeMomentum: false, //  Remove momentum stopping effect
      loopAdditionalSlides: 3, // Ensure smooth looping

      navigation: {
        nextEl: ".next-btn", // ✅ Fixed navigation
        prevEl: ".prev-btn"
      },

      breakpoints: {
        1024: { slidesPerView: 3, spaceBetween: 20 },
        768: { slidesPerView: 3, spaceBetween: 20 },
        480: { slidesPerView: 2.5, spaceBetween: 10 },
        0: { slidesPerView: 1.5, spaceBetween: 10 }
      },

      on: {
        slideChangeTransitionStart: function () {
          let slides = document.querySelectorAll('.swiper-slide');
          slides.forEach((slide, index) => {
            slide.style.transform = index % 2 === 0 ? 'translateY(-20px)' : 'translateY(20px)';
          });
        },
        slideChangeTransitionEnd: function () {
          document.querySelectorAll('.swiper-slide').forEach(slide => {
            slide.style.transform = 'translateY(0)';
          });
        }
      }
    });

    console.log(" Swiper initialized without autoplay.");
  }

});


document.querySelectorAll('.menu-item').forEach(button => {
  button.addEventListener('click', function () {
    const targetId = this.getAttribute('data-bs-target');

    // Remove 'open' class from all tabs
    document.querySelectorAll('.tab-pane').forEach(tab => {
      tab.classList.remove('open');
    });

    // Add 'open' class to the target tab
    document.querySelector(targetId)?.classList.add('open');

    // Add 'open' class to .bg-booking
    document.querySelector('.bg-booking')?.classList.add('open');
  });
});

// Select all .backintabs buttons and add event listener
document.querySelectorAll('.backintabs').forEach(button => {
  button.addEventListener('click', function () {
    // Find the closest parent .tab-pane and remove 'open' class from it
    this.closest('.tab-pane')?.classList.remove('open');

    // Remove 'open' class from .bg-booking
    document.querySelector('.bg-booking')?.classList.remove('open');
  });
});

 ////////////////profile/////////////////

 document.getElementById("fileInput").addEventListener("change", function(event) {
  const file = event.target.files[0];
  if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
          document.getElementById("profilePic").src = e.target.result;
      };
      reader.readAsDataURL(file);
  }
});
/////////////////
