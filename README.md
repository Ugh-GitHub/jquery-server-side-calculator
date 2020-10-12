# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Developed a (mostly) functional 10 key calculator doing calculations on the server side. Solved problems included number string packaging and calculation, button functionality management, and server to front end interactions.

Number string packaging and calculation problems were solved by using global string variables, concatenation, and the Number() function. Button functionality management was resolved by using cascading if/if else clauses, and shared functions (such as the enterFunc() and updateDisplay(). Lastly, server to front end interactions challenges were resolved using Ajax post and get functionality.

## Prerequisites

- Node.js
- Express
- Body-Parser

## Installation

1.  Download the repo and files.
2.  Navigate to the directory in terminal.
3.  In the terminal, type 'npm init --yes' and hit enter
4.  In the terminal, type 'npm install body-parser' and hit enter
5.  In the terminal, type 'npm install express' and hit enter
6. In the terminal, type 'npm start' and hit enter

## Usage

- Someone looking to do basic arithmetic calculations (addition, subtraction, multiplication, and division)

## Built with

Not sure what goes here tbh.

## Acknowledgement

Thanks to the folx at Prime for teaching.

## Support

Message me via GitHub.

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).

<!-- 
Things I want in my code
index.html
have 10 buttons for the numbers (0-9)
have the basic mathematical operations (+, -, /, *, % , maybe exponentiation???)
C button to clear
= button to submit
Clear history button

scripts.js
send over an object array with two numbers and the mathematical operator and  **STRETCH** the order of operation, with additional objects containing the order of operation, the next number, and the next operator.
DELETE call 

server.js
function that determines what operation is done by the operator in the first object
** Stretch ** loops through the array, calling the math functions as they're needed to 


**Storing previous calculations
    Store an object that is the two numbers, the mathematical operation, and the answer in an array. Append to the DOM from the scripts.js

Learn more about heroku
 -->