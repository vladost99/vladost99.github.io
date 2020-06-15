
$(document).ready(function(){

    //slider 1
    $('.header-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 450,
                settings: {
                    dots:false
                }
            }
        ]
    });

    //slider2
    $('.quotes-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false
    });


//on WOW.js
    new WOW().init();
//Progress bar
    $('.skills__progress').each(function() {
        var $this = $(this);
        var per = $this.attr('data-per');
        $this.css("width", per +'%');
        $({animatedValue: 0}).animate({animatedValue: per},{
            duration: 1000,
            step: function() {
                $this.attr('per', Math.floor(this.animatedValue)+ '%');
            },
            complete: function() {
                $this.attr('per', Math.floor(this.animatedValue) +'%');
        }
        });
    });
    //menu
    $('#humburger').click(function() {
        $('#menu').toggleClass('menu__active');
    });
    
    $('menu__item').each(function(item) {
            item.click(function() {
                $('#menu').toggleClass('menu__active');
            })
    });

    //Validate form
    function valideForms(form){
        $(form).validate({
          rules: {
            name: "required",
            email: {
                required: true,
                email: true
    
            },
            message: "required"
          },
          messages: {
            name: "Please enter your name",
            email: {
              required: "Please enter your mail",
              email: "Invalid email address"
            },
            message: "Please enter text"
          } 
      });
    
      };
      valideForms('#contact-form');
      

});

