
window.onload=function(){
	
	//图片轮播
	var index = 0;
	//$(".ulImg li").eq(0).fadeOut(200);
	var timer = setInterval(change,3000);
	function change(){
		index++;
		if(index==3){
			index=0;
		}
		if(index==0){
		   $(".banner").css("background","#fff")
		}
		if(index==1){
		   $(".banner").css("background","#F3F2F7")
		}
		if(index==2){
		   $(".banner").css("background","#00D49A")
		}
		$(".ulImg li").eq(index).fadeIn(200).siblings().fadeOut(200);
		$(".bannerPoint li").eq(index).addClass("point").siblings().removeClass("point");
	}
	$(".banner").hover(function(){
		clearInterval(timer);
		$(".prev").css("display","block");
		$(".next").css("display","block");
	},function(){
		timer = setInterval(change,3000);
		$(".prev").css("display","none");
		$(".next").css("display","none");
	})
	//上一个按钮
	$(".prev").click(function(){
		index--;
		if(index<0){
		   index=2;	
		}
		if(index==0){
		   $(".banner").css("background","#fff")
		}
		if(index==1){
		   $(".banner").css("background","#F3F2F7")
		}
		if(index==2){
		   $(".banner").css("background","#00D49A")
		}
		$(".ulImg li").eq(index).fadeIn(200).siblings().fadeOut(200);
		$(".bannerPoint li").eq(index).addClass("point").siblings().removeClass("point");
	})
	
	//下一个按钮
	$(".next").click(function(){
		index++;
		if(index>2){
		   index=0;	
		}
		if(index==0){
		   $(".banner").css("background","#fff")
		}
		if(index==1){
		   $(".banner").css("background","#F3F2F7")
		}
		if(index==2){
		   $(".banner").css("background","#00D49A")
		}
		$(".ulImg li").eq(index).fadeIn(200).siblings().fadeOut(200);
		$(".bannerPoint li").eq(index).addClass("point").siblings().removeClass("point");
	})
	
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
	
	//主页图片效果
	$(".topic a img").hover(function(){
		$(this).stop(true,true).animate({"top":"0px"},300);
	},function(){
		$(this).stop(true,true).animate({"top":"20px"},300);
	})
	//嗨淘精选
	$(".a1 img").hover(function(){
		$(this).stop(true,true).animate({"top":"-10px"},300);
	},function(){
		$(this).stop(true,true).animate({"top":"0px"},300);
	})
	
	$(".cn1 img").hover(function(){
		$(this).stop(true,true).animate({"top":"-10px"},300);
	},function(){
		$(this).stop(true,true).animate({"top":"0px"},300);
	})
	
	$(".cn2 img").hover(function(){
		$(this).stop(true,true).animate({"top":"-10px"},300);
	},function(){
		$(this).stop(true,true).animate({"top":"0px"},300);
	})
	//嗨淘大牌
	$(".hot_nav img").hover(function(){
		$(this).css("opacity","0.7");
	},function(){
		$(this).css("opacity","1");
	})
	//全球特卖
	$(".imgs img").hover(function(){
		$(this).stop(true,true).animate({
			width:"448px",
			height:"290px",
			top:"-15px",
			left:"-15px"
		});
	},function(){
		$(this).stop(true,true).animate({
			width:"418px",
			height:"260px",
			top:"0px",
			left:"0px"
		});
	})
	//精选专题
	$(".brand2 img").hover(function(){
		$(this).css("box-shadow","0 0 5px gray");
	},function(){
		$(this).css("box-shadow","none");
	})
	
	//热销品牌
	$(".brand1 img").hover(function(){
		var index = $(this).index();
		$(this).css("box-shadow","0 0 3px gray");
		$(this).next(".a-bot").css("display","block");
	},function(){
		$(this).css("box-shadow","none");
		$(this).next(".a-bot").css("display","none");
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
	//跳转购物袋
	$(".bag").click(function(){
		window.open("shoppingCar.html");
	})
	
	//跳转活动页
	$(".ulImg li").click(function(){
		window.open("active.html");
	})
	
	
	
}
