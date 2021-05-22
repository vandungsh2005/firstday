var result = document.getElementById("result");
result.innerHTML ="0";

var finalResult = "";
var readyCalc = "";
var numberButton = document.getElementsByClassName("number")

for (let i = 0; i < numberButton.length; i++) {
    numberButton[i].addEventListener("click", function(){
        getNumber(numberButton[i].innerHTML)
    })
}

function getNumber(num) {
    finalResult = finalResult + num
    result.innerHTML = finalResult
}
var operatorButtons = document.getElementsByClassName("operator")

for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener("click", function(){
        getOperator(operatorButtons[i].innerHTML)
    })
}
function getOperator(op) {
    readyCalc = readyCalc + finalResult + op
    finalResult = ""
}
document.getElementById("equal").addEventListener("click", function() {
    result.innerHTML = eval(readyCalc + finalResult)
})
document.getElementById("reset").addEventListener("click", function() {
    result.innerHTML = "0"
    finalResult = ""
    readyCalc= ""
})