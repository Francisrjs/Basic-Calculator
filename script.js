//Operations
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
  return parseFloat((x / y).toFixed(1 ));
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
const display = document.querySelector(".display");
let result = 0;
let firstNumber = 0;
let secondNumber = 0;
var usingOperator = false;
var operation = "";
//Funcion by type
const functionCalc = function (type, x) {
  switch (type) {
    case "number": {
      let num = 0;
      //Detect operation
      if (display.innerHTML == "*" || display.innerHTML == "-" || display.innerHTML == "/" || display.innerHTML == "+") {
        num = 0;
        display.innerHTML="";
      } else {
        //to Number
        num = parseInt(x.innerHTML, 10);
      }
      
      if (usingOperator == false) {
      
        if (display.innerHTML== "0" || display.innerHTML=="-0"){
          display.innerHTML = num;
        }else {
          display.innerHTML += num; 
        }
        
        firstNumber = parseInt(display.innerHTML); 
        console.log("first number!");
      } else {
        
        secondNumber = parseInt(x.innerHTML, 10); 
        display.innerHTML += secondNumber; 
        console.log("second number! ", secondNumber);
      }
      break;
    }
    case "sign": {
      // Verificar si el display está definido
      if (display) {
        if (display.innerHTML.startsWith("-")) {
          display.innerHTML = display.innerHTML.substring(1); // Elimina el signo negativo
        } else {
          display.innerHTML = "-" + display.innerHTML; // Agrega un signo negativo
        }
      }
      firstNumber=parseInt(display.innerHTML,10);
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
const clear= function(){
  result=0;
  display.innerHTML=0;
  firstNumber=0;
  secondNumber=0;
}
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
  const clearB= document.querySelector(".clear");
  clearB.addEventListener('click',function(){
    clear();
  });
  const ChangeSign= document.querySelector(".changeSign");
  ChangeSign.addEventListener('click',function(){
    functionCalc("sign",this.ChangeSign);
  });
});
