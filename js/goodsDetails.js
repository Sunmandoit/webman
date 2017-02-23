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
	
	//商品图片
	$(".Imglist li").hover(function(){
		var index = $(this).index();
		var t = index+1;
		$(this).find("a").addClass("choice");
		$(this).siblings().find("a").removeClass("choice");
		$(".showImg").find("img").attr("src","img/showimg"+t+".jpg");
	})
	
	//购买按钮
	$(".action a").hover(function(){
		$(this).css("opacity","0.8")
	},function(){
		$(this).css("opacity","1")
	})
	
	//数量加减
	var numb=1;
	$(".btn_del").click(function(){
		 numb--;
		if(numb<=1){
		  numb=1	
		}		
		$("#buyNum").attr("value",numb);
		if(numb==1){
		  $(".btn_del").css({"background":"#f2f2f2","color":"#d5d5d5"})
		}
	})
	$(".btn_plus").click(function(){
		numb++;
		$("#buyNum").attr("value",numb);
		if(numb>1){
		  $(".btn_del").css({"background":"#fff","color":"#686868"})
		}
	})
	
	
	
	
	//收藏
	$(".showImg a").hover(function(){
		$(".lover").css("background","url(img/lover2.png) no-repeat");
	},function(){
		$(".lover").css("background","url(img/lover1.png) no-repeat");
	})
	
	
	//评论区
	$(".rightTitle li").click(function(){
		$(this).find("a").addClass("active2");
		$(this).siblings().find("a").removeClass("active2");
		var index = $(this).index();
		if(index==0){
			$(".rightNav").css("display","block");
			$(".rightComment").css("display","none");
		}else if(index==1){
			$(".rightNav").css("display","none");
			$(".rightComment").css("display","block");
		}
	})
	
	
	//加入购物车按钮
	$(".addTo").click(function(){
		$(".bag").find("span").html("2");
		
		function setCookie(key,value,dayCount){
		  var d = new Date();
		  d.setDate(d.getDate()+dayCount);
		  document.cookie = key+"="+encodeURIComponent(value)+";expires="+d.toGMTString();
		  return true;
        }
		
		//设置cookie
		//1图片
		var loco = $(".choice").find("img").attr("src");		 
		setCookie("imgSrc",loco,1);
		//2标题
		var title = $(".information").find("h3").html();
		setCookie("topic",title,1);
		//3价格
		var price = $(".g_price").find("b").html();
		setCookie("money",price,1);
		//4数量
		var num = $("#buyNum").val();
		setCookie("num",num,1);
		//5总价
		var allmoney = parseInt(num)*parseFloat(price);
		setCookie("all",allmoney,1);
		//6颜色
		var col = $(".choice1").html();
		setCookie("color",col,1);
		
		
		

		
	})
	
	//跳转购物袋
	$(".bag").click(function(){
		window.open("shoppingCar.html");
	})
	
	
	
	
}
