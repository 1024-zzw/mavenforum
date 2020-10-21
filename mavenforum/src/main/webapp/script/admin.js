$(function(){

	if($("#userpwd").attr("type") == "password"){
		
		$("#showText").attr("src","/mavenforum/img/bizhe.png");
	}
	else{
	  
	   $("#showText").attr("src","/mavenforum/img/zhengkai.png");
   }
	  
 $("#showText").click(function(){
	 if($("#userpwd").attr("type") == "password"){
		 $("#userpwd").attr("type","text") ;
		 $("#showText").attr("src","/mavenforum/img/zhengkai.png");
	 }
	 else{
		$("#userpwd").attr("type","password");
		$("#showText").attr("src","/mavenforum/img/bizhe.png");
	}
})

	$("#loginbtn").click(function(){
		var adminid=$("#userid").val();
		if(!adminid){
			alert("用户名未填写");
			$("#userid").focus();
			return;
		}
		var adminpwd=$("#userpwd").val();
		if(!adminpwd){
			alert("密码未填写");
			$("#userpwd").focus();
			return;
		}
		$.post("/mavenforum/adminlogin","adminid="+adminid+"&adminpwd="+adminpwd,function(data){
			if(data.adminid){
				location.href="/mavenforum/adminindex.html";
			}else{
				alert("用户名或密码错误");
			}
		},"json");
	});

	
	   

 })
	  
	 
 
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