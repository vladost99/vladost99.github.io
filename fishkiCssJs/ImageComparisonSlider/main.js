function rangeSlider(value) {
    document.querySelector('#rangeValue').innerHTML = value;
    document.querySelector('#fillRangeValue').style.width = +value + "%";
}