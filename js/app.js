
/*=============================================
BANNER
=============================================*/

$(".fade-slider").jdSlider({

	isSliding: false,
	isAuto: true,
	isLoop: true,
	isDrag: false,
	interval:5000,
	isCursor: false,
	speed:3000

});

var alturaBanner = $(".fade-slider").height();
$(".bannerEstatico").css({"height":alturaBanner+"px"});


$(window).scroll(function(){
	var ejeY = window.pageYOffset;

	if (ejeY > alturaBanner) {
		$("header").css({"background":"white"})
	}else{
		$("header").css({"background":"rgba(0,0,0,.5)"})
	}
})
