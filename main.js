(function(){
	
	//comment here
	$(window).on('load', function () {
		$(".loader").delay(300).fadeOut("slow");
	});

	// comment here
	$(document).ready(function () {
		new WOW().init();
		$('#fullpage').fullpage({
			autoScrolling: false,
			fitToSection: false,
			verticalCentered: true,
		});
		$(".product-slider").slick({
			dots: false,
			arrows:true,
			prevArrow: '<div class="slick-prev"><img src="assets/images/arrow-right.svg" alt=""/></div>',
			nextArrow: '<div class="slick-next"><img src="assets/images/arrow-left.svg" alt=""/></div>',
			slidesToShow: 3,
			slidesToScroll: 1,			
			autoplay:true,
			responsive: [
				{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
				},
				{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
				},
			]				
		});
		
		// comment here
		$(".wrp-listtestimoni").slick({
			dots: false,
			arrows:true,
			prevArrow: '<div class="slick-prev"><img src="assets/images/arrowtestimoni-left.svg" alt=""/></div>',
			nextArrow: '<div class="slick-next"><img src="assets/images/arrowtestimoni-right.svg" alt=""/></div>',
			slidesToShow: 1,
			slidesToScroll: 1,		
			autoplay:false		
		});	
		
		// comment here
		
		
	});
}(jQuery));
