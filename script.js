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
  return (x / y).toFixed(1);
}
function operate(op, x, y) {
  switch (op) {
    case '+':
      return sum(x, y);
    case '-':
      return rest(x, y);
    case '*':
      return multiplication(x, y);
    case '/':
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
      let num = 0;
      if (display.innerHTML == "*" || display.innerHTML == "-" || display.innerHTML == "/" || display.innerHTML == "+") {
        num = 0;
        console.log("true, cambia el operador");
      
      } else {
        num = parseInt(x.innerHTML, 10);
      }
      
      if (usingOperator == false) {
        // Si no se está usando un operador, se trata del primer número
        if (display.innerHTML== "0" || display.innerHTML=="-0"){
          display.innerHTML = num;
        }else {
          display.innerHTML += num; // Concatenar al final de la cadena
        }
        
        firstNumber = parseInt(display.innerHTML); // Actualizar el primer número
        console.log("first!");
      } else {
        // Si se está usando un operador, se trata del segundo número
        secondNumber = parseInt(x.innerHTML, 10); // Establecer el segundo número
        display.innerHTML = secondNumber; // Actualizar el display con el segundo número
        console.log("second! ", secondNumber);
      }
      break;
    }
    case "sign": {
      if (x.innerHTML === "-") {
        display.innerHTML = "-";
      } else {
        display.innerHTML = x.innerHTML;
      }
      break;
    }
    case "operation": {
      if (usingOperator == false) {
        usingOperator = true;
        operation = x.innerHTML;
        console.log(operation);
      } else {
        console.log(usingOperator);
      }
      display.innerHTML = operation;
      break;
    }
    default: {
      console.log("error");
      break;
    }
  }
};
const equals = function () {
  if (usingOperator == true) {
    result = operate(operation, firstNumber, secondNumber); // Calcula el resultado usando la función operate
    display.innerHTML = result; // Actualiza la pantalla con el resultado
    firstNumber = result; // Actualiza el primer número con el resultado para futuras operaciones
    secondNumber = 0; // Reinicia secondNumber después de usarlo
    usingOperator = false;
    console.log("RESULTADO ",result)
  }
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
