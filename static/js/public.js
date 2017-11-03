$(function(){
	//search
	$(".main-search .ipt_txt1").focus(function () {
		var jq_f1 = $(this).val();
		if (jq_f1 == "") {
			$(this).removeClass("jq_va1")
		}
	});
	$(".main-search .ipt_txt1").blur(function () {
		var jq_f1 = $(this).val();
		if (jq_f1 == "") {
			$(this).addClass("jq_va1");
		}
	});

	var mcText = $('.mc').text();
	//
	$('.lx-nav li').each(function(){
		var navText = $(this).text();
		if(navText == mcText){
			var posX=$(this).position().left;
			var widthLi = $(this).width();
			$(".uline").css({
				"left":parseInt(posX+20),
				"width":widthLi
			})
			$(this).children('a').addClass('cl')
		}

	})
	$('.lx-nav li').hover(function(){
		var posX=$(this).position().left;
		var widthLi = $(this).width();
		//console.log(posX,widthLi);
		$(".uline").stop().animate({
			"left":parseInt(posX+20),
			"width":widthLi
		},300)
	})
	//dialog
	var winW=$(window).width();
	var winH=$(window).height();
	$(".layout-mark").height(winH);
	$("#ico-t1").click(function(){
		$(".layout-mark").show();
		$("#layout-login").show();
		$("#layout-message").hide();
		$("#layout-cart").hide();
	})
	$("#ico-t2").click(function(){
		$(".layout-mark").show();
		$("#layout-login").hide();
		$("#layout-message").show();
		$("#layout-cart").hide();
	})
	$("#ico-t3").click(function(){
		$(".layout-mark").show();
		$("#layout-login").hide();
		$("#layout-message").hide();
		$("#layout-cart").show();
	})
	$("#link-message").click(function(e){
		e.preventDefault();
		$(".layout-mark").show();
		$("#layout-login").hide();
		$("#layout-message").show();
		$("#layout-cart").hide();
	})
	$(".login-close").click(function(){
		$(".layout-mark").hide();
		$("#layout-message").hide();
		$("#layout-login").hide();
	})
})
