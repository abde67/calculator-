let firstNum=null;
let secondNum=null;
let result=null;
firstOprator=null;
secondOprator=null;

function displayValueLength(){
   display.innerHTML=displayValue;
   if (displayValue.length>9) {
      displayValue= displayValue.substring(0,9)
   }
}
const display=document.querySelector('#display');

let displayValue='0';
display.innerHTML=displayValue;

function doMath(x,y,z){
  if (z==='-') {
   return x-y;
  }
  else if (z==='+') {
   return x+y;
  }
  else if (z==='/') {
   if (y===0) {
      return "undefind!"
   }
  return x/y;
  }
  else if (z==='*') {
  return x*y;
  }
}


 

const operands=document.querySelectorAll('.operand');

for (let i = 0; i < operands.length; i++) {
   operands[i].addEventListener('click' ,function(){
      getOperand(operands[i].textContent)
    displayValueLength();
   
})
    
}

function getOperand(operand){
   if (firstNum===null ) {
         if (displayValue==='0'||displayValue===0) {
            displayValue=operand;
         }
      else if (displayValue===firstNum) {
         displayValue=operand;
      }
      else {
         displayValue+=operand;
      }
  }
  else{
   if (displayValue===firstNum) {
      secondNum=operand;
      displayValue=operand;
   }
   else{
      displayValue+=operand;
   }
  }

}

function getOperator(operator){
 
    if (firstOprator!=null&&secondOprator===null) {
      secondOprator=operator;
      secondNum=displayValue;
      result=doMath(Number( firstNum), Number(secondNum) ,firstOprator);
      displayValue=result;
      firstNum=displayValue;
      result=null;
   }
   else if (firstOprator!=null&&secondOprator!=null) {
      secondNum=displayValue;
      result=doMath(Number( firstNum), Number(secondNum) ,secondOprator);
      secondOprator=operator;
      displayValue=result;
      firstNum=displayValue;
      result=null;
   }
     if (firstNum===null&&secondNum===null) {
      firstOprator=operator;
      firstNum=displayValue;
   }
}


const operator=document.querySelectorAll('.operator');
for (let i = 0; i < operator.length; i++) {
  
   operator[i].addEventListener('click' ,function(){
   
   getOperator(operator[i].innerHTML);
    
    
})

}

function inputEquals() {
    //hitting equals doesn't display undefined before operate()
    if(firstOprator === null) {
        displayValue = displayValue;
    } else if(secondOprator != null) {
        //handles final result
        secondNum = displayValue;
        result = doMath(Number(firstNum), Number(secondNum), secondOprator);
        if(result ==="undefind!" ) {
            displayValue = "undefind!";
        } else {
            displayValue = result;
            firstNum = displayValue;
            secondNum = null;
            firstOprator = null;
            secondOprator = null;
            result = null;
        }
    } else {
        //handles first operation
        secondNum = displayValue;
        result = doMath(Number(firstNum), Number(secondNum), firstOprator);
        if(result === "undefind!") {
            displayValue ="undefind!";
        } else {
            displayValue = result;
            firstNum = displayValue;
            secondNum = null;
            firstOprator = null;
            secondOprator = null;
            result = null;
        }
    }
}

const equals=document.querySelector('.equals');
equals.addEventListener('click',function(){
   inputEquals();
})

