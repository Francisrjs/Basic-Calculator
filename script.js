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
function generateNumbers(){
var numbersB=document.getElementsByClassName("numbersB")[0];

    for(let i=1;i<=9;i++){
const buttonsN=document.createElement("button");
    numbersB.appendChild(buttonsN);
    buttonsN.classList="ButtonsN";
    buttonsN.id=i;
    buttonsN.value=i;
    buttonsN.innerHTML=i;
    }
//si es 0 y  punto
for(let i=0;i<=2;i++){
    if(i==0){
        const buttonsN=document.createElement("button");
        numbersB.appendChild(buttonsN);
        buttonsN.classList="ButtonsN";
        buttonsN.id=i;
        buttonsN.value=i;
        buttonsN.innerHTML=i;
    }
  if (i==1){
    const buttonsN=document.createElement("button");
    numbersB.appendChild(buttonsN);
    buttonsN.classList="ButtonF";
    buttonsN.id=".";
    buttonsN.value=".";
    buttonsN.innerHTML=".";
  }
  if (i==2){
    const buttonsN=document.createElement("button");
    numbersB.appendChild(buttonsN);
    buttonsN.classList="Button=";
    buttonsN.id="=";
    buttonsN.value="=";
    buttonsN.innerHTML="=";
  }
}


}
generateNumbers()
console.log(sum(1,2),divide(3,2));
