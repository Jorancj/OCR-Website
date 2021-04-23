$(document).ready(function(){
    $("#progress").hide();

    $("#uploadForm").submit(function (){
        $("#progress").show();
       $(this).ajaxSubmit({
           error:function (xhr){
               console.log(xhr);
               $("#progress").hide();
               $("#err").text("noe gikk galt");
           },
           success:function (res){
               $("#OCROutput").text(res.message);
               $("#OCROutput").css('color', '#FFFFFF');
               $("#progress").hide();
           }
       });

       return false;
    });

});