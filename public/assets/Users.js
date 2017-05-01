$(function() {
    $('#singleRadio2').click(function(){
        if ($(this).is(':checked'))
    {
        $("#pass1").removeAttr("disabled"); 
        $("#pass2").removeAttr("disabled");
    }
    //If checkbox is unchecked then disable or enable input
    })
     $('#singleRadio1').click(function(){
        if ($(this).is(':checked'))
    {
        $("#pass1").attr("disabled","disabled"); 
        $("#pass2").attr("disabled","disabled");
    }
    //If checkbox is unchecked then disable or enable input
    })
$(".user").change(function(){
    if($(this).is(":checked")){
        $('.check-user').addClass("blue");
        
    }else{
        $('.check-user').removeClass("blue");  
    }
});
    $(".admin").change(function(){
    if($(this).is(":checked")){
        $('.check-admin').addClass("blue");
        
    }else{
        $('.check-admin').removeClass("blue");  
    }
});
    $(".zerg").change(function(){
    if($(this).is(":checked")){
        $('.check-zerg').addClass("blue");
        
    }else{
        $('.check-zerg').removeClass("blue");  
    }
});
});