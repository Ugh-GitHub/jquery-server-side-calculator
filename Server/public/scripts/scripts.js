console.log('hello from js');

$(document).ready(onReady);

let firstNum= "";
let secondNum= "";
let operator="";

function onReady() {
    $("#1").on('click',concat1);
    $("#2").on('click',concat2);
    $("#3").on('click',concat3);
    $("#4").on('click',concat4);
    $("#5").on('click',concat5);
    $("#6").on('click',concat6);
    $("#7").on('click',concat7);
    $("#8").on('click',concat8);
    $("#9").on('click',concat9);
    $("#0").on('click',concat0);
    $("#decimal").on('click',deciFunc);
    $("#multiplication").on('click',multiFunc);
    $("#division").on('click',divFunc);
    $("#subtraction").on('click',subFunc);
    $("#addition").on('click',addFunc);
    $("#submit").on('click',enterFunc);
}

function concat1() {
    if (operator == "") {
        firstNum += 1;
    }
    else {
        secondNum += 1;
    }
    console.log("firstNum is",firstNum,"secondNum is",secondNum,"& operator is",operator);
}

function concat2() {
    if (operator == "") {
        firstNum += 2;
    }
    else {
        secondNum += 2;
    }
    console.log("firstNum is",firstNum,"secondNum is",secondNum,"& operator is",operator);
}

function concat3() {
    if (operator == "") {
        firstNum += 3;
    }
    else {
        secondNum += 3;
    }
    console.log("firstNum is",firstNum,"secondNum is",secondNum,"& operator is",operator);
}

function concat4() {
    if (operator == "") {
        firstNum += 4;
    }
    else {
        secondNum += 4;
    }
    console.log("firstNum is",firstNum,"secondNum is",secondNum,"& operator is",operator);
}

function concat5() {
    if (operator == "") {
        firstNum += 5;
    }
    else {
        secondNum += 5;
    }
    console.log("firstNum is",firstNum,"secondNum is",secondNum,"& operator is",operator);
}

function concat6() {
    if (operator == "") {
        firstNum += 6;
    }
    else {
        secondNum += 6;
    }
    console.log("firstNum is",firstNum,"secondNum is",secondNum,"& operator is",operator);
}

function concat7() {
    if (operator == "") {
        firstNum += 7;
    }
    else {
        secondNum += 7;
    }
    console.log("firstNum is",firstNum,"secondNum is",secondNum,"& operator is",operator);
}

function concat8() {
    if (operator == "") {
        firstNum += 8;
    }
    else {
        secondNum += 8;
    }
    console.log("firstNum is",firstNum,"secondNum is",secondNum,"& operator is",operator);
}

function concat9() {
    if (operator == "") {
        firstNum += 9;
    }
    else {
        secondNum += 9;
    }
    console.log("firstNum is",firstNum,"secondNum is",secondNum,"& operator is",operator);
}

function concat0() {
    if (operator == "" && firstNum.length != 0) {
        firstNum += 0;
    }
    else if (operator.length > 0 && firstNum.length != 0) {
        secondNum += 0;
    }
    console.log("firstNum is",firstNum,"secondNum is",secondNum,"& operator is",operator);
}

function deciFunc() {
    if (operator == "" && firstNum.indexOf(".") == -1) {
        firstNum += ".";
    }
    else if (operator.length > 0 && secondNum.indexOf(".") == -1) {
        secondNum += ".";
    }
    console.log("firstNum is",firstNum,"secondNum is",secondNum,"& operator is",operator);
}

function multiFunc() {
    if (firstNum.length > 0 && secondNum.length == 0 && operator == "") {
        operator = "*";
    }
    if (firstNum.length > 0 && secondNum.length > 0) {
        enterFunc();
        operator = "*";
    }
    console.log("firstNum is",firstNum,"secondNum is",secondNum,"& operator is",operator);
}

function divFunc() {
    if (firstNum.length > 0 && secondNum.length == 0 && operator == "") {
        operator = "/";
    }
    if (firstNum.length > 0 && secondNum.length > 0) {
        enterFunc();
        operator = "/";
    }
    console.log("firstNum is",firstNum,"secondNum is",secondNum,"& operator is",operator);
}

function addFunc() {
    if (firstNum.length > 0 && secondNum.length == 0 && operator == "") {
        operator = "+";
    }
    if (firstNum.length > 0 && secondNum.length > 0) {
        enterFunc();
        operator = "+";
    }
    console.log("firstNum is",firstNum,"secondNum is",secondNum,"& operator is",operator);
}

function subFunc() {
    if (firstNum.length > 0 && secondNum.length == 0 && operator == "") {
        operator = "-";
    }
    if (firstNum.length > 0 && secondNum.length > 0) {
        enterFunc();
        operator = "-";
    }
    console.log("firstNum is",firstNum,"secondNum is",secondNum,"& operator is",operator);
}

function enterFunc() {

}