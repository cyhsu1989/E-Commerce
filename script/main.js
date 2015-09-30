$(document).ready(function(){
			//SliderShow用
			$('.slideShowContainer').slick({
				infinite: true,
				autoplay: true,
   				autoplaySpeed: 3000,
   				centerMode: true,
  				slidesToShow: 3,
  				slidesToScroll: 1,
  				variableWidth: true,
  				prevArrow: '.prev',
  				nextArrow: '.next'
			})

			//SlideShow for Recent Products
			$('.recentSlide').slick({
   				infinite: true,
  				slidesToShow: 4,
  				slidesToScroll: 4,
  				variableWidth: true,
  				prevArrow: '.recentPrevButton',
  				nextArrow: '.recentNextButton',
  				responsive: [
					{
						breakpoint: 569,
					    settings: "unslick"
					},
					{
						breakpoint: 769,
					    settings: "unslick"
					}
				]
  			});
  			//SlideShow for Featured Products
  			$('.featuredSlide').slick({
   				infinite: true,
  				slidesToShow: 4,
  				slidesToScroll: 4,
  				variableWidth: true,
  				prevArrow: '.featuredPrevButton',
  				nextArrow: '.featuredNextButton',
  				responsive: [
					{
						breakpoint: 569,
					    settings: "unslick"
					},
					{
						breakpoint: 769,
					    settings: "unslick"
					}
				]
  			});
			
			//SlideShow for sponsor
  			$('.sponsorSlide').slick({
   				infinite: true,
   				autoplay: true,
   				autoplaySpeed: 3000,
  				slidesToShow: 5,
  				slidesToScroll: 1,
  				variableWidth: true,
  				prevArrow: '.sponsorPrevButton',
  				nextArrow: '.sponsorNextButton'
  			});


			//Retina Image	
			$('.retina').retina();


    	    //GoToTop
    	    $("#goTop").hide();
    	    $(window).scroll(function () {
				if ($(this).scrollTop() > 100) {
					$('#goTop').fadeIn();
				} else {
					$('#goTop').fadeOut();
				}
			})

    		$('#goTop').click(function(){
				$('html,body').animate({scrollTop: 0}, 800);
				return false;
			})
			
		});

