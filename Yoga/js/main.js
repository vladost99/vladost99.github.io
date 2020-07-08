window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    /*           <!--Tabs -->           */
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

 
        function hideContent() {
            tabContent.forEach((item) => {
              item.classList.remove('show');  
              item.classList.add('hide');
            });
        }    
        
        function showContent(i = 0) {
            tabContent[i].classList.add('show');
         }

         hideContent();
         showContent();


       tab.forEach((item,i) => {
           item.addEventListener('click', function() {
                hideContent();
                showContent(i);
           });
       });
       
    /*             <!--Timer-->                               */
    let deadline = '2020-08-21';

    function getTimeRemaining(endtime) {
        let t =  Date.parse(endtime) - Date.parse(new Date),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));

            return {
                'total': t,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
    }

    function setClock(id,endtime) {
        let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);


        function updateClock() {
            let t = getTimeRemaining(endtime);

            function addZero(num) {
                if (num <=9) {
                    return '0' + num;
                }
                else {
                    return num;
                }
            }
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }
    setClock('timer',deadline);

    /*                   <!--Slider-->                                       */

    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');
        showSlides(slideIndex);
        
        prev.addEventListener('click', function() {
            plusSlides(-1);
        });

        next.addEventListener('click', function() {
            plusSlides(1);
        });

        dotsWrap.addEventListener('click', function(e) {
           for (let i = 0; i < dots.length + 1; i++) {
               if(e.target.classList.contains('dot') && e.target == dots[i - 1]) {
                   currentSlides(i);
               }
           }
        });
        
        
        function showSlides(n) {
            if (n > slides.length) slideIndex = 1;
            if(n < 1) slideIndex = slides.length;


            slides.forEach(item => item.style.display = 'none');
            dots.forEach(dot => dot.classList.remove('dot-active'));

            slides[slideIndex - 1].style.display = 'block';
            dots[slideIndex - 1].classList.add('dot-active');
        }

        function plusSlides(n) {
            showSlides(slideIndex +=n);
        }
        function currentSlides(n) {
            showSlides(slideIndex = n);
        }


});
