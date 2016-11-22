var nouns = [];
var adjectives = [];

nouns = ["monkey", "dog", "cat", "elephant", "pig"]
adjectives = ["big", "small", "short", "tall", "fat"]

function whatA() {
	var n1 = (Math.round(Math.random()*4))
	var n2 = (Math.round(Math.random()*4))
	document.getElementById("p1").innerHTML = ("What a " + adjectives[n1] + " " + nouns[n2] + "!")
}