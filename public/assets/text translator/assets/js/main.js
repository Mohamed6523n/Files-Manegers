$(document).ready(function() {

    $("#Convert").on("click",function(){
            var lang_one = $("#lang_one").val()
            var lang_tow = $("#lang_tow").val()
            var text = $("#floatingTextarea2").val()
            
            $.ajax({
                url:"process.php",
                type: "post",
                data: {lang_one:lang_one ,lang_tow:lang_tow , text :text},
                success: function(status){

                    text = $("#floatingTextarea2").val(status)
                }
            });
    });

});
