$(document).ready(function(){

    $("#uploadForm").submit(function (){
       $(this).ajaxSubmit({
           error:function (xhr){
               console.log(xhr);
           },
           success:function (res){
               $("#OCROutput").text(res.message);
               $("#OCROutput").css('color', '#212121');
           }
       });
       $(this).hide();
       return false;
    });

});