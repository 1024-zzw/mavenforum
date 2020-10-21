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
		var userid=$("#userid").val();
		if(!userid){
			alert("用户名未填写");
			$("#userid").focus();
			return;
		}
		var userpwd=$("#userpwd").val();
		if(!userpwd){
			alert("密码未填写");
			$("#userpwd").focus();
			return;
		}
		$.post("/mavenforum/login",$("[name]").serialize(),function(data){
			if(data.userid){
				location.href="/mavenforum/indextwo.html";
			}else{
				alert("用户名或密码错误");
			}
		},"json");
	});

	
	   

 })
	  
	 

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


