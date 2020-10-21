$(function(){
	//获取当前登录用户的信息
	$.post("/mavenforum/getcuruser",null,function(data){
		//将用户信息放到页面上
		if(data){
		// 	//把名字写在页面上
		// $("#curname").html(data.username);
		//     //将当前用户的id藏在页面上
        // $("#curid").val(data.userid);
        
        var oTr = $("<tr></tr>");
        $("<td></td>").html(data.userid).appendTo(oTr);
        $("<td></td>").html(data.email).appendTo(oTr);
        $("<td></td>").html(data.userpwd).appendTo(oTr);
        var otd = $("<td></td>").appendTo(oTr);
        $("<button type='button' class='btn btn-warning'>修改密码</button>").click(function(){
            if($(this).html() == "修改密码"){

                var oTd3 = $(this).parent().parent().find("td:eq(2)");
                var userpwd= oTd3.html();
                oTd3.empty();
                $("<input type='text' class='form-control'  >").val(userpwd).appendTo(oTd3);
                $(this).html("确认");
            }
            
            else if($(this).html() == "确认"){
                var oText1=$(this).parent().parent().find("td:eq(0) ");
                var userid=oText1.html();
                var oText2=$(this).parent().parent().find("td:eq(1) ");
                var email=oText2.html();
                var oText3=$(this).parent().parent().find("td:eq(2) input");
                var userpwd=oText3.val();
                var oBtn = $(this);
                $.post("/mavenforum/modpwd","userid="+userid+"&email="+email+"&userpwd="+userpwd,function(data){
                    if(data==1){

                        var oTd3=oBtn.parent().parent().find("td:eq(2)");
                        var oText3 = oTd3.find("input");
                        var userpassword = oText3.val();
		            				oTd3.empty();
                                    oTd3.html(userpassword);
                        oBtn.html("修改密码");
                        alert("修改成功");
                    }
                },"json")
                
            }
        }).appendTo(otd);

        $("<a class='btn btn-info' href='/mavenforum/logintm.html' role='button'>查看历史登录时间</a>").click(function(){

        }).appendTo(otd);


        oTr.appendTo("#personnews");
		
		}
	},"json");
	
})