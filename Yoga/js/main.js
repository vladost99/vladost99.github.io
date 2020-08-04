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

       //modal 
    

    modal('.description-btn','.overlay','.popup-close')
    modal('.more','.overlay','.popup-close');
    
    function modal(SelectorBtn,Overlay,closeSelector) {
        let more = document.querySelectorAll(SelectorBtn),
       overlay = document.querySelector(Overlay),
       close = document.querySelector(closeSelector);

        more.forEach(item => {
            item.addEventListener('click', function() {
                overlay.style.display = 'block';
                this.classList.add('more-splash');
                document.body.style.overflow = 'hidden';
                })
            });
    

        close.addEventListener('click', function() {
            overlay.style.display = 'none';
            more.forEach(item => item.classList.remove('more-splash'));
            document.body.style.overflow = '';
                });
    }


    //script send form dan
    let message = {
        loading: 'Загрузка',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так'
    }

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            form.appendChild(statusMessage);

            let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                let formData = new FormData(form);

                let obj = {};
                formData.forEach(function(value, key) {
                    obj[key] = value;
                });
                let json = JSON.stringify(obj);

                request.send(json);

                request.addEventListener('readystatechange', () => {
                    if(request.readyState < 4) {
                        statusMessage.innerHTML = message.loading;
                    }   else if (request.readyState === 4 && request.status == 200) {
                        statusMessage.innerHTML = message.success;
                    } else {
                        statusMessage.innerHTML = message.failure;
                    }
                });

                for(let i = 0; i < input.length; i++ ) {
                    input[i].value = '';
                }

        });


     /* <!-- calculator--> */

     let persons  = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personSum = 0,
        daysSum = 0,
        total = 0;

        totalValue.innerHTML = 0;

        persons.addEventListener('change', function() {
            personSum = +this.value;
            total = (daysSum + personSum)*4000;
            if(restDays.value == '') {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
                }
       });

      restDays.addEventListener('change', function() {
        daysSum = +this.value;
        total = (daysSum + personSum)*4000;
        if(persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
            }
        });

        place.addEventListener('change', function() {
            if(restDays.value == '' || persons.value == '') {
                totalValue.innerHTML = 0;
            } else {
                let a = total;
                totalValue.innerHTML = a * this.option[this.selectedIndex].value;
            }
        });

});
