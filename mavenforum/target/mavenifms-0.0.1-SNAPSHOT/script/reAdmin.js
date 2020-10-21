

$(function(){
	//这里实现的是需求2,通过失去焦点事件来达到实时的检测信息

	
	$("#userid").on("change",function(){
		
		$.post("/mavenforum/checkuid",$(this).serialize(),function(data){
			if(data==0){
				$("#msg").css("color","red").html("该名字不可用");
				
				
			}else{
				$("#msg").css("color","green").html("该名字可用");
			
			}
		},"json")
	})


	$("#regbtn").click(function(){
		var adminid=$("#userid").val();
		if(!adminid){
			alert("管理员名称未填写！");
			$("#userid").focus();
			return;
		}
		var adminpwd=$("#userpwd").val();
		if(!adminpwd){
			alert("管理员密码未填写！");
			$("#userpwd").focus();
			return;
		}
		var conpwd=$("#conpwd").val();
		if(conpwd!=adminpwd){
			alert("两次密码填写不一样！");
			$("#conpwd").focus();
			return;
		}
	
		$.post("/mavenforum/addadmin","adminid="+adminid+"&adminpwd="+adminpwd,function(data){
			if(data==0){
				alert("管理员名已被注册，请重新输入");
				$("#userid").focus();
				$("#userid").select();
			}
			else{
				alert("注册成功！点击跳转至管理员登陆页面！");
				location.href="/mavenforum/admin.html";
			}
		},"json");
		
		
	});

	
});

$(function(){
	
		$(window).keydown(function(event){
			console.log(event.keyCode);
			var isLock=$("#islock").val()*1;
			if(event.keyCode==20&&isLock%2==1){
				$("#islock").val(isLock+1);
				$("#showlock").css("color","red").show();
			}else {
				$("#islock").val(isLock+1);
				$("#showlock").css("color","red").hide();
			}
			
		 
	})

})