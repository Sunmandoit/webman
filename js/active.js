window.onload=function(){
	
	//查看分类
	console.log();
	$(".span1").click(function(){
		if($(".menu").css('display')=='none'){			
		   $(".menu").fadeIn(function(){
		      $(".span1 span").html("收起分类");	
		   });
		}else{
           $(".menu").fadeOut(function(){
		      $(".span1 span").html("查看分类");	
		   });			
		}		
	})
	
	$(".sift1 li").hover(function(){
		var t = $(this).index();
		$(".list1 ul").eq(t).css("display","block").siblings().css("display","none");
	})
	
	
	//侧边菜单
	$(".service").hover(function(){
		$(".user_hide").stop(true,true).fadeIn().animate({
			left:"1253px"
		},300);
	},function(){
		$(".user_hide").stop(true,true).animate({
			left:"1220px"
		},300).fadeOut();
	})
	
	$(".collect").hover(function(){
		$(".mycollect").stop(true,true).fadeIn().animate({
			left:"1297px"
		},300);
	},function(){
		$(".mycollect").stop(true,true).animate({
			left:"1265px"
		},300).fadeOut();
	})
	
	$(".discount").hover(function(){
		$(".mydiscount").stop(true,true).fadeIn().animate({
			left:"1297px"
		},300);
	},function(){
		$(".mydiscount").stop(true,true).animate({
			left:"1265px"
		},300).fadeOut();
	})
	
	$(".code").hover(function(){
		$(".mycode").stop(true,true).fadeIn().animate({
			left:"1287px"
		},300);
	},function(){
		$(".mycode").stop(true,true).animate({
			left:"1255px"
		},300).fadeOut();
	})
	
	
	
	
	
	
	
	
}
