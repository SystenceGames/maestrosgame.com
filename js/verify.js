function getQueryParams(qs) {
    qs = qs.split('+').join(' ');

    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }

    return params;
}

var query = window.location.search.substring(1);
var queryParams = getQueryParams(query);

// Sending and receiving data in JSON format using POST mothod
//
xhr = new XMLHttpRequest();

var url = queryParams.callbackUrl;
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//xhr.setRequestHeader("Origin", "http://maestrosgame.com");
xhr.onreadystatechange = function () { 
    if (xhr.readyState == 4 && xhr.status == 200) {
        var json = JSON.parse(xhr.responseText);
        if (json.error) {
            document.getElementById('verifyHeader').innerHTML = "Uh oh...";
            document.getElementById('verifyBody1').innerHTML = "Something went wrong:";
            document.getElementById('verifyBody2').innerHTML = json.error;
            document.getElementById('verifyBody3').innerHTML = "Please try verifying your account again.";
            document.getElementById('doughboyImage').src = "http://i.imgur.com/U9wV8tY.png";
        } else {
            document.getElementById('verifyHeader').innerHTML = "Thank you!";
            document.getElementById('verifyBody1').innerHTML = "Your email has been successfully verified.";
            document.getElementById('doughboyImage').src = "http://i.imgur.com/8jkomj7.png"
        }
    }
}
var data = "email="+queryParams.email+"&verificationToken="+queryParams.verificationToken;
xhr.send(data);