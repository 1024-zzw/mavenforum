$(function(){
    $.post("/mavenforum/getcuruser",null,function(data){
	    
		if(data){
            
        $("#uid").val(data.userid);
      
		}
	},"json");
  
    $("#logintime").click(function(){
        //获取时间
        var mydate = new Date();
        var str = "" + mydate.getFullYear() + "-";
        str += (mydate.getMonth() + 1) + "-";
        str += mydate.getDate()+"     ";
        str += mydate.getHours()+":";
        str += mydate.getMinutes()+":";
        str += mydate.getSeconds();
        var userid=$("#uid").val();
        $.post("/mavenforum/addtm","userid="+userid+"&logintm="+str),function(data){
            
        },"json"
        
        
    })
    
})