'use strict';
window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads =  document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors  = [
        '#60d394',
        '#d36060',
        '#c060d3',
        '#d3d160',
        '#6860d3',
        '#004680'
    ];

//lets get going with the sound here
 pads.forEach((pad, i) => {
    pad.addEventListener('click', function() {
         sounds[i].currentTime = 0;
          sounds[i].play();
          createBubbles(i);
        });
    });
 // create a function that makes bubbles
const createBubbles =  (i) => {
     const bubble = document.createElement("div");
     visual.appendChild(bubble);
     bubble.style.background  = colors[i];
     bubble.style.animation = `jump 1s ease`;
     bubble.addEventListener('animationend', function() {
        visual.removeChild(this);
     });
 }  
});