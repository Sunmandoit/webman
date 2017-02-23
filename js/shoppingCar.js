window.onload=function(){
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
	
	//继续购物
	$(".goshopping").hover(function(){
		$(this).css({"background":"url(img/goshop1.png) no-repeat","color":"#E10482"})
	},function(){
		$(this).css({"background":"url(img/goshop.png) no-repeat","color":"#000"})
	})
	
	//删除图标
	$("#remove").hover(function(){
		$(this).css("background","url(img/del1.png) no-repeat");
	},function(){
		$(this).css("background","url(img/del.png) no-repeat");
	})
	
	
	
	
	//热销推荐
	$(".h_name").hover(function(){
		$(this).css("color","#E10482")
	},function(){
		$(this).css("color","#000")
	})
	
	$(".h_buy").hover(function(){
		$(this).css("background","#e10482");
		$(this).find("span").css("color","#fff");
	},function(){
		$(this).css("background","#fff");
		$(this).find("span").css("color","#E10482");
	})

	
	
	//数量加减111111
	var numb=1;
	$(".btn_del").click(function(){
		 numb--;
		if(numb<=1){
		  numb=1	
		}		
		$(".a_num").attr("value",numb);
		if(numb==1){
		  $(".btn_del").css({"background":"#f2f2f2","color":"#d5d5d5"})
		}
		var price = $(".g_price span").html();
		var pAll = $(".final span").html();
		if(parseFloat(pAll)==parseFloat(price)){
			$(".final span").html(pAll);
		}else if(parseFloat(pAll)>parseFloat(price)){
			pAll = parseFloat(pAll)-parseFloat(price);
		    $(".final span").html(pAll);
		}
		$(".account").css("background","#E10482");
		$("#choic").prop("checked",true); 
		var all = $(".final span").html();
			$(".f_price span").html(all);
			$("#payAll").html(all);
			$("#goods_amount").html(all); 
		
	})
	$(".btn_plus").click(function(){
		numb++;
		$(".a_num").attr("value",numb);
		if(numb>1){
		  $(".btn_del").css({"background":"#fff","color":"#686868"})
		}
		var price = $(".g_price span").html();
		var pAll = $(".final span").html();
		    pAll = parseFloat(pAll)+parseFloat(price);
		$(".final span").html(pAll);
		$("#choic").prop("checked",true);
		$(".account").css("background","#E10482");
		var all = $(".final span").html();
			$(".f_price span").html(all);
			$("#payAll").html(all);
			$("#goods_amount").html(all);
		
	})
	
	

	//获取cookie购物车内容
	function getCookieByKey(key){
		//1、得到cookie字符串，并变成数组
		var str = document.cookie;
		var arr = str.split("; ");
		//2、在数组中找键
		for(var i=0;i<arr.length;i++){
			if(arr[i].indexOf(key+"=")==0){
				return decodeURIComponent(arr[i].substring(key.length+1));
			}
		}
		return null;
    }

	var imgSrc = getCookieByKey("imgSrc");
	var topic = getCookieByKey("topic");
	var money = getCookieByKey("money");
	var num = getCookieByKey("num");
	var all = getCookieByKey("all");
	var color = getCookieByKey("color");
	
	console.log(imgSrc,topic,money,num,all,color);
	
	 //setcookie
	    function setCookie(key,value,dayCount){
	      var d = new Date();
	      d.setDate(d.getDate()+dayCount);
	document.cookie = key+"="+encodeURIComponent(value)+";expires="+d.toGMTString();
	      return true;
        }
	 //删除cookie 
	    function removeCookie(key){
	      setCookie(key,"",-1);
        }

	//删除加入购物车的物品
	$(".btn_1").click(function(){
		$("#tr2").remove();
		
        removeCookie("imgSrc");
       
	    $(".coverAll").css("display","none");
		$(".tips").css("display","none");	
	})
	
	
	
	//判断是否得到了cookie
	if(imgSrc==null){
		return;
	}else{
	  //把获取的cookie动态添加到页面中
	  $("#tr1").after('<tr id=\"tr2\"><td width=\"5%\"><input type=\"checkbox\" id=\"choic2\" /></td><td width=\"43%\"><div class=\"goodsInfo2\"><a class=\"goods_a2\" href=\"\"><i></i><img src=\"'+imgSrc+'\" /></a><div class=\"g_text2\"><a href=\"\">'
+topic+'</a><p class=\"des2\">规格：<span></span></p><p class=\"des2\">重量：<span></span>kg</p><div></div></div></div></td><td width=\"16%\"><strong class=\"g_price2\">￥<span>'+money+'</span></strong><p></p></td><td width=\"12%\"><div class=\"amount2\"><a class=\"btn_del2\" href=\"javascript:;\">-</a><input class=\"a_num2\" type=\"text\" value=\"'
+num+'\"/><a class=\"btn_plus2\" href=\"javascript:;\">+</a></div><p></p></td><td width=\"12%\"><strong class=\"final2\">￥<span>'+all+'</span></strong></td><td width=\"12%\"><a id=\"remove2\" href=\"javascript:;\" title=\"删除\"></a></td></tr>')
	    	  
	}
	
	//删除加入购物车的物品
	//删除按钮
	$("#remove").click(function(){
		$(".coverAll").css("display","block");
		$(".tips").css("display","block");
	})
	$("#remove2").click(function(){
		$(".coverAll").css("display","block");
		$(".tips").css("display","block");
	})
	
	
	//X按钮
	$(".clos").click(function(){
		$(".coverAll").css("display","none");
		$(".tips").css("display","none");
	})
	
	
	
	//取消按钮
	$(".btn_2").click(function(){
		$(".coverAll").css("display","none");
		$(".tips").css("display","none");
	})
	
	
	
	//按钮点击总结价格11111111
	var all = $(".final span").html();

	var all2 = $(".final2 span").html();
	
	var alls = parseFloat(all)+parseFloat(all2);
	
	console.log(all,all2,alls);
	
	$("#choic").click(function(){
		 var ck = $("#choic").prop('checked');
		if(ck==true){			
			$(".f_price span").html(all);
			$("#payAll").html(all);
			$("#goods_amount").html(all);
			$(".account").css("background","#E10482");
			$("#goods_sum").html("1");
			if($("#choic2").prop('checked')==true){
				$("#goods_sum").html("2");
				$(".f_price span").html(alls);
				$("#payAll").html(alls);
			    $("#goods_amount").html(alls);
			    
			}else if($("#choic2").prop('checked')==false){
				
				$(".f_price span").html(all);
			    $("#payAll").html(all);
			    $("#goods_amount").html(all);
			}
			
		}else if(ck==false){
			$("#check1").prop("checked",false);
			$("#check2").prop("checked",false);
			$(".f_price span").html("0.00");
			$("#payAll").html("0.00");
			$("#goods_amount").html("0.00");
			$(".account").css("background","#999");
			if($("#choic2").prop('checked')==true){
				$("#goods_sum").html("1");
				$(".f_price span").html(all2);
			    $("#payAll").html(all2);
			    $("#goods_amount").html(all2);
			    $(".account").css("background","#E10482");
			}else{
				$("#goods_sum").html("0");
			}
		}
	})
	
	
	
		
	//点击按钮总结价格222222222
	var all2 = $(".final2 span").html();
	var alls = parseFloat(all)+parseFloat(all2);
	
	$("#choic2").on("click",function(){
		 var ck2 = $("#choic2").prop('checked');
		if(ck2==true){
			
			$(".f_price span").html(all2);
			$("#payAll").html(all2);
			$("#goods_amount").html(all2);
			$(".account").css("background","#E10482");
			if($("#choic").prop('checked')==true){
				$("#goods_sum").html("2");
				$(".f_price span").html(alls);
				$("#payAll").html(alls);
			    $("#goods_amount").html(alls);
			}else if($("#choic").prop('checked')==false){
				$("#goods_sum").html("1");
			}
			
		}else if(ck2==false){
			$("#check1").prop("checked",false);
			$("#check2").prop("checked",false);
			$(".f_price span").html("0.00");
			$("#payAll").html("0.00");
			$("#goods_amount").html("0.00");
			$(".account").css("background","#999");
			if($("#choic").prop('checked')==true){
				$("#goods_sum").html("1");
				$(".f_price span").html(all);
			    $("#payAll").html(all);
			    $("#goods_amount").html(all);
			    $(".account").css("background","#E10482");
			}else if($("#choic").prop('checked')==false){
				$("#goods_sum").html("0");
				$(".f_price span").html("0.00");
			    $("#payAll").html("0.00");
			    $("#goods_amount").html("0.00");
			    $(".account").css("background","#999");
			}
		}
	})
	
	
	//数量加减2222222
	   //获取当前的数量
	var numb2=$(".a_num2").val();
	
	$(".btn_del2").on("click",function(){
		numb2--;
		if(numb2<=1){
		  numb2=1	
		}	
		$(".a_num2").attr("value",numb2);
        if(numb2==1){
		  $(".btn_del2").css({"background":"#f2f2f2","color":"#d5d5d5"})
		}
        var price2 = $(".g_price2 span").html();
        var pAll2 = $(".final2 span").html();
        if(parseFloat(pAll2)==parseFloat(price2)){
			$(".final2 span").html(pAll2);
		}else if(parseFloat(pAll2)>parseFloat(price2)){
			pAll2 = parseFloat(pAll2)-parseFloat(price2);
		    $(".final2 span").html(pAll2);
		}
        var allnew = $(".final2 span").html();
			$(".f_price span").html(allnew);
			$("#payAll").html(allnew);
			$("#goods_amount").html(allnew); 

        
		
	})
	$(".btn_plus2").on("click",function(){
		numb2++;
		$(".a_num2").attr("value",numb2);
		if(numb2>1){
		  $(".btn_del2").css({"background":"#fff","color":"#686868"})
		}
		//商品单价
        var price2 = $(".g_price2 span").html();
        var pAll2 = $(".final2 span").html();
		    pAll2 = parseFloat(pAll2)+parseFloat(price2);
        $(".final2 span").html(pAll2);
		$("#choic2").prop("checked",true);
		$(".account").css("background","#E10482");
        var allnew = $(".final2 span").html();
			$(".f_price span").html(allnew);
			$("#payAll").html(allnew);
			$("#goods_amount").html(allnew); 
	
	})
	
	
	
	//全选按钮
	$("#check1").click(function(){
		var ak = $("#check1").prop('checked');
		if(ak==true){
			$("#check2").prop("checked",true);
			$("#choic").prop("checked",true);
			$("#choic2").prop("checked",true);
            $(".account").css("background","#E10482");			
			var all3 = $(".final span").html();
			var all4 = $(".final2 span").html();
			var ms = parseFloat(all3)+parseFloat(all4);
			$(".f_price span").html(ms);
			$("#payAll").html(ms);
			$("#goods_amount").html(ms);
			
			
		}else if(ak==false){
			$("#check2").prop("checked",false);
			$("#choic").prop("checked",false);
			$("#choic2").prop("checked",false);
            $(".account").css("background","#999");
            $(".f_price span").html("0.00");
			$("#payAll").html("0.00");
			$("#goods_amount").html("0.00");
			
		}
		
	})
	
	 

	
	
	
	
}
