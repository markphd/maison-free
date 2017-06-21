'use strict';

// document.addEventListener('DOMContentLoaded', function() {
//     var slider = document.querySelector('.js_slider');
//     var sliderIndex = document.getElementById('slider-index');
//     var slideCount = document.getElementsByClassName('js_slide').length;

//     var prev = document.getElementsByClassName('js_prev');
//     var next = document.getElementsByClassName('js_next');
    
// 	var index = 1;
    
//     function indexCounter(){
//  		console.log(this.className);
//     	this.className === "js_prev prev" ? --index : ++index
//     	if (index == 0) {
//     		index = slideCount;
//     	} else if (index > slideCount){
//     		index = 1;
//     	}
//     	console.log(index);
//     	sliderIndex.innerHTML = index + '<span style="font-style: italic; margin: 0 3px;"> of </span>' + slideCount;
//     }

//     prev[0].addEventListener('click', indexCounter);
//     next[0].addEventListener('click', indexCounter);

//     if (!index == 0) {
//     	sliderIndex.insertAdjacentHTML('afterbegin', index + '<span style="font-style: italic; margin: 0 3px;"> of </span>' + slideCount);
//     }



//     console.log(slideCount);

//     lory(slider, {
//         infinite: 1
//     });
// });

  $(document).ready(function(){
      $('.slider').slider({
        "indicators": false
      });
      $('.js_prev').click(function() {
          $('.slider').slider('prev');
      });
      $('.js_next').click(function() {
          $('.slider').slider('next');
      });
    });