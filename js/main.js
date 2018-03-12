$(function(){
    $("#check").click(function(){
        if($('[type="checkbox"]').is(":checked")){
            $('.checkboxStatus').html("Congregation ! "+$('[type="checkbox"]:checked').length+" checkbox checked");
        }else{
            $('.checkboxStatus').html("Sorry! Checkbox is not checked");
         }
})