$(document).ready(() => {
	let carouselItem = $('.carousel__item');
	let carouselItemWidth = $(carouselItem).width() + 80;
	console.log(carouselItemWidth);
	let move = 0;
	$('.carousel__arrow').click(function () {
		if ($(this).css('left') == '0px') {
			let carousel = $(this).next().find('.carousel__items');
			move = (move < 0) ? move += carouselItemWidth : (carouselItemWidth * $(carousel).children().length * -1) + carousel.width();
			carousel.css({ transform: `translateX(${move}px)` });
		}
		else {
			let carousel = $(this).prev().find('.carousel__items');
			move = (move <= (carouselItemWidth * ($(carousel).children().length - 1) * -1)) ? 0 : move -= carouselItemWidth;
			carousel.css({ transform: `translateX(${move}px)` });
		}
	});
	let sec = 0;
	let min = 30;
	$('.timer').text(`Time left ${min} мин. ${sec} сек.`);
	setInterval(() => {
		sec--;
		if (sec <= 0) {
			sec = 60;
			min--;
		}
		$('.timer').text(`Time left ${min} мин. ${sec} сек.`);
	}, 1000);
	let gap = -15;
	setInterval(() => {
		gap += 0.5;
		$('.price__effect').css({ right: `${gap}%` });
		if (gap >= 100) {
			gap = -15;
		}
	}, 10);


	$('input[type=tel]').keypress(function () {
		if (this.value.match(/[^0-9]/g)) {
			this.value = this.value.replace(/[^0-9]/g, "");
		}
	});
});