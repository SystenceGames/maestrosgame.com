var email = document.getElementById('email'),
	password = document.getElementById('password'),
	confirm_password = document.getElementById('confirm_password');

function validateMatchingPasswords() {
	if(password.value != confirm_password.value) {
		confirm_password.setCustomValidity('New Password Fields Must Match');
	} else {
		confirm_password.setCustomValidity('');
	}
}

password.onchange = validateMatchingPasswords;
confirm_password.onkeyup = validateMatchingPasswords;

function getQueryParams(qs) {
	qs = qs.split('+').join(' ');
	var params = {},
		tokens,
		re = /[?&]?([^=]+)=([^&]*)/g;
	while(tokens = re.exec(qs)) {
		params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
	}
	return params;
}

var query = window.location.search.substring(1);
var queryParams = getQueryParams(query);

email.setAttribute('value', queryParams.email);

function formSubmit() {
	document.getElementById('submit').disabled = true;
	document.getElementById('form-result').innerHTML = "<img src='../images/loading-gear.gif' alt='loading...'>";

	setTimeout(function() {
		var newPassword = document.getElementById('password').value;
		var formResult = document.getElementById('form-result');
		xhr = new XMLHttpRequest();
		var url = queryParams.callbackUrl;
		xhr.open("POST", url, true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		//xhr.setRequestHeader("Origin", "http://maestrosgame.com");
		xhr.onreadystatechange = function () { 
		    if (xhr.readyState == 4 && xhr.status == 200) {
		        var json = JSON.parse(xhr.responseText);
		        if (json.error) {
		            formResult.style.color = "red";
					formResult.innerHTML = "Server timed out.\nPlease try again in a few minutes.";
			        document.getElementById('submit').disabled = false;
			        console.error(json.error);
		        } else {
		            document.getElementById('form-result').innerHTML = "Password Changed Successfully";
		        }
		    } else {
		    	formResult.style.color = "red";
    			formResult.innerHTML = "Server timed out.\nPlease try again in a few minutes.";
		        document.getElementById('submit').disabled = false;
		    }
		}
		var data = "email="+queryParams.email+"&passwordResetToken="+queryParams.passwordResetToken+"&newPassword="+newPassword+"&callbackUrl=" + queryParams.callbackUrl;
		xhr.send(data);
	}, 1000);
}