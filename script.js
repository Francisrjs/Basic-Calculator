let firstNumber=0;
let secondNumber=0;
var operation="";
function sum(x,y){
    return x+y;
}
function rest(x,y){
    return x-y;
}
function multiplication(x,y){
    return x*y;
}
function divide(x,y){
    return (x/y).toFixed(2);
}
function operate(op,x,y){
    switch(op){
        case "+":
            return sum(x,y);
        case "-":
            return rest(x,y);
        case "*":
            return multiplication(x,y);
        case "/":
            return divide(x,y);
        default:
            return "OOPS";
    }
}
console.log(sum(1,2),divide(3,2));
//Resultados
document.addEventListener("DOMContentLoaded", function () {
    const numbers = document.querySelectorAll(".Number");
    const display = document.querySelector(".display");

    const functionNumber = function () {
        const result = parseInt(this.innerHTML, 10);
        console.log(result);
    };

    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click', functionNumber, false);
    }
});
