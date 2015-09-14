$(document).ready(function(){
	
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
  				nextArrow: '.recentNextButton'
  			});
  			//SlideShow for Featured Products
  			$('.featuredSlide').slick({
   				infinite: true,
  				slidesToShow: 4,
  				slidesToScroll: 4,
  				variableWidth: true,
  				prevArrow: '.featuredPrevButton',
  				nextArrow: '.featuredNextButton'
  			});
			
			//SlideShow for sponsor
  			$('.sponsorSlide').slick({
   				infinite: true,
   				autoplay: true,
   				autoplaySpeed: 3000,
  				slidesToShow: 5,
  				slidesToScroll: 1,
  				prevArrow: '.sponsorPrevButton',
  				nextArrow: '.sponsorNextButton'
  			});


			//Retina Image	
			$('.retina').retina();

			//SliderShow用
    		$('.iosSlider').iosSlider({
		        snapToChildren: true,
		        scrollbar: true,
		        scrollbarHide: false,
		        desktopClickDrag: true,
		        scrollbarLocation: 'bottom',
		        scrollbarHeight: '6px',
		        //scrollbarBackground: 'url(_img/some-img.png) repeat 0 0',
		        scrollbarBorder: '1px solid #000',
		        scrollbarMargin: '0 30px 16px 30px',
		        scrollbarOpacity: '0.75',
		        //onSlideChange: slideChange,
		        autoSlide: true,
		        autoSlideTimer: 5000,
		        autoSlideTransTimer: 1000,
		        autoSlideHoverPause: true,
		        infiniteSlider: true,
		        stageCSS: {
		        	
		        },
		        navPrevSelector: $('.prev'),
		        navNextSelector: $('.next')
		    });

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
			//$('.slideShowText:hidden, .opacityBG:hidden').fadeIn(1000);
		});