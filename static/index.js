$(document).ready(function(){
    $("#progress").hide();

    $("#uploadForm").submit(function (){
        $("#progress").show();
       $(this).ajaxSubmit({
           error:function (xhr){
               console.log(xhr);
           },
           success:function (res){
               $("#OCROutput").text(res.message);
               $("#OCROutput").css('color', '#212121');
               $("#progress").hide();
           }
       });

       return false;
    });

});