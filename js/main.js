/*------------------------------------------------------------------
* Project:        Intereal - Architecture & Interior Design HTML Templates
* Author:         HtmlDesign Templates
* URL:            https://themeforest.net/user/htmldesigntemplates/portfolio
* Created:        11/14/2025
-------------------------------------------------------------------*/


(function ($) {
  "use strict";

  /* SlickNav Responsive Menu */
  $('#responsive-menu').slicknav({
    duration: 500,
    easingOpen: 'easeInExpo',
    easingClose: 'easeOutExpo',
    closedSymbol: '<i class="arrow-indicator fa fa-angle-down"></i>',
    openedSymbol: '<i class="arrow-indicator fa fa-angle-up"></i>',
    prependTo: '#slicknav-mobile',
    allowParentLinks: true,
    label: ""
  });

  /* Dropdown Menu */
  var selected = $('#navbar li');
  selected.on("mouseenter", function () {
      $(this).find('ul').first().stop(true, true).delay(350).slideDown(500, 'easeInOutQuad');
  }).on("mouseleave", function () {
      $(this).find('ul').first().stop(true, true).delay(100).slideUp(150, 'easeInOutQuad');
  });

  /* Arrow Indicator for Submenus */
  if ($(window).width() > 992) {
      $(".navbar-arrow ul ul > li").has("ul").children("a").append("<i class='arrow-indicator fa fa-angle-right'></i>");
  }
  

  /* Sticky Header */
  let $headerMenu = $('.header-nav-menu');

  $(window).on('scroll', function () {
    let curScroll = $(window).scrollTop();

    if (curScroll > 80) {
        $headerMenu.addClass('navbar-sticky-in');
    } else {
        $headerMenu.removeClass('navbar-sticky-in');
    }
  });

     /* Back-to-top js Start */
    $(document).ready(() => {
      $('#back-to-top, .fast-service-badge').hide(); // Hide button initially
  
      $(window).on('scroll', () => {
          if ($(window).scrollTop() > 500) {
              $('#back-to-top, .fast-service-badge').fadeIn(200);
          } else {
              $('#back-to-top, .fast-service-badge').fadeOut(200);
          }
      });
  
      $(document).on('click', '#back-to-top, .back-to-top', () => {
          $('html, body').animate({
              scrollTop: 0
          }, 500);
          return false;
      });
    });
    

  /* Counter for progress bar start */
  let valueDisplayss = document.querySelectorAll(".progress-num");
  let intervall = 3000;

  valueDisplayss.forEach((valueDisplay) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"),10);
      let duration = Math.floor(intervall / endValue);
      let counter = setInterval(function() {
          startValue += 1;
          valueDisplay.textContent = startValue;
          if (startValue === endValue) {
              clearInterval(counter);
          }
      }, duration);
  });

  /* Counter for progress bar start */

  /* Countdown Timer */
    const targetTime = new Date(Date.now() + 100 * 24 * 60 * 60 * 1000); // 100 days from now
    function updateCountdown() {
      const now = Date.now();
      const diff = targetTime - now;
      if (diff <= 0) {
        clearInterval(interval);
        $('#days, #hours, #minutes, #seconds').text('00');
        return;
      }
      
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);

      $('#days').text(d);
      $('#hours').text(h.toString().padStart(2, '0'));
      $('#minutes').text(m.toString().padStart(2, '0'));
      $('#seconds').text(s.toString().padStart(2, '0'));
    }
    
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
  /* Countdown Timer */

  // Video Player
  document.addEventListener('DOMContentLoaded', function () {
    const videoInline = document.querySelector('.video-inline');
    if (videoInline) {
      videoInline.addEventListener('click', function(e){
        e.preventDefault();
        const src = this.getAttribute('data-src');
        this.innerHTML = `<iframe src="${src}?autoplay=1" width="100%" height="500" allow="autoplay; fullscreen" frameborder="0"></iframe>`;
      });
    }
  });

  // Slick Slider //

  // Banner Slider
  $('.banner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    dots: false,
    fade: true,  
    speed: 800, 
    cssEase: 'linear'
  });

  $('.partner-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: false,
    responsive: [
      { breakpoint: 1100, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ]
  });

  $('.partner-slider1').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: false,
    responsive: [
      { breakpoint: 1100, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ]
  });

  $('.review-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    responsive: [
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ]
  });

  $('.review-slider1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
  });

  $('.banner-slider1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    dots: true,
    fade: true,  
    speed: 800, 
    cssEase: 'linear'
  });

  $('.testimonial-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    arrows: false,
    dots: true,
    responsive: [
      { breakpoint: 1400, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 976, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ]
  });

  /* Hamburger Menu Toggle */
  const hamburgerBtn = document.getElementById('hamburger-menu');
  const mobileNavMenu = document.getElementById('mobile-nav-menu');
  
  if (hamburgerBtn && mobileNavMenu) {
    hamburgerBtn.addEventListener('click', function(e) {
      e.preventDefault();
      hamburgerBtn.classList.toggle('active');
      mobileNavMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const mobileNavLinks = mobileNavMenu.querySelectorAll('.nav-link');
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', function() {
        hamburgerBtn.classList.remove('active');
        mobileNavMenu.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!hamburgerBtn.contains(e.target) && !mobileNavMenu.contains(e.target)) {
        hamburgerBtn.classList.remove('active');
        mobileNavMenu.classList.remove('active');
      }
    });
  }

  /* Gallery Slideshow Functions */
  let galleryIndex = 1;

  function changeGallerySlide(n) {
    showGallerySlide(galleryIndex += n);
  }

  function currentGallerySlide(n) {
    showGallerySlide(galleryIndex = n);
  }

  function showGallerySlide(n) {
    const gallerySlides = document.querySelectorAll('.gallery-container .gallery-item');
    const galleryDots = document.querySelectorAll('.gallery-indicators .gallery-dot');
    const galleryContents = document.querySelectorAll('.gallery-slide-content');
    
    if (n > gallerySlides.length) galleryIndex = 1;
    if (n < 1) galleryIndex = gallerySlides.length;
    
    gallerySlides.forEach(slide => {
      slide.style.display = 'none';
      slide.classList.remove('gallery-fade');
    });
    
    galleryDots.forEach(dot => {
      dot.classList.remove('gallery-active');
    });

    galleryContents.forEach(content => {
      content.classList.remove('gallery-active');
    });
    
    if (gallerySlides[galleryIndex - 1]) {
      gallerySlides[galleryIndex - 1].style.display = 'block';
      gallerySlides[galleryIndex - 1].classList.add('gallery-fade');
    }
    
    if (galleryDots[galleryIndex - 1]) {
      galleryDots[galleryIndex - 1].classList.add('gallery-active');
    }

    if (galleryContents[galleryIndex - 1]) {
      galleryContents[galleryIndex - 1].classList.add('gallery-active');
    }
  }

  // Initialize gallery slideshow on page load
  document.addEventListener('DOMContentLoaded', function() {
    showGallerySlide(galleryIndex);
  });

})(jQuery);
