var open = false;

$( document ).ready(function() {
    $('.open').click(function() {
        var divId = $(this).attr("data-param");
        if (!open) {
            $('#'+divId).slideDown();
            open = true;
        }
    });
    $(".close").click(function(){
        var divId = $(this).attr("data-param");
        $('#'+divId).slideUp("slow");
        open = false;
    });

});