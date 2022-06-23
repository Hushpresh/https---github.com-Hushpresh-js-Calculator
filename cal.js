// Calculator without frontend

const num1 = parseFloat(prompt("enter your first number"));
const num2 = parseFloat(prompt("enter your second number"));
const operator = prompt("enter operator (+, -, *, /) ");
let result = 0;
if(isNaN(num1) || isNaN(num2)){
    alert('Check your input and refresh the page');
}else{   
    if(operator == '+'){
        result = num1 + num2;
    }else if(operator == '-'){
        result = num1 - num2;
    }else if(operator == '*'){
        result = num1 * num2;
    }else if(operator == '/'){
        result = num1 / num2;
    }
    document.write(num1 + operator + num2 +' =' + result)
}


