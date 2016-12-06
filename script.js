$(window).load(function () {
    $('.displayInfo').slideDown("slow");
});

$(document).ready(function () {
    $("#dealBtn").click(function () {

        $("#deal").show("slow");
        $("#cats").hide("fast");
        $("#calc").hide("fast");
        $("#appIndex").hide("fast");
        appOpen = true;
    });
    $("#catsBtn").click(function () {
        $("#cats").show("slow");
        $("#deal").hide("fast");
        $("#calc").hide("fast");
        $("#appIndex").hide("fast");
        appOpen = true;
    });
    $("#calcBtn").click(function () {
        $("#calc").show("slow");
        $("#cats").hide("fast");
        $("#deal").hide("fast");
        $("#appIndex").hide("fast");
        appOpen = true;
    });
});

var emailCheck = function () {
    if (!$('#emailAddy').val().includes("@") || !$('#emailAddy').val().includes(".com")) {
        console.log("no");
        document.getElementById("validEmail").innerHTML = "Please Enter a Valid Email Address";
    }
};