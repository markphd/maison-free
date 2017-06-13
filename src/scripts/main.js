'use strict';

document.addEventListener('DOMContentLoaded', function() {
    var slider = document.querySelector('.js_slider');
    var sliderIndex = document.getElementById('slider-index');
    var slideCount = document.getElementsByClassName('js_slide').length;

    var prev = document.getElementsByClassName('js_prev');
    var next = document.getElementsByClassName('js_next');
    
	var index = 1;
    
    function indexCounter(){
 		console.log(this.className);
    	this.className === "js_prev prev" ? --index : ++index
    	if (index == 0) {
    		index = 3;
    	} else if (index > 3){
    		index = 1;
    	}
    	console.log(index);
    	sliderIndex.innerHTML = index + ' of ' + slideCount;
    }

    // prev[0].addEventListener('click', indexCounter);
    // next[0].addEventListener('click', indexCounter);

    if (!index == 0) {
    	sliderIndex.insertAdjacentHTML('afterbegin', index + ' of ' + slideCount);
    }



    console.log(slideCount);

    lory(slider, {
        infinite: 0
    });
});