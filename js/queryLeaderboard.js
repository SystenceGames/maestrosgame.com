var NUM_DECIMAL_PLACES = 2;
var LEADERBOARD_URL = "http://playerstats.beta.maestrosgame.com:10500/v1/getLeaderboard";
// var LEADERBOARD_URL = "http://127.0.01:10500/v1/getLeaderboard";

function addLeaderboardTableRows(leaderboardTable, leaderboardList) {
	for(var i = 0; i < leaderboardList.length; i++) {
    	var row = leaderboardTable.insertRow(i + 1);
        row.insertCell(0).innerHTML = leaderboardList[i].rank;
        row.insertCell(1).innerHTML = leaderboardList[i].playerName;
        row.insertCell(2).innerHTML = leaderboardList[i].value;
    }
}

setTimeout(function() {
	var loadingText = document.getElementById("LoadingText");

	xhr = new XMLHttpRequest();
	xhr.open("POST", LEADERBOARD_URL, true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	xhr.ontimeout = function () { 
    	loadingText.style.color = "red";
    	loadingText.innerHTML = "Server timed out.\nPlease try again in a few minutes.";
    }

	xhr.onreadystatechange = function () {
	    if (xhr.readyState == 4 && xhr.status == 200) {
	        var json = JSON.parse(xhr.responseText);
	        if (json == null || json.error) {
	        	loadingText.style.color = "red";
	        	loadingText.innerHTML = "Couldn't reach server.\nPlease try again in a few minutes.";
	        	console.error(JSON.stringify(json.error))
	        } else if(json.multiplayerWinPercent == null || json.multiplayerKD == null || json.multiplayerXp == null) {
	        	loadingText.style.color = "red";
	        	loadingText.innerHTML = "There was an error loading leaderboards.";
	        	console.error(JSON.stringify(json))
	        } else {
	        	loadingText.style.visibility = "hidden";
	        	for(var i = 0; i < json.multiplayerWinPercent.length; i++) {
	        		percent = json.multiplayerWinPercent[i].value * 100;
	            	json.multiplayerWinPercent[i].value = percent.toFixed(NUM_DECIMAL_PLACES) + "%";
	        	}

	        	for(var i = 0; i < json.multiplayerKD.length; i++) {
	            	json.multiplayerKD[i].value = json.multiplayerKD[i].value.toFixed(NUM_DECIMAL_PLACES);
	        	}

	            addLeaderboardTableRows(document.getElementById("WinrateTable"), json.multiplayerWinPercent);
	            addLeaderboardTableRows(document.getElementById("KdRatioTable"), json.multiplayerKD);
	            addLeaderboardTableRows(document.getElementById("MultiplayerXpTable"), json.multiplayerXp);

            	document.getElementById("leaderboards").style.visibility = "visible";
	        }
	    } else {
	    	loadingText.style.color = "red";
    		loadingText.innerHTML = "Server timed out.\nPlease try again in a few minutes.";
	    }
	}
	xhr.send();
}, 1000);
