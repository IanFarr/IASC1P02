function addNumbers() {
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;

	var num1 = Number(num1);
	var num2 = Number(num2);

	var total = num1 + num2;

	document.getElementById("output").innerHTML = total;
}