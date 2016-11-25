/*jslint browser:true */
var string1 = document.getElementById("value1").value;
var string2 = document.getElementById("value2").value;

var value1 = "error";
var value2 = "error";


function makeNumber() {
    "use strict";
    string1 = document.getElementById("value1").value;
    string2 = document.getElementById("value2").value;

    if (string1 === "Zero" || string1 === "zero") {
        value1 = 0;
    } else if (string1 === "One" || string1 === "one") {
        value1 = 1;
    } else if (string1 === "Two" || string1 === "two") {
        value1 = 2;
    } else if (string1 === "Three" || string1 === "three") {
        value1 = 3;
    } else if (string1 === "Four" || string1 === "four") {
        value1 = 4;
    } else if (string1 === "Five" || string1 === "five") {
        value1 = 5;
    } else if (string1 === "Six" || string1 === "six") {
        value1 = 6;
    } else if (string1 === "Seven" || string1 === "seven") {
        value1 = 7;
    } else if (string1 === "Eight" || string1 === "eight") {
        value1 = 8;
    } else if (string1 === "Nine" || string1 === "nine") {
        value1 = 9;
    } else {
        value1 = "error";
    }




    if (string2 === "Zero" || string2 === "zero") {
        value2 = 0;
    } else if (string2 === "One" || string2 === "one") {
        value2 = 1;
    } else if (string2 === "Two" || string2 === "two") {
        value2 = 2;
    } else if (string2 === "Three" || string2 === "three") {
        value2 = 3;
    } else if (string2 === "Four" || string2 === "four") {
        value2 = 4;
    } else if (string2 === "Five" || string2 === "five") {
        value2 = 5;
    } else if (string2 === "Six" || string2 === "six") {
        value2 = 6;
    } else if (string2 === "Seven" || string2 === "seven") {
        value2 = 7;
    } else if (string2 === "Eight" || string2 === "eight") {
        value2 = 8;
    } else if (string2 === "Nine" || string2 === "nine") {
        value2 = 9;
    } else {
        value2 = "error";
    }

}



function add() {
    "use strict";
    string1 = document.getElementById("value1").value;
    string2 = document.getElementById("value2").value;

    if (value1 === "error" || value2 === "error") {
        document.getElementById("output").innerHTML = ("Sorry, something went wrong. I only handle single digits written as strings.");
    } else {
        document.getElementById("output").innerHTML = ("<b>Output: </b>" + string1 + " plus " + string2 + " equals " + (value1 + value2));
    }
}


function subtract() {
    "use strict";
    string1 = document.getElementById("value1").value;
    string2 = document.getElementById("value2").value;

    if (value1 === "error" || value2 === "error") {
        document.getElementById("output").innerHTML = ("Sorry, something went wrong. I only handle single digits written as strings.");
    } else {
        document.getElementById("output").innerHTML = ("<b>Output: </b>" + string1 + " subtract " + string2 + " equals " + (value1 - value2));
    }
}


function multiply() {
    "use strict";
    string1 = document.getElementById("value1").value;
    string2 = document.getElementById("value2").value;

    if (value1 === "error" || value2 === "error") {
        document.getElementById("output").innerHTML = ("Sorry, something went wrong. I only handle single digits written as strings.");
    } else {
        document.getElementById("output").innerHTML = ("<b>Output: </b>" + string1 + " multiplied by " + string2 + " equals " + (value1 * value2));
    }
}


function divide() {
    "use strict";
    string1 = document.getElementById("value1").value;
    string2 = document.getElementById("value2").value;

    if (value1 === "error" || value2 === "error") {
        document.getElementById("output").innerHTML = ("Sorry, something went wrong. I only handle single digits written as strings.");
    } else if (value2 === 0) {
        document.getElementById("output").innerHTML = ("You can't divide by zero, idiot.");
    } else {
        document.getElementById("output").innerHTML = ("<b>Output: </b>" + string1 + " divided by " + string2 + " equals " + (value1 / value2));
    }
}