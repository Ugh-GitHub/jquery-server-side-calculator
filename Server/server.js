console.log("hello from node");

const express = require('express');
const bodyParser = require('body-parser');
let answer = "";

const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

const calcObjArray = [];
const solutionArray = [];


app.post('/calculate', (req, res) => {
    calcObjArray.push(req.body);
    solutionArray.push(runCalc(req.body));
    console.log(solutionArray);
    res.sendStatus(200);
});

app.get('/calculate', (req, res) => {
    res.send(solutionArray[solutionArray.length-1]);
});



app.get('/PastCalc', (req, res) => {
    res.send({
        solution: solutionArray[solutionArray.length-1],
        calculation: calcObjArray[calcObjArray.length-1]
    });
});

function runCalc(calcObj) {
    let firstCalc = Number(calcObj.firstNum)
    let secondCalc = Number(calcObj.secondNum);
    let operator = calcObj.operator;
    console.log("firstCalc =",firstCalc,"secondCalc = ",secondCalc," operator is",operator);
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
    console.log(answer);
    // function to add to the calculations array
    return answer.toString();
}




app.listen(PORT, () => {
    console.log('listening on port', PORT)
});