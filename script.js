$(window).load(function () {
    $('.displayInfo').slideDown("slow");

    $("#dealBtn").click(function () {

        $("#deal").show("slow");
        $("#cats").hide("fast");
        $("#calc").hide("fast");
        $("#appIndex").hide("fast");
    });
    $("#catsBtn").click(function () {
        $("#cats").show("slow");
        $("#deal").hide("fast");
        $("#calc").hide("fast");
        $("#appIndex").hide("fast");
    });
    $("#calcBtn").click(function () {
        $("#calc").show("slow");
        $("#cats").hide("fast");
        $("#deal").hide("fast");
        $("#appIndex").hide("fast");
    });
});

var config = {
    apiKey: "AIzaSyDkSPjgMHnma13HxpssmNrU4JyEB_652jc",
    authDomain: "messagecenter-2ba1e.firebaseapp.com",
    databaseURL: "https://messagecenter-2ba1e.firebaseio.com",
    storageBucket: "messagecenter-2ba1e.appspot.com",
    messagingSenderId: "107256469130"
};

firebase.initializeApp(config);
var fbRef = firebase.database();

var validEmail = false;
var nameEntered = false;

var nameCheck = function () {
    if ($('#name').val().length < 2) {
        document.getElementById("validEmail").innerHTML = "Please Enter Your Name";
        nameEntered = false;
    }
    else {
        nameEntered = true;
    }
};

var emailCheck = function () {
    if (!$('#emailAddy').val().includes("@") || !$('#emailAddy').val().includes(".com") || !$('#emailAddy').val().includes(".net") || !$('#emailAddy').val().includes(".org") || !$('#emailAddy').val().includes(".edu") || !$('#emailAddy').val().includes(".gov")) {
        document.getElementById("validEmail").innerHTML = "Please Enter a Valid Email Address";
        validEmail = false;
    }
    else {
        validEmail = true;
    }
};

var proceed = function () {
    document.getElementById('name').value = "";
    document.getElementById('emailAddy').value = "";
    document.getElementById('msg').value = "";
    document.getElementById("validEmail").innerText = "Your Message Has Been Sent!";
    validEmail = false;
    nameEntered = false;
};

var sendMsg = function (name, em, msg) {
    nameCheck();
    if (nameEntered) {
        emailCheck();

        if (validEmail && $('#msg').val().length > 0 && $('#msg').val().length < 21) {
            var data = {
                name: name,
                em: em,
                msg: msg
            };
            fbRef.ref('msg').push(data);
            proceed();
        }
        else if (validEmail && $('#msg').val().length > 0 && $('#msg').val().length < 41) {
            var data = {
                name: name,
                em: em,
                msg: msg.substring(0, 19),
                msg2: msg.substring(19)
            };
            fbRef.ref('msg').push(data);
            proceed();
        }
        else if (validEmail && $('#msg').val().length > 0 && $('#msg').val().length < 61) {
            var data = {
                name: name,
                em: em,
                msg: msg.substring(0, 19),
                msg2: msg.substring(19, 39),
                msg3: msg.substring(39)
            };
            fbRef.ref('msg').push(data);
            proceed();
        }
        else if (validEmail && $('#msg').val().length > 0 && $('#msg').val().length < 81) {
            var data = {
                name: name,
                em: em,
                msg: msg.substring(0, 19),
                msg2: msg.substring(19, 39),
                msg3: msg.substring(39, 59),
                msg4: msg.substring(59)
            };
            fbRef.ref('msg').push(data);
            proceed();
        }
        else if (validEmail && $('#msg').val().length > 0 && $('#msg').val().length < 101) {
            var data = {
                name: name,
                em: em,
                msg: msg.substring(0, 19),
                msg2: msg.substring(19, 39),
                msg3: msg.substring(39, 59),
                msg4: msg.substring(59, 79),
                msg5: msg.substring(79)
            };
            fbRef.ref('msg').push(data);
            proceed();
        }
        else if (validEmail && $('#msg').val().length > 0 && $('#msg').val().length < 121) {
            var data = {
                name: name,
                em: em,
                msg: msg.substring(0, 19),
                msg2: msg.substring(19, 39),
                msg3: msg.substring(39, 59),
                msg4: msg.substring(59, 79),
                msg5: msg.substring(79, 99),
                msg6: msg.substring(99)
            };
            fbRef.ref('msg').push(data);
            proceed();
        }
        else if (validEmail && $('#msg').val().length > 0 && $('#msg').val().length < 141) {
            var data = {
                name: name,
                em: em,
                msg: msg.substring(0, 19),
                msg2: msg.substring(19, 39),
                msg3: msg.substring(39, 59),
                msg4: msg.substring(59, 79),
                msg5: msg.substring(79, 99),
                msg6: msg.substring(99, 119),
                msg7: msg.substring(119)
            };
            fbRef.ref('msg').push(data);
            proceed();
        }
        else if (validEmail && $('#msg').val().length > 0 && $('#msg').val().length < 161) {
            var data = {
                name: name,
                em: em,
                msg: msg.substring(0, 19),
                msg2: msg.substring(19, 39),
                msg3: msg.substring(39, 59),
                msg4: msg.substring(59, 79),
                msg5: msg.substring(79, 99),
                msg6: msg.substring(99, 119),
                msg7: msg.substring(119, 139),
                msg8: msg.substring(139)
            };
            fbRef.ref('msg').push(data);
            proceed();
        }
        else if (validEmail) {
            document.getElementById("validEmail").innerText = "Please Enter a Message";
        }
    }
};