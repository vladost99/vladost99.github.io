let marker = document.querySelector("#marker"),
    item = document.querySelectorAll("nav a");

    function indicator(e) {
        marker.style.left = e.offsetLeft + 'px';
        marker.style.width = e.offsetWidth + 'px';
        console.log(marker);
    }    

item.forEach(link => {
    link.addEventListener('click', (e) => {
        indicator(e.target);
    })
})