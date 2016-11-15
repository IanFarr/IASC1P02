var myPrompt = prompt("What is your age?");


var theDate = new Date();
var year = theDate.getFullYear();

window.onload = function() {
	var yearBorn = year - myPrompt;

	document.getElementById("output").innerHTML = yearBorn;
}


