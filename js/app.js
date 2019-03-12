
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

$(".bannerEstatico").css({"height":alturaBanner+"px"})


$(window).scroll(function(){
	var ejeY = window.pageYOffset;

	if (ejeY > alturaBanner) {
		$("header").css({"background":"white"})
	}else{
		$("header").css({"background":"rgba(0,0,0,.5)"})
	}
})


/*=============================================
MENU
=============================================*/


$(".fa-bars").click(function(){
	$(".menu").fadeIn("fast");
})

$(".btnClose").click(function(){
	$(".menu").fadeOut("fast");
})


/*=============================================
CATEGORIAS
=============================================*/

$(".grid figure").mouseover(function(){
	$(this).css({"background-position":"right bottom"});
})

$(".grid figure").mouseout(function(){
	$(this).css({"background-position":"left top"});
})


/*=============================================
PAGINACION
=============================================*/

$(".pagination").twbsPagination({
	totalPages: 15,
	visiblePages: 6,
	first: false,
	last: false,
	prev: '<i class="fas fa-angle-double-left"></i>',
	next: '<i class="fas fa-angle-double-right"></i>'
});

/*=============================================
SCROLL
=============================================*/

var controller = $.superscrollorama();

controller.addTween(".principal", TweenMax.from(

		$(".principal"), .5, {css:{opacity:0}}

	));
