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
	
	//跳转页面
	$(".gobtn2").click(function(){
		window.open("logIn.html");
	})
	
	
	
	//表单获得焦点效果
	$("#r_logPhone").focus(function(){
		$("#r_logPhone").parents(".r_log1").css("border","2px solid #666");
	})
	$("#r_logCode").focus(function(){
		$("#r_logCode").parents(".r_log2").css("border","2px solid #666");
	})
	$("#r_logText").focus(function(){
		$("#r_logText").parents(".r_log3").css("border","2px solid #666");
	})
	
	$("#r_logName").focus(function(){
		$("#r_logName").parents(".r_log21").css("border","2px solid #666");
	})
	$("#r_logPass").focus(function(){
		$("#r_logPass").parents(".r_log22").css("border","2px solid #666");
	})
	$("#r_logRepass").focus(function(){
		$("#r_logRepass").parents(".r_log22").css("border","2px solid #666");
	})
	
	
	
	//表单失去焦点效果
	$("#r_logPhone").blur(function(){
		$("#r_logPhone").parents(".r_log1").css("border","1px solid #ccc");
	})
	$("#r_logCode").blur(function(){
		$("#r_logCode").parents(".r_log2").css("border","1px solid #ccc");
	})
	$("#r_logText").blur(function(){
		$("#r_logText").parents(".r_log3").css("border","1px solid #ccc");
	})	
	
	$("#r_logName").blur(function(){
		$("#r_logName").parents(".r_log21").css("border","1px solid #ccc");
	})
	$("#r_logPass").blur(function(){
		$("#r_logPass").parents(".r_log22").css("border","1px solid #ccc");
	})
	$("#r_logRepass").blur(function(){
		$("#r_logRepass").parents(".r_log22").css("border","1px solid #ccc");
	})
	
	
	
	//表单验证1
	$(".logForm").validate({
		focusCleanup:true,
		focusInvalid:false,
		
		errorPlacement: function(error, element) {
			$(element).parent().after(error);	
			
			  $(element).parent().css("border","2px solid #E10482");
			
		},
		
		 submitHandler:function(form){
            alert("注册成功!");   
            form.submit();
        },    
	
		
		rules:{
			r_logPhone:{
				required:true,
				minlength:11
			},
			r_logCode:{
				required:true,
				minlength:4
			},
			r_logText:{
				required:true,
				minlength:4
			}
		},
		messages:{
			r_logPhone:{
				required:"手机号不能为空",
				minlength:"手机号格式不正确"
			},
			r_logCode:{
				required:"请输入图形验证码",
				minlength:"验证码错误"
			},
			r_logText:{
				required:"短信验证码不能为空",
				minlength:"短信验证码错误"
			}
		}
			
	})
	
	
	//表单验证2
	$(".logForm2").validate({
		
		focusCleanup:true,
		focusInvalid:false,
		
		errorPlacement: function(error, element) {
			$(element).parent("div").after(error);	
			
			$(element).parent("div").css("border","2px solid #E10482");
			
		},
		
		submitHandler:function(form){
            
            function setCookie(key,value,dayCount){
				var d = new Date();
				d.setDate(d.getDate()+dayCount);
				document.cookie = key+"="+encodeURIComponent(value)+";expires="+d.toGMTString();
				return true;
            }
                       
            
            var num = $("#r_logName").val();
            var pas = $("#r_logPass").val();
            setCookie("userName",num,1);
            setCookie("passWord",pas,1);
            alert("注册成功!");
            form.submit();
        },  
		

		
	    rules:{
			r_logName:{
				required:true,
				minlength:11
			},
			r_logPass:{
				required:true,
				minlength:6
			},
			r_logRepass:{
				required:true,
				minlength:6,
				equalTo:"#r_logPass"
			}
		},
		messages:{
			r_logName:{
				required:"昵称不能为空",
				minlength:"昵称不能少于11字符"
			},
			r_logPass:{
				required:"请输入密码",
				minlength:"密码长度不能少于6字符"
			},
			r_logRepass:{
				required:"请重复密码",
				minlength:"两次密码不一致",
				equalTo:"两次密码不一致"
			}
		}
			
	})
	
	//保存cookie
	
	
	
	
	
	
	
	
	
}
