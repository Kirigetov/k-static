import slick from 'slick-carousel';
import { DOC, WIN } from "../_global";

DOC.ready(function() {

	$(window).scroll(function () {
	    if( $(window).scrollTop() > 20){
	      $('.out').addClass('header-small');
	    } else {
	      $('.out').removeClass('header-small');
	    }
	});

	if ( WIN.width() < 768 ) {
		$('.js-slider-news').slick({
			dots: false,
			infinite: true,
			slidesToShow: 1,
			variableWidth: true,
			arrows: false
		})

		$('.js-slider-interest').slick({
			dots: true,
			infinite: true,
			slidesToShow: 1,
			variableWidth: true,
			arrows: false
		})

		$('.js-products-slider-mob').slick({
			dots: true,
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			variableWidth: true,
			arrows: false
		});
	};

	if ( WIN.width() < 801 ) {
		$('.js-products-vertical').slick({
			dots: true,
			infinite: true,
			slidesToShow: 2,
			slidesToScroll: 1,
			variableWidth: true,
			arrows: false
		});
	};

	$('.js-tagcard-slider').slick({
		dots: true,
		infinite: true,
		slidesToShow: 3,
		variableWidth: true,
		arrows: false
	})

	$('.js-products-slider').slick({
		dots: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		variableWidth: true,
		arrows: false
	});

	$('.js-gallery-slider').slick({
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		centerMode: true,
		arrows: true,
		prevArrow: $('.gallery-slider__arrow_prev'),
		nextArrow: $('.gallery-slider__arrow_next')
	});

});  
