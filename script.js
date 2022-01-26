function add(a,b) {
    return a+b
}

function subtract (a,b) {
    return a-b
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    if (b===0) {
        return "NOP"
    }
    else return a/b
}

function operate(funcName, a, b) {
    switch (funcName) {
        case 'add': 
            return add(a,b);
        case 'subtract':
            return subtract(a,b);
            
        case 'multiply':
            return multiply(a,b);
            
        case 'divide':
            return divide(a,b);
            
    }
    }
 
let operand1, operand2, operatorName;
const screenText = document.querySelector('.screen');
screenText.textContent = '0';

const numButtons = document.querySelectorAll('.operand');

numButtons.forEach((numButton) => {
    numButton.addEventListener('click', 
    () => addToScreen(numButton.id));
})

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => clear())

function clear() {
    screenText.textContent='0';
    document.getElementById('dot').disabled = false
}

function addToScreen(id) {
    let numero = screenText.textContent;
    if  (numero.indexOf('.')!=(-1)) {
            document.getElementById('dot').disabled = true;
        }
    
    if (id === '.') {
        document.getElementById('dot').disabled = true    
        if (screenText.textContent == '0') {
            screenText.textContent = `0${id}`
        } else {
            screenText.textContent += `${id}`
        }
    }
       else if (screenText.textContent == '0') {
            screenText.textContent = `${id}` }
          

        else if (screenText.textContent.length <= 7) {
            screenText.textContent += `${id}`
            }

    return operand = Number(screenText.textContent)
    
}


const operators = document.querySelectorAll('.operator');

operators.forEach((operator) => {
    operator.addEventListener('click',
    () =>  operateFirst(operator.id))
})

function operateFirst(id) {
    operand1 = Number(screenText.textContent);
    operatorName = id;
    screenText.textContent='';
    document.getElementById('dot').disabled = false;
    console.log(operand1, operatorName);
    return operand1, operatorName
} 

 const calculator = document.querySelector('.equal')
 calculator.addEventListener('click',
 () =>  calculate())

 function calculate() {
    operand2 = Number(screenText.textContent);
    console.log(operatorName, operand1, operand2);
    let result = operate(operatorName, operand1, operand2);
    
    screenText.textContent = result;
    operand1 = result;
    console.log(operand1)
    if (screenText.textContent.length > 8) {
        screenText.textContent =  screenText.textContent.slice(0, 8);
    }
    if (screenText.textContent.indexOf('.') == -1) {
        document.getElementById('dot').disabled = false
    }
    else document.getElementById('dot').disabled = true;
    //document.getElementById('dot').disabled = false;
    }

 const fraction = document.querySelector('.dot')
 fraction.addEventListener('click',
            () =>  addToScreen('.'))




const sign = document.querySelector('.plusminus')
sign.addEventListener('click',
() =>  signChange())

function signChange() {
    screenText.textContent=screenText.textContent * (-1);
    }

const backspace = document.querySelector('.backspace')
backspace.addEventListener('click',
    () => deleteNumber())

function deleteNumber() {
    if (screenText.textContent.length > 1) {
        screenText.textContent = screenText.textContent.slice(0, -1);
    }
    else screenText.textContent = 0
}





document.addEventListener ('keydown', (event) => {
    const keyName = event.key;
    if (Number(keyName)) {
        addToScreen(keyName)
    }
    
    })