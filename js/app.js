
$(document).ready(function(){

	$(".menuhover").hide();

	// To make the element wiht id bars hidden by default
	$("#bars").click(function(){

		$(".menuhover").toggle();
		$("#bars").removeClass("show").addClass("hide");
		$("#times").removeClass("hide").addClass("show");

	});

	$("#times").click(function(){

		$(".menuhover").toggle();
		$("#bars").removeClass("hide").addClass("show");
		$("#times").removeClass("show").addClass("hide");
	
	});

	var width=screen.width;
	// $("#test").text("Width: "+width);	

	if(width<=767){

		$("#times").hide();
		$("#bars").hide();
		$(".menuhover").show();

	}


	$("#single-service1").mouseover(function(){

		$("#icon1").addClass("icon-hover");

	});

	$("#single-service1").mouseleave(function(){

		$("#icon1").removeClass("icon-hover");

	});


	$("#single-service2").mouseover(function(){

		$("#icon2").addClass("icon-hover");

	});

	$("#single-service2").mouseleave(function(){

		$("#icon2").removeClass("icon-hover");

	});

	$("#single-service3").mouseover(function(){

		$("#icon3").addClass("icon-hover");

	});

	$("#single-service3").mouseleave(function(){

		$("#icon3").removeClass("icon-hover");

	});


	$("#single-service4").mouseover(function(){

		$("#icon4").addClass("icon-hover");

	});

	$("#single-service4").mouseleave(function(){

		$("#icon4").removeClass("icon-hover");

	});

		$("#single-service5").mouseover(function(){

		$("#icon5").addClass("icon-hover");

	});

	$("#single-service5").mouseleave(function(){

		$("#icon5").removeClass("icon-hover");

	});

		$("#single-service6").mouseover(function(){

		$("#icon6").addClass("icon-hover");

	});

	$("#single-service6").mouseleave(function(){

		$("#icon6").removeClass("icon-hover");

	});


var i=0;
$(window).scroll(function(){	

	var scrtop=$(document).scrollTop();

	// $(".span").text(scrtop);

	if((scrtop>=2090)&&i==0){
			
			$('.count').each(function () {
			    $(this).prop('Counter',0).animate({
			        Counter: $(this).text()
				}, {
					        duration: 500,
					        easing: 'swing',
					        step: function (now) {
					            $(this).text(Math.ceil(now));
					        }
					}
			); // each(function()
		}); // document.body

		i=1;	
	}		

	});

	$(window).scroll(function(){

	

		var scrtop=$(document).scrollTop();
		if(scrtop>=240){
			$("#menu").addClass("bgmenu");

		}

		if(scrtop<240){
			$("#menu").removeClass("bgmenu");

		}		

	});


	// $("#webdesign").click(function(){

	$("#btn-webdesign").click(function(){

		$(".development").hide(1000);
		$(".photography").hide(1000);
		$(".webdesign").show(3000).removeClass("WOW fadeInDown");
	});

	$("#btn-development").click(function(){

		$(".webdesign").hide(1000);
		$(".photography").hide(1000);
		$(".development").show(1000).removeClass("WOW fadeInDown");;
	});

	$("#btn-photography").click(function(){

		$(".development").hide(1000);
		$(".webdesign").hide(1000);
		$(".photography").show(1000).removeClass("WOW fadeInDown");;
	});

	$("#btn-all").click(function(){

		$(".development").show(1000).removeClass("WOW fadeInDown");;
		$(".photography").show(1000).removeClass("WOW fadeInDown");;
		$(".webdesign").show(1000).removeClass("WOW fadeInDown");;
	});


	// Service Caption Hover Effect

	$("#single-service-1").mouseover(function(){
		
		$("#portfolio-caption-1").removeClass("hide").addClass("show");

		// Change service picture opacity upon mouseover
		$("#image-1").css(
			"opacity", "0.5"
		);
	});

	$("#single-service-1").mouseleave(function(){
		
		$("#portfolio-caption-1").removeClass("show").addClass("hide");
		
		// Change service picture opacity upon mouseleave
		$("#image-1").css(
			"opacity", "1"
		);

	});

	$("#single-service-2").mouseover(function(){
		
		$("#portfolio-caption-2").removeClass("hide").addClass("show");

		// Change service picture opacity upon mouseover
		$("#image-2").css(
			"opacity", "0.5"
		);
	});

	$("#single-service-2").mouseleave(function(){
		
		$("#portfolio-caption-2").removeClass("show").addClass("hide");
		
		// Change service picture opacity upon mouseleave
		$("#image-2").css(
			"opacity", "1"
		);

	});


	$("#single-service-3").mouseover(function(){
		
		$("#portfolio-caption-3").removeClass("hide").addClass("show");

		// Change service picture opacity upon mouseover
		$("#image-3").css(
			"opacity", "0.5"
		);
	});

	$("#single-service-3").mouseleave(function(){
		
		$("#portfolio-caption-3").removeClass("show").addClass("hide");
		
		// Change service picture opacity upon mouseleave
		$("#image-3").css(
			"opacity", "1"
		);

	});


		$("#single-service-4").mouseover(function(){
		
		$("#portfolio-caption-4").removeClass("hide").addClass("show");

		// Change service picture opacity upon mouseover
		$("#image-4").css(
			"opacity", "0.5"
		);
	});

	$("#single-service-4").mouseleave(function(){
		
		$("#portfolio-caption-4").removeClass("show").addClass("hide");
		
		// Change service picture opacity upon mouseleave
		$("#image-4").css(
			"opacity", "1"
		);

	});



	$("#single-service-5").mouseover(function(){
		
		$("#portfolio-caption-5").removeClass("hide").addClass("show");

		// Change service picture opacity upon mouseover
		$("#image-5").css(
			"opacity", "0.5"
		);
	});

	$("#single-service-5").mouseleave(function(){
		
		$("#portfolio-caption-5").removeClass("show").addClass("hide");
		
		// Change service picture opacity upon mouseleave
		$("#image-5").css(
			"opacity", "1"
		);

	});


	$("#single-service-6").mouseover(function(){
		
		$("#portfolio-caption-6").removeClass("hide").addClass("show");

		// Change service picture opacity upon mouseover
		$("#image-6").css(
			"opacity", "0.5"
		);
	});

	$("#single-service-6").mouseleave(function(){
		
		$("#portfolio-caption-6").removeClass("show").addClass("hide");
		
		// Change service picture opacity upon mouseleave
		$("#image-6").css(
			"opacity", "1"
		);

	});

});