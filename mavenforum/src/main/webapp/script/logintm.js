$(function(){
    $.ajaxSetup({async:false});

    
    $.post("/mavenforum/getcuruser",null,function(data){
	    
		if(data){
            
        $("#uid").val(data.userid);
      
		}
    },"json");

    

    $("#searchBtnShow").click(function(){
		$("#pageNum").val(1);
		$("#searchBtn").click();
    })
    

    $("#searchBtn").click(function(){
    var userid=$("#uid").val();
    var pageSize=$("#pageSize").val();
    var pageNum=$("#pageNum").val();

    $.post("/mavenforum/searchtm","userid="+userid+"&pageSize="+pageSize+"&pageNum="+pageNum,function(data){
        if(data&&data.size >0){
            $("#total").html(data.total);
				//添加总页数     共    <span id="pages"></span> 页
			$("#pages").html(data.pages);
				//添加当前页数   第     <span id="curpage"></span>页
            $("#curpage").html(data.pageNum);
            
            $("#resulttable tr:gt(0)").remove();

            for(var i=0 ; i<data.list.length;i++){
                var tminfo = data.list[i];
                var oTr = $("<tr></tr>")

                $("<td></td>").html(tminfo.userid).appendTo(oTr);
                $("<td></td>").html(tminfo.logintm).appendTo(oTr);
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