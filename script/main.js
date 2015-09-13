$(document).ready(function(){
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
		        autoSlide: false,
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
    		$('#goTop').click(function(){
				$('html,body').animate({scrollTop:$('#topbar').offset().top}, 800);
				return false;
			})
			//$('.slideShowText:hidden, .opacityBG:hidden').fadeIn(1000);
		});