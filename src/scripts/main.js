'use strict';

document.addEventListener('DOMContentLoaded', function() {
    var slider = document.querySelector('.js_slider');
    var sliderIndex = document.getElementById('slider-index');
    var slideCount = document.getElementsByClassName('js_slide').length;
    console.log(slideCount);

    lory(slider, {
        infinite: 1
        // classNameSlideContainer: 'js_slides'
    });
});