window.onload=function(){
	//登录注册
	$(".mainlog_top li").click(function(){
	    var index = $(this).index();
		$(this).addClass("mainlog_id").siblings().removeClass("mainlog_id");
		if(index==0){
			$(".login1").css("display","block");
			$(".login2").css("display","none");
		}else if(index==1){
			$(".login1").css("display","none");
			$(".login2").css("display","block");
		}
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
	
	//跳转页面
	$(".gobtn").click(function(){
		window.open("register.html");
	})
	
	
	
	
	//表单获得焦点效果
	$("#logPhone").focus(function(){
		$("#logPhone").parents(".loga").css("border","2px solid #666");
	})
	$("#logPass").focus(function(){
		$("#logPass").parents(".logb").css("border","2px solid #666");
	})
	$("#logPhone2").focus(function(){
		$("#logPhone2").parents(".log2a").css("border","2px solid #666");
	})
	$("#logCode").focus(function(){
		$("#logCode").parents(".log2b").css("border","2px solid #666");
	})
	$("#logText").focus(function(){
		$("#logText").parents(".log2c").css("border","2px solid #666");
	})
	
	
	//表单失去焦点效果
	
	
	$("#logPhone").blur(function(){
		$("#logPhone").parents(".loga").css("border","1px solid #ccc");
	})
	$("#logPass").blur(function(){
		$("#logPass").parents(".logb").css("border","1px solid #ccc");
	})
	$("#logPhone2").blur(function(){
		$("#logPhone2").parents(".log2a").css("border","1px solid #ccc");
	})
	$("#logCode").blur(function(){
		$("#logCode").parents(".log2b").css("border","1px solid #ccc");
	})
	$("#logText").blur(function(){
		$("#logText").parents(".log2c").css("border","1px solid #ccc");
	})
	
	
	//表单验证
	$(".formlog1").validate({
		focusCleanup:true,
		focusInvalid:false,
		
		errorPlacement: function(error, element) {
			$(element).parent().after(error);	
			
			  $(element).parent().css("border","2px solid #E10482");
			
		},
		
		submitHandler:function(form){
              
           // form.submit();
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
           };
           //获取cookie里的用户名和密码
           var Cname = getCookieByKey("userName");
           var Cpass = getCookieByKey("passWord");
           //获取当前用户填入的用户名密码
           var Lname = $("#logPhone").val();
           var Lpass = $("#logPass").val();
           //对比cookie和当前的用户名和密码
           if(Cname==Lname && Cpass==Lpass){
           	  alert("登录成功!");
           	  window.open("index.html");
           }else{
           	  alert("登录失败!"); 
           }
            
           form.submit(); 
        },    
	
		
		rules:{
			logPhone:{
				required:true,
				minlength:11
			},
			logPass:{
				required:true,
				rangelength:[5,15]
			}
			
		},
		messages:{
			logPhone:{
				required:"手机号不能为空",
				minlength:"手机号格式不正确"
			},
			logPass:{
				required:"请输入密码",
				rangelength:"密码长度不正确"
		    }
		}	
	})
	
	
	$(".formlog2").validate({
		focusCleanup:true,
		focusInvalid:false,
		
		errorPlacement: function(error, element) {
			$(element).parent().after(error);	
			
			  $(element).parent().css("border","2px solid #E10482");
			
		},
		
		submitHandler:function(form){
            alert("登录成功!");   
            form.submit();
        },    
	
		
		rules:{
			logPhone2:{
				required:true,
				minlength:11
			},
			logCode:{
				required:true,
				rangelength:4
			},
			logText:{
				required:true,
				rangelength:4
			}
			
		},
		messages:{
			logPhone2:{
				required:"手机号不能为空",
				minlength:"手机号格式不正确"
			},
			logCode:{
				required:"请输入图形码",
				minlength:"图形码错误"
		    },
		    logText:{
				required:"请输入验证码",
				rangelength:"验证码错误"
			}
		}	
	})
	
	

	
	
	
}
