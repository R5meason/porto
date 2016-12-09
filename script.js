// Initialize Firebase
var config = {
    apiKey: "AIzaSyDkSPjgMHnma13HxpssmNrU4JyEB_652jc",
    authDomain: "messagecenter-2ba1e.firebaseapp.com",
    databaseURL: "https://messagecenter-2ba1e.firebaseio.com",
    storageBucket: "messagecenter-2ba1e.appspot.com",
    messagingSenderId: "107256469130"
};

firebase.initializeApp(config);
var fbRef = firebase.database();

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

var validEmail = false;

var emailCheck = function () {
    if (!$('#emailAddy').val().includes("@") || !$('#emailAddy').val().includes(".com")) {
        console.log("no");
        document.getElementById("validEmail").innerHTML = "Please Enter a Valid Email Address";
    }
    else {
        validEmail = true;
    }
};

var sendMsg = function (em, msg) {
    emailCheck();
    if (validEmail && $('#msg').val() > 0) {
        var data = {
            em: em,
            msg: msg
        };
        fbRef.ref('msg').push(data);
        document.getElementById('emailAddy').value = "";
        document.getElementById('msg').value = "";
        document.getElementById("validEmail").innerText = "You Message Has Been Sent!";
        validEmail = false;
        validMsg = false;
    }
    else if (validEmail) {
        document.getElementById("validEmail").innerText = "Please Enter a Message";
    }
};