$(document).ready(function(){
  //slider
    $('.carousel__inner').slick({
      speed: 1200,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
              dots: true,
              arrows: false
          } 
        }
      ]
    });

    //tabs
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
      //cnange list buy
    function toggleSlide(item) {
      $(item).each(function(i) {
          $(this).on('click', function(e) {
              e.preventDefault();
              $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
              $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          })
      });
  };

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');

  //modal window

  $('[data-modal=consultation]').on('click',function() {
      $('.overlay, #consultation').fadeIn('slow');
  });

  $('.modal__close').on('click', function() {
      $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
  });

  
  // cnange name subtitle in modal
  $('.button_mini').each(function(i) {
     $(this).on('click', function() {
       $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
       $('.overlay, #order').fadeIn('slow');
     })
  });

  //form validation

  function valideForms(form){
    $(form).validate({
      rules: {
        name: "required",
        phone: "required",
        email: {
            required: true,
            email: true

        }
      },
      messages: {
        name: "Пожалуйста,введите свое имя",
        phone: "Пожалуйста,введите свой телефон",
        email: {
          required: "Пожалуйста,введите свою почту",
          email: "Неправильно введен адрес почты"
        }
      } 
  });

  };

  valideForms('#consultation-form');
  valideForms('#consultation form');
  valideForms('#order form');
  
  //maskedinput

    $('input[name=phone]').mask("+380 (999) 999-9999");  

    //smooth scroll and pageup

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
          $('.pageup').fadeIn();
        }
        else {
          $('.pageup').fadeOut();
        }
    });


    $("a[href='#up']").click(function(){
      var _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
    });

    //wow.js
    new WOW().init();
});