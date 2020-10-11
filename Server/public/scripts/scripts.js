console.log('hello from js');

$(document).ready(onReady);

let firstNum= "";
let secondNum= "";
let operator="";
let freshCalc=true;

console.log("98." * 5);

function onReady() {
    updateDisplay();
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
    $("#clear").on('click',enterFunc);
}

function concat1() {
    if (operator == "" && freshCalc) {
        firstNum += 1;
    }
    else if (operator.length>0) {
        secondNum += 1;
    }
    else if (operator == "" && !freshCalc) {
        freshCalc = true;
        firstNum = "1";
    }
    updateDisplay();
    console.log("firstNum is",firstNum,"secondNum is",secondNum,"& operator is",operator);
}

function concat2() {
    if (operator == "" && freshCalc) {
        firstNum += 2;
    }
    else if (operator.length>0) {
        secondNum += 2;
    }
    else if (operator == "" && !freshCalc) {
        freshCalc = true;
        firstNum = "2";
    }
    updateDisplay();
    console.log("firstNum is",firstNum,"secondNum is",secondNum,"& operator is",operator);
}

function concat3() {
    if (operator == "" && freshCalc) {
        firstNum += 3;
    }
    else if (operator.length>0) {
        secondNum += 3;
    }
    else if (operator == "" && !freshCalc) {
        freshCalc = true;
        firstNum = "3";
    }
    updateDisplay();
    console.log("firstNum is",firstNum,"secondNum is",secondNum,"& operator is",operator);
}

function concat4() {
    if (operator == "" && freshCalc) {
        firstNum += 4;
    }
    else if (operator.length>0) {
        secondNum += 4;
    }
    else if (operator == "" && !freshCalc) {
        freshCalc = true;
        firstNum = "4";
    }
    updateDisplay();
    console.log("firstNum is",firstNum,"secondNum is",secondNum,"& operator is",operator);
}

function concat5() {
    if (operator == "" && freshCalc) {
        firstNum += 5;
    }
    else if (operator.length>0) {
        secondNum += 5;
    }
    else if (operator == "" && !freshCalc) {
        freshCalc = true;
        firstNum = "5";
    }
    updateDisplay();
    console.log("firstNum is",firstNum,"secondNum is",secondNum,"& operator is",operator);
}

function concat6() {
    if (operator == "" && freshCalc) {
        firstNum += 6;
    }
    else if (operator.length>0) {
        secondNum += 6;
    }
    else if (operator == "" && !freshCalc) {
        freshCalc = true;
        firstNum = "6";
    }
    updateDisplay();
    console.log("firstNum is",firstNum,"secondNum is",secondNum,"& operator is",operator);
}

function concat7() {
    if (operator == "" && freshCalc) {
        firstNum += 7;
    }
    else if (operator.length>0) {
        secondNum += 7;
    }
    else if (operator == "" && !freshCalc) {
        freshCalc = true;
        firstNum = "7";
    }
    updateDisplay();
    console.log("firstNum is",firstNum,"secondNum is",secondNum,"& operator is",operator);
}

function concat8() {
    if (operator == "" && freshCalc) {
        firstNum += 8;
    }
    else if (operator.length>0) {
        secondNum += 8;
    }
    else if (operator == "" && !freshCalc) {
        freshCalc = true;
        firstNum = "8";
    }
    updateDisplay();
    console.log("firstNum is",firstNum,"secondNum is",secondNum,"& operator is",operator);
}

function concat9() {
    if (operator == "" && freshCalc) {
        firstNum += 9;
    }
    else if (operator.length>0) {
        secondNum += 9;
    }
    else if (operator == "" && !freshCalc) {
        freshCalc = true;
        firstNum = "9";
    }
    updateDisplay();
    console.log("firstNum is",firstNum,"secondNum is",secondNum,"& operator is",operator);
}

function concat0() {
    if (operator == "" && firstNum.length != 0) {
        firstNum += 0;
    }
    else if (operator.length > 0 && firstNum.length != 0) {
        secondNum += 0;
    }
    updateDisplay();
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
    if ($("#addition").hasClass("selectedOperator") || $("#division").hasClass("selectedOperator") || $("#subtraction").hasClass("selectedOperator")) {
        $("#subtraction").removeClass("selectedOperator");
        $("#addition").removeClass("selectedOperator");
        $("#division").removeClass("selectedOperator");
        
    }

    if (firstNum.length > 0 && secondNum.length == 0) {
        operator = "*";
        $("#multiplication").addClass("selectedOperator");
    }
    if (firstNum.length > 0 && secondNum.length > 0) {
        enterFunc();
        operator = "*";
        $("#multiplication").addClass("selectedOperator");
    }
    console.log("firstNum is",firstNum,"secondNum is",secondNum,"& operator is",operator);
}

function divFunc() {
    if ($("#multiplication").hasClass("selectedOperator") || $("#addition").hasClass("selectedOperator") || $("#subtraction").hasClass("selectedOperator")) {
        $("#multiplication").removeClass("selectedOperator");
        $("#addition").removeClass("selectedOperator");
        $("#subtraction").removeClass("selectedOperator");
    }

    if (firstNum.length > 0 && secondNum.length == 0) {
        operator = "/";
        $("#division").addClass("selectedOperator");
    }
    if (firstNum.length > 0 && secondNum.length > 0) {
        enterFunc();
        operator = "/";
        $("#division").addClass("selectedOperator");
    }
    console.log("firstNum is",firstNum,"secondNum is",secondNum,"& operator is",operator);
}

function addFunc() {
    if ($("#multiplication").hasClass("selectedOperator") || $("#division").hasClass("selectedOperator") || $("#subtraction").hasClass("selectedOperator")) {
        $("#multiplication").removeClass("selectedOperator");
        
        $("#division").removeClass("selectedOperator");
        $("#subtraction").removeClass("selectedOperator");
    }

    if (firstNum.length > 0 && secondNum.length == 0) {
        operator = "+";
        $("#addition").addClass("selectedOperator");
    }
    if (firstNum.length > 0 && secondNum.length > 0) {
        enterFunc();
        operator = "+";
        $("#addition").addClass("selectedOperator");
    }
    console.log("firstNum is",firstNum,"secondNum is",secondNum,"& operator is",operator);
}

function subFunc() {
    if ($("#multiplication").hasClass("selectedOperator") || $("#addition").hasClass("selectedOperator") || $("#division").hasClass("selectedOperator")) {
        $("#multiplication").removeClass("selectedOperator");
        $("#addition").removeClass("selectedOperator");
        $("#division").removeClass("selectedOperator");
        
    }

    if (firstNum.length > 0 && secondNum.length == 0) {
        operator = "-";
        $("#subtraction").addClass("selectedOperator");
    }
    if (firstNum.length > 0 && secondNum.length > 0) {
        enterFunc();
        operator = "-";
        $("#subtraction").addClass("selectedOperator");
    }
    
    console.log("firstNum is",firstNum,"secondNum is",secondNum,"& operator is",operator);
}

function clear() {
    freshCalc=true;
    firstNum = secondNum  = operator = "";
}

function updateDisplay() {

    if (secondNum.length == 0 && firstNum.length == 0) {
        $("#display").text("0");
        }
    if (secondNum.length == 0 && firstNum.length > 0) {
        $("#display").text(firstNum);
    }
    if (secondNum.length > 0) {
        $("#display").text(secondNum);
    }
}

// MOST OF THIS WILL GO TO THE SERVER
function enterFunc() {


    $.ajax({
        method: 'POST',
        url: '/players',
        data: {
            firstName: firstName, 
            lastName: lastName,
            born: born}
    }).then(function(response){
        freshCalc=false;
        getAnswer();
        $(".operator").removeClass("selectedOperator");
    }).catch(function(error){
        //notifying the user of an error in post request
        alert(error);
    })
    
    
    console.log(firstCalc,secondCalc,operator,firstNum,secondNum);

    
    console.log(answer);
    
    
    console.log("firstNum is",firstNum,"secondNum is",secondNum,"& operator is",operator);
    //AJAX send
    //then set firstNum to answer
    // set secondNum & operator to ""
}

function getAnswer() {
    $.ajax({
        type: 'GET',
        url: '/tournaments'
    }).then(function (response) {
        firstNum = response.toString();
        secondNum  = operator = "";
        updateDisplay();
    });
}