var myArray = [];

function printTo() {
	var n1 = document.getElementById("n1").value;
	
	for (i=0;i<n1;i++) {
		myArray.push(i);
		document.getElementById("p1").innerHTML += (i + "<br>")
	}
}