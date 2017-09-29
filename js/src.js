
$(document).ready(function(){
	var reviewsSlider = $('.reviewsSlider').lightSlider({
		
		
		
		item:6,
		adaptiveHeight:true,
//		autoWidth:true,
		slideMove:1,
		speed:700,
		slideMargin:45,
//		loop:true,
		auto:false,
		pager: false,
		pauseOnHover: false,
		controls: false,
		responsive : [
		{
			breakpoint:1050,
			settings: 
			{
				item:5
				
			}
		},
		{
			breakpoint:800,
			settings: 
			{
				item:4
				
			}
		},
		{
			breakpoint:640,
			settings: 
			{
				item:3
				
			}
		},
		{
			breakpoint:470,
			settings: 
			{
				item:2.5
				
			}
		},
		{
			breakpoint:400,
			settings: 
			{
				item:2
				
			}
		},
		{
			breakpoint:320,
			settings: 
			{
				item:1.5
				
			}
		}
		]
		
		
		
	});
	
//	$('.reviewsSlider').lightSlider({
//		item:6,
//		adaptiveHeight:true,
//		slideMargin:10,
//		slideMove:2,
//		speed:700,
//		slideMargin:45,
//		loop:true,
//		auto:false,
//		pager: false,
//		pauseOnHover: true,
//		controls: false
//////		responsive : [
//////		{
//////			breakpoint:1260,
//////			settings: 
//////			{
//////				item:4,
//////				slideMove:1,
//////				slideMargin:6,
//////			}
//////		},
//////		{
//////			breakpoint:1040,
//////			settings: 
//////			{
//////				item:3,
//////				slideMove:1,
//////				slideMargin:6,
//////			}
//////		},
//////		{
//////			breakpoint:800,
//////			settings: 
//////			{
//////				item:2,
//////				slideMove:1,
//////				slideMargin:6,
//////			}
//////		},
//////		{
//////			breakpoint:520,
//////			settings: 
//////			{
//////				item:1,
//////				slideMove:1,
//////				slideMargin:6
//////			}
//////		}
//////		],
//	})

	$('.RevSlidePrev').click(function() {
		reviewsSlider.goToPrevSlide();

	});

	$('.RevSlideNext').click(function(e) {
		reviewsSlider.goToNextSlide();

	});
	
	
	var slider = $(".slider").lightSlider({
		item:3,
		adaptiveHeight:true,
		slideMove:1,
		speed:700,
		slideMargin:30,
		loop:false,
		controls: false,
		pager: false,
		auto:true,
		pause: 7000,
		pauseOnHover: true,
			responsive : [
		{
			breakpoint:950,
			settings: 
			{
				item:2,
				slideMove:1,
				slideMargin:6,
			}
		},
		
		{
			breakpoint:640,
			settings: 
			{
				item:1.5,
				slideMove:1,
				slideMargin:6,
			}
		},
		{
			breakpoint:520,
			settings: 
			{
				item:1,
				slideMove:1,
				slideMargin:6
			}
		}
		]

	});
	
	

	$('.slidePrev').click(function() {
		slider.goToPrevSlide();

	});

	$('.slideNext').click(function(e) {
		slider.goToNextSlide();

	});
	
	$('[data-trigger]').click(function(){
		var collection =  $(this).data('collection');
		var trigger = $(this).data('trigger');

		$('[data-collection="'+collection+'"]').removeClass('active') ;
		$('[data-collection="'+collection+'"][data-target="'+trigger+'"]').addClass('active');
		
	})
	$('.itemSl').click(function(){
		$('.itemSl').removeClass('active2');
		$(this).addClass('active2');
	})
	$('[data-target="0"]').addClass('active');
	$('.itemSl.active').addClass('active2');
})