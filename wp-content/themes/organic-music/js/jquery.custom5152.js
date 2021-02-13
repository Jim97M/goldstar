( function( $ ) {

	'use strict';

	function removeNoJsClass() {
		$( 'html:first' ).removeClass( 'no-js' );
	}

	/* Sidr Menu ---------------------*/
	function sidrMenu() {
		if ($("body.music-logo-right")[0]) {
			$('#menu-toggle').sidr({
				name: 'side-menu',
				side: 'left', // By default
				source: '#navigation'
			});
		} else {
			$('#menu-toggle').sidr({
				name: 'side-menu',
				side: 'right', // By default
				source: '#navigation'
			});
		}
	}

	/* Submenu Offset Fix ---------------------*/
	function menuOffset() {
		// Fix menu if off screen.
		var mainWindowWidth = $(window).width() + 180;

		$('#navigation ul.menu li.menu-item-has-children').mouseover(function() {

			// Checks if second level menu exist.
			var subMenuExist = $(this).find('.sub-menu').length;

			if ( subMenuExist > 0 ) {
				var subMenuWidth = $(this).find('.sub-menu').width();
				var subMenuOffset = $(this).find('.sub-menu').parent().offset().left + subMenuWidth;

				// If sub menu is off screen, give new position.
				if ( (subMenuOffset + subMenuWidth) > mainWindowWidth ) {
					var newSubMenuPosition = subMenuWidth;
					$(this).find('ul.sub-menu').css({
						right: 0,
						left: 'auto',
					});
					$(this).find('ul.sub-menu ul.sub-menu').css({
						left: -newSubMenuPosition - 24,
						right: 'auto',
					});
				}
			}
		});

	}

	/* Flexslider ---------------------*/
	function flexSliderSetup() {
		if( ($).flexslider) {
			var slider = $('.flexslider');
			slider.flexslider({
				slideshowSpeed		: slider.attr('data-speed'),
				animationDuration	: 800,
				animation			: slider.attr('data-transition'),
				video				: false,
				useCSS				: false,
				prevText			: '<i class="fa fa-angle-left"></i>',
				nextText			: '<i class="fa fa-angle-right"></i>',
				touch				: false,
				controlNav			: false,
				animationLoop		: true,
				smoothHeight		: true,
				pauseOnAction		: true,
				pauseOnHover		: true,

				start: function(slider) {
					slider.removeClass('loading');
					$( ".preloader" ).hide();
				}
			});
		}
	}

	/* Masonry ---------------------*/
	function masonrySetup() {
		var $container = $('.portfolio-projects, .testimonial-posts');
		$container.masonry({
			itemSelector : '.single, .half, .third, .fourth'
		});
	}

	/* BG Brightness Detection ---------------------*/
	function brightnessSetup() {
		if ( $('.banner-img').length ) {
			$('.banner-img').bgBrightness();
		}
		if ( $('.wp-custom-header').length ) {
			$('.wp-custom-header').bgBrightness();
		}
		if ( $('.post-area').length ) {
			$('.post-area').bgBrightness();
		}
		if ( $('.sidebar').length ) {
			$('.sidebar').bgBrightness();
		}
		$('#nav-bar').bgBrightness();
		$('.footer').bgBrightness();
  }

	function modifyPosts() {

		/* Toggle Mobile Menu Icon ---------------------*/
		$('.menu-toggle').on('click touchstart', function() {
			$('.icon-menu-open').toggle();
			$('.icon-menu-close').toggle();
		});

		/* Animate Page Scroll ---------------------*/
		$(".scroll").click(function(event){
			event.preventDefault();
			$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
		});

		/* Fit Vids ---------------------*/
		$('.content').fitVids();

	}

	$( document )
	.ready( removeNoJsClass )
	.ready( sidrMenu )
	.ready( menuOffset )
	.ready( brightnessSetup )
	.ready( modifyPosts )
	.on( 'post-load', modifyPosts );

	$( window )
	.load( flexSliderSetup )
	.load( masonrySetup )
	.resize( masonrySetup );

})( jQuery );
