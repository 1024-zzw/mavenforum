


$(function(){
	//这里实现的是需求2,通过失去焦点事件来达到实时的检测信息

	
	$("#userid").bind("input propertychange",function(){
		
		var userid = $(this).val();
		if(!userid){
			$("#msg").css("color","red").html("用户名不能为空");
		}
		if(userid){
		$.post("/mavenforum/checkuid",$(this).serialize(),function(data){
			if(data==0){
				$("#msg").css("color","red").html("该名字不可用");
				
				
			}else{
				$("#msg").css("color","green").html("该名字可用");
			
			}
		},"json")
	}
	})

	$("#email").bind("input propertychange",function(){

		var email = $(this).val();
		if(!email){
			$("#msh").css("color","red").html("邮箱不能为空");
		}
		if(email){

		
		if(!$("input[name='email']").val().match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/)) {

			$("#msh").css("color","red").html("该邮箱格式不正确");
			
		} else {
			$("#msh").css("color","green").html("该邮箱格式正确");
			}

		}
	})
	$("#regbtn").click(function(){
		var userid=$("#userid").val();
		if(!userid){
			alert("用户名称未填写！");
			$("#userid").focus();
			return;
		}
		var userpwd=$("#userpwd").val();
		if(!userpwd){
			alert("密码未填写！");
			$("#userpwd").focus();
			return;
		}
		var conpwd=$("#conpwd").val();
		if(conpwd!=userpwd){
			alert("两次密码填写不一样！");
			$("#conpwd").focus();
			return;
		}
		var email=$("#email").val();
		if(!email){
			alert("邮箱未填写！");
			$("#email").focus();
			return;
		}
		$.post("/mavenforum/adduser",$("[name]").serialize(),function(data){
			if(data==0){
				alert("用户名已被注册，请重新输入");
				$("#userid").focus();
				$("#userid").select();
			}
			else{
				alert("注册成功！点击跳转至登陆页面！");
				location.href="/mavenforum/login.html";
			}
		},"json");
		
		
	});

	
});



$(function(){
	$("#userpwd").bind("input propertychange",function(){
		

		var str = $(this).val();
		var last = str.charAt(str.length-1);
		
		 if (/^[A-Z]+$/.test(last))  //a-z
    { 
	       $("#showlock").css("color","red").show();
     }  
   else {
	      $("#showlock").css("color","red").hide();
    }

	})
})


$(function(){
	$("#conpwd").bind("input propertychange",function(){
	
		var str = $(this).val();
		var last = str.charAt(str.length-1);
		
		 if (/^[A-Z]+$/.test(last))  //a-z
    { 
	       $("#showlock").css("color","red").show();
     }  
   else {
	      $("#showlock").css("color","red").hide();
    }

	})
})




