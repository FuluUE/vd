$(function () {
	// 前端后面字体滚动效果
	new Swiper('.swiper-container',{
		mode: 'vertical',
		autoplay: 3000,
		loop: true,
		speed: 500,
		autoplayDisableOnInteraction: false
	});

	// 图片、文字动画效果
	window.onscroll = function() {
		var rt = $(document).scrollTop();
		var animate = $("div.same").find(".animate");
		if(rt > 250) {
			animate.eq(0).addClass("animate2");
			animate.eq(1).addClass("animate2");
			animate.eq(2).addClass("animate1");
		} else {
			animate.eq(0).removeClass("animate2");
			animate.eq(1).removeClass("animate2");
			animate.eq(2).removeClass("animate1");
		}
		if(rt > 650) {
			animate.eq(3).addClass("animate2");
			animate.eq(4).addClass("animate1");
			animate.eq(5).addClass("animate1");
		} else {
			animate.eq(3).removeClass("animate2");
			animate.eq(4).removeClass("animate1");
			animate.eq(5).removeClass("animate1");
		}
		if(rt > 1100) {
			animate.eq(6).addClass("animate2");
			animate.eq(7).addClass("animate2");
			animate.eq(8).addClass("animate1");
		} else {
			animate.eq(6).removeClass("animate2");
			animate.eq(7).removeClass("animate2");
			animate.eq(8).removeClass("animate1");
		}
		if(rt > 1600) {
			animate.eq(9).addClass("animate2");
			animate.eq(10).addClass("animate1");
			animate.eq(11).addClass("animate1");
		} else {
			animate.eq(9).removeClass("animate2");
			animate.eq(10).removeClass("animate1");
			animate.eq(11).removeClass("animate1");
		}
		if(rt > 2000) {
			animate.eq(12).addClass("animate2");
			animate.eq(13).addClass("animate2");
			animate.eq(14).addClass("animate1");
		} else {
			animate.eq(12).removeClass("animate2");
			animate.eq(13).removeClass("animate2");
			animate.eq(14).removeClass("animate1");
		}
		if(rt > 2500) {
			animate.eq(15).addClass("animate2");
			animate.eq(16).addClass("animate1");
			animate.eq(17).addClass("animate1");
		} else {
			animate.eq(15).removeClass("animate2");
			animate.eq(16).removeClass("animate1");
			animate.eq(17).removeClass("animate1");
		}
		if(rt > 3000) {
			animate.eq(18).addClass("animate2");
			animate.eq(19).addClass("animate2");
			animate.eq(20).addClass("animate1");
		} else {
			animate.eq(18).removeClass("animate2");
			animate.eq(19).removeClass("animate2");
			animate.eq(20).removeClass("animate1");
		}
		if(rt > 3500) {
			animate.eq(21).addClass("animate2");
			animate.eq(22).addClass("animate1");
			animate.eq(23).addClass("animate1");
		} else {
			animate.eq(21).removeClass("animate2");
			animate.eq(22).removeClass("animate1");
			animate.eq(23).removeClass("animate1");
		}
		if(rt > 4000) {
			animate.eq(24).addClass("animate2");
			animate.eq(25).addClass("animate2");
			animate.eq(26).addClass("animate1");
		} else {
			animate.eq(24).removeClass("animate2");
			animate.eq(25).removeClass("animate2");
			animate.eq(26).removeClass("animate1");
		}
		if(rt > 4400) {
			animate.eq(27).addClass("animate2");
			animate.eq(28).addClass("animate1");
			animate.eq(29).addClass("animate1");
		} else {
			animate.eq(27).removeClass("animate2");
			animate.eq(28).removeClass("animate1");
			animate.eq(29).removeClass("animate1");
		}
	};

})