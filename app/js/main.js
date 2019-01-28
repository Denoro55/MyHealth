$(function(){

	var func = (function(){

		var initSlider = function(){
			var slides = $(".slider-item");
			var len = slides.length;
			var currSlide = 1;
			$('.toggler-item').on('click',function(){
				var index = $(this).index();
				slides.fadeOut(500);
				slides.eq(index).fadeIn(500);
				$('.toggler-item').removeClass('toggler-active')
				$(this).addClass('toggler-active')
			})
		}

		return{
			init: function(){
				initSlider();
			}
		}

	}())

	func.init();

})