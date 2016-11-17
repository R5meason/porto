var divOpen = false;
var appOpen = false;

$( document ).ready(function() {
    $('.open').click(function() {
        var divId = $(this).attr("data-param");
        if (!divOpen) {
            $('#'+divId).slideDown("slow");
            divOpen = true;
        }
    });
    $(".close").click(function(){
        var divId = $(this).attr("data-param");
        $('#'+divId).slideUp("slow");
        divOpen = false;
        if (appOpen) {
            $("#appIndex").show("slow");
            appOpen = false;
        }
    });
    $("#dealBtn").click(function(){
        $("#deal").show("slow");
        $("#cats").hide("fast");
        $("#calc").hide("fast");
        $("#appIndex").hide("fast");
        appOpen = true;
    });
    $("#catsBtn").click(function(){
        $("#cats").show("slow");
        $("#deal").hide("fast");
        $("#calc").hide("fast");
        $("#appIndex").hide("fast");
        appOpen = true;
    });
    $("#calcBtn").click(function(){
        $("#calc").show("slow");
        $("#cats").hide("fast");
        $("#deal").hide("fast");
        $("#appIndex").hide("fast");
        appOpen = true;
    });
});