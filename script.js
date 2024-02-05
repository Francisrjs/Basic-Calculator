function sum(x, y) {
  return x + y;
}
function rest(x, y) {
  return x - y;
}
function multiplication(x, y) {
  return x * y;
}
function divide(x, y) {
  return (x / y).toFixed(2);
}
function operate(op, x, y) {
  switch (op) {
    case "+":
      return sum(x, y);
    case "-":
      return rest(x, y);
    case "*":
      return multiplication(x, y);
    case "/":
      return divide(x, y);
    default:
      return "OOPS";
  }
}
console.log(sum(1, 2), divide(3, 2));
//Resultados
const display = document.querySelector(".display");
let result = 0;
let firstNumber = 0;
let secondNumber = 0;
var usingOperator = false;
var operation = "";
const functionCalc = function (type, x) {
  switch (type) {
    case "number": {
      const num = parseInt(x.innerHTML, 10);
      console.log(num);
      if (firstNumber == 0 && usingOperator == false) {
        firstNumber = num;
        console.log("first!");
      } else {
        secondNumber = num;
        console.log("second!");
      }
      result = +num;
      display.innerHTML = num;
      break;
    }
    case "sign": {
      display.innerHTML = x.innerHTML;
      break;
    }
    case "operation": {
      firstNumber = 0;
      if (usingOperator == false) {
        usingOperator = true;
        //aca habilitamos el operador
      } else {
        console.log(usingOperator);
      }
      operation = x.innerHTML;
      break;
    }
    default: {
      console.log("error");
      break;
    }
  }
};
const equals = function () {
  console.log("funcionando");
  if (usingOperator == true) {
    operate(operation, firstNumber, secondNumber);
  }
  display.innerHTML = result;
  firstNumber = result;
  console.log(result);
  secondNumber = 0; // Reinicia secondNumber después de usarlo
};
document.addEventListener("DOMContentLoaded", function () {
  const numbers = document.querySelectorAll(".Number");

  //Funcion num
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function () {
      functionCalc("number", numbers[i]);
    });
  }

  //Funcion operators
  const operators = document.querySelectorAll(".operator");
  for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function () {
      functionCalc("operation", operators[i]);
    });
  }
  const equal = document.querySelector(".equal");
  equal.addEventListener("click", function () {
    equals();
  });
});
