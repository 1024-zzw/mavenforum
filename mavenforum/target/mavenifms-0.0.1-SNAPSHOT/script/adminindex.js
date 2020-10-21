$(function(){
    $.ajaxSetup({async:false});



    

    $("#searchBtnShow").click(function(){
		$("#pageNum").val(1);
		$("#searchBtn").click();
    })
    

    $("#searchBtn").click(function(){
    var pageSize=$("#pageSize").val();
    var pageNum=$("#pageNum").val();

    $.post("/mavenforum/searchuser","pageSize="+pageSize+"&pageNum="+pageNum,function(data){
        if(data&&data.size >0){
            $("#total").html(data.total);
				//添加总页数     共    <span id="pages"></span> 页
			$("#pages").html(data.pages);
				//添加当前页数   第     <span id="curpage"></span>页
            $("#curpage").html(data.pageNum);
            
            $("#resulttable tr:gt(0)").remove();

            for(var i=0 ; i<data.list.length;i++){
                var userinfo = data.list[i];
                var oTr = $("<tr></tr>");

                $("<td></td>").html(userinfo.userid).appendTo(oTr);
                $("<td></td>").html(userinfo.userpwd).appendTo(oTr);
                $("<td></td>").html(userinfo.email).appendTo(oTr);

                var oTd = $("<td></td");

                $("<button type='button' class=' btn btn-info' >修改信息</button>").click(function(){
                    if($(this).html() == "修改信息"){

                        var oTd1 = $(this).parent().parent().find("td:eq(0)");
                        var userid= oTd1.html();
                        oTd1.empty();
                        $("<input type='text' class='form-control' >").val(userid).appendTo(oTd1);

                        
                        var oTd2 = $(this).parent().parent().find("td:eq(1)");
                        var userpwd= oTd2.html();
                        oTd2.empty();
                        $("<input type='text' class='form-control' >").val(userpwd).appendTo(oTd2);

                      
                        
                        var oTd3 = $(this).parent().parent().find("td:eq(2)");
                        var email= oTd3.html();
                        oTd3.empty();
                        $("<input type='text' class='form-control' >").val(email).appendTo(oTd3);
                        

                        $(this).html("确认");
                    }
                   
                     
                    else if($(this).html() == "确认"){
                        var oText1=$(this).parent().parent().find("td:eq(0) input");
                        var userid=oText1.val();
                        var oText2=$(this).parent().parent().find("td:eq(1) input");
                        var userpwd=oText2.val();
                        var oText3=$(this).parent().parent().find("td:eq(2) input");
                        var email=oText3.val();
                        var oBtn = $(this);
                        $.post("/mavenforum/moduser","userid="+userid+"&email="+email+"&userpwd="+userpwd,function(data){
                            if(data==1){
        
                                var oTd3=oBtn.parent().parent().find("td:eq(2)");
                                var oText3 = oTd3.find("input");
                                var email = oText3.val();
                                            oTd3.empty();
                                            oTd3.html(email);

                                            var oTd2=oBtn.parent().parent().find("td:eq(1)");
                                            var oText2 = oTd2.find("input");
                                            var userpwd = oText2.val();
                                                        oTd2.empty();
                                                        oTd2.html(userpwd);
                             var oTd1=oBtn.parent().parent().find("td:eq(0)");
                                 var oText1 = oTd1.find("input");
                                var userid = oText1.val();
                                 oTd1.empty();
                                 oTd1.html(userid);
                                oBtn.html("修改信息");
                                alert("修改成功");
                            }
                        },"json")
                        
                    }

                }).appendTo(oTd);

                $("<button type='button' class='btn btn-danger' >删除</button>").click(function(){

                    var oTd1=$(this).parent().parent().find("td:eq(0)");
                    var userid = oTd1.html();
                    $.post("/mavenforum/deluser","userid="+userid,function(data){
                        if(data==1){
                            alert("删除"+userid+"成功");
                            $("#searchBtn").click();
                        }
                        else{
                            alert("删除"+userid+"失败")
                        }
                    },"json")
                }).appendTo(oTd);


                oTd.appendTo(oTr);
                oTr.appendTo("#resulttable");
               
                $("#resultdiv").show();
                $("#pagectrl").show();
                
                
                if(data.isFirstPage){
					//是第一页把第一页的超链接藏起来
					$("#prePage").hide();
					//是第一页把第一页的span展示出来
					$("#prePageSpan").show();
				}
				else{
					$("#prePage").show();
					$("#prePageSpan").hide();
				}
				if(data.isLastPage){
					$("#nextPage").hide();
					$("#nextPageSpan").show();
				}
				else{
					$("#nextPage").show();
					$("#nextPageSpan").hide();
				}
            }
		
        }else{
            //没有查询到数据，结果表格和分页控制按钮需要隐藏
            $("#resultdiv").hide();
            $("#pagectrl").hide();
            
            alert("没有查到数据.");
        }
    },"json");


})


    })
    


$(function(){
	//完成上一页功能
	//因为当出现超链接时说明已经不是第一页了，该判断已经在上一个function中已经判断过了
	$("#prePage").click(function(){
		//将页面上隐藏的pageNum的值减一
		var pageNum = $("#pageNum").val();
		//将var pageNum减一并把value值赋给pageNum
		//字符串没有减操作，遇到减号，javascript会将pageNum转为数字进行运算
		$("#pageNum").val(pageNum-1);
		//再进行一次查询操作，用新的pageNum值
		//由于javascript的核心时编程思想，所以function函数之间互不影响
		//前一个function执行完毕以后，作用域和作用空间就会消失
		//只要是html页面上的数据都可以获取
		//将新的pageNum值和页面的name值再一次输送到searchBtn按钮处进行查询
		$("#searchBtn").click();
	});
	
	//完成下一页功能
	$("#nextPage").click(function(){
		//将页面上隐藏的pageNum的值加一
		var pageNum = $("#pageNum").val();
		//乘1是为了将pageNum字符串转换为数值
		//从html页面上获取的都是字符串
		$("#pageNum").val(pageNum*1+1);
		$("#searchBtn").click();
	})
	
	
		

	
})