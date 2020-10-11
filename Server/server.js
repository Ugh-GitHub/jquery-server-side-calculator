console.log("hello from node");

function runCalc(calcObj) {
    let firstCalc = Number(calcObj.firstNum)
    let secondCalc = Number(calcObj.secondNum);
    let operator = calcObj.operator;
    if (operator == "*") {
        answer = firstCalc*secondCalc;
    }
    if (operator == "/") {
        answer = firstCalc/secondCalc;
    }
    if (operator == "-") {
        answer = firstCalc-secondCalc;
    }
    if (operator == "+") {
        answer = firstCalc+secondCalc;
    }
    // function to add to the calculations array
    return answer;
}