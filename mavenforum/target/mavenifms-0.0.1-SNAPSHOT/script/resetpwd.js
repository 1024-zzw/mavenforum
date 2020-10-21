$(function(){
	//这里实现的是需求2,通过失去焦点事件来达到实时的检测信息

	
	$("#userid").on("change",function(){
		
		$.post("/mavenforum/checkuid",$(this).serialize(),function(data){
			if(data==0){
				$("#msg").css("color","green").html("该名字确实存在,请输入您的邮箱");
				
				
			}else{
				$("#msg").css("color","red").html("该名字不存在鸭，用户名打错了哦");
			
			}
		},"json")
    })

    $("#email").on("change",function(){
        var uid=$("#userid").val();
        var email=$("#email").val();
        $.post("/mavenforum/checkemail","userid="+uid+"&email="+email,function(data){
			if(data==0){
				$("#msh").css("color","green").html("输入的邮箱正确");
				
				
			}else{
				$("#msh").css("color","red").html("邮箱不正确哦，请再次输入，否则没法更改密码");
			
			}
		},"json")
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
		$.post("/mavenforum/modpwd",$("[name]").serialize(),function(data){
			if(data==0){
				alert("用户名不存在或者邮箱错误");
				
			}
			else{
				alert("密码重置成功！点击跳转至登陆页面！");
				location.href="/mavenforum/login.html";
			}
		},"json");
		
		
	});
});