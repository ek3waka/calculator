function add(a, b) {
    return Number(a) + Number(b)
    
}
  
function subtract(a, b) {
    return a - b
}
  
function multiply(a, b) {
    return a * b;
}
  
function divide(a, b) {
    if (b === 0) {
      return "NOP"
    }
    else return a / b
}
  
function operate(a, funcName, b) {
    switch (funcName) {
      case 'add':
        return add(a, b);
      case 'subtract':
        return subtract(a, b);
  
      case 'multiply':
        return multiply(a, b);
  
      case 'divide':
        return divide(a, b);
  
    }
}
  
let operand1, operand2, operatorName
const calcArr = []
  
const screenText = document.querySelector('.screen');
screenText.textContent = '0';
  
const numButtons = document.querySelectorAll('.operand');
  
numButtons.forEach((numButton) => {
    numButton.addEventListener('click',
      () => addToScreen(numButton.id));
})
  
  
  
function addToScreen(id) {
    let numero = screenText.textContent;
    if (numero.indexOf('.') != (-1)) {
      document.getElementById('dot').disabled = true
    }
    if (id === '.') {
      document.getElementById('dot').disabled = true
      if (screenText.textContent === "0") {
        screenText.textContent = `0${id}`
      } else {
        screenText.textContent = `${screenText.textContent}.`
      }
    }
    else if (screenText.textContent === "0") {
      screenText.textContent = `${id}`
    } else if (screenText.textContent.length <= 7) {
      screenText.textContent +=`${id}`
    }
    return operand = Number(screenText.textContent)
}
  
  
const operators = document.querySelectorAll('.operator');
  
operators.forEach((operator) => {
    operator.addEventListener('click',
      () => checkOperator(operator.id))
})
  
function checkOperator(operator) {
    if (calcArr.length < 2) {
      calcArr.push(screenText.textContent, operator)
      screenText.textContent = 0
    } else {
      calcArr.push(screenText.textContent)
      calculateByOperator(calcArr, operator)
    }
    document.getElementById('dot').disabled = false
}
  
  
const calculator = document.querySelector('.equal')
  calculator.addEventListener('click',
    () => calculateByEqual(calcArr))
  
function calculateByOperator(calcArr, operator) {
    result = operate(calcArr[0], calcArr[1], calcArr[2])
    calcArr.length = 0
    screenText.textContent = result
    calcArr.push(result, operator)
    if (screenText.textContent.length > 8) {
      screenText.textContent = screenText.textContent.slice(0, 8);
    }
    if (screenText.textContent.indexOf('.') == -1) {
      document.getElementById('dot').disabled = false
    } else document.getElementById('dot').disabled = true
    numButtons.forEach((numButton) => {
        numButton.addEventListener('click',
          () => {
            screenText.textContent = '0'
            addToScreen(numButton.id)
          })
    })
}
  
function calculateByEqual(calcArr) {
    calcArr.push(screenText.textContent)
    result = operate(calcArr[0], calcArr[1], calcArr[2])
    calcArr.length = 0
    screenText.textContent = result

    if (screenText.textContent.length > 8) {
      screenText.textContent = screenText.textContent.slice(0, 8);
    }
    if (screenText.textContent.indexOf('.') == -1) {
      document.getElementById('dot').disabled = false
    } else document.getElementById('dot').disabled = true
    numButtons.forEach((numButton) => {
        numButton.addEventListener('click',
          () => {
            screenText.textContent = '0'
            addToScreen(numButton.id)
          })
    })
}
  
  
  
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => clear())
  
function clear() {
    screenText.textContent = '0';
    document.getElementById('dot').disabled = false
    calcArr.length = 0
  }
  
const fraction = document.querySelector('.dot')
  fraction.addEventListener('click',
    () => addToScreen('.'))
  
  
const sign = document.querySelector('.plusminus')
sign.addEventListener('click',
    () => signChange())
  
function signChange() {
    screenText.textContent = screenText.textContent * (-1);
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
  
  
  
  
  
  document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if (Number(keyName)) {
      addToScreen(keyName)
    }
  
  })