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
    $("#dealBtn").click(function(){
        $("#deal").show();
        $("#cats").hide();
        $("#calc").hide();
        $("#appIndex").hide();
    });
    $("#catsBtn").click(function(){
        $("#cats").show();
        $("#deal").hide();
        $("#calc").hide();
        $("#appIndex").hide();
    });
    $("#calcBtn").click(function(){
        $("#calc").show();
        $("#cats").hide();
        $("#deal").hide();
        $("#appIndex").hide();
    });
});