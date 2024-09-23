const numberButtons = document.querySelectorAll('.number');

const operationButtons = document.querySelectorAll('.operation');

const equalButton = document.querySelector('.equal');

const resultOutput = document.querySelector('.result');

const reset = document.querySelector('.reset');

let currentOperation;

let result = 0;

resultOutput.innerText = result;

function readInput(event) {
  const value = event.target.innerText;
  if(currentOperation){
    resultOutput.innerText = value;
    setOperation('');
  } else {
    resultOutput.innerText = resultOutput.innerText !== '0' ? resultOutput.innerText + value : value;
  }
}

numberButtons.forEach((button) => {
  button.addEventListener('click', readInput);
});

function setOperation(operation) {
  operationButtons.forEach((el) => {
    el.classList.remove('active');
    if(el.innerText === operation) {
      el.classList.add('active');
    }
  })
}

operationButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    if(!currentOperation && !result) {
      result = +resultOutput.innerText;
    }
    currentOperation = event.target.innerText;
    operationButtons.forEach((el) => {
      el.classList.remove('active');
    })
    button.classList.add('active');
  });
});

equalButton.addEventListener('click', () => {
  const currentNumber = resultOutput.innerText;
  result = simpleCalculator(+currentNumber);
  resultOutput.innerText = result;
});

reset.addEventListener('click', () => {
  resultOutput.innerText = '0';
  result = 0;
  currentOperation = '';
  setOperation('');
});

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero!";
  }
  return a / b;
}

function simpleCalculator(num2) {
  const num1 = result;

  let res;

  switch (currentOperation) {
    case '+':
      res = add(num1, num2);
      break;
    case '-':
      res = subtract(num1, num2);
      break;
    case '*':
      res = multiply(num1, num2);
      break;
    case '/':
      res = divide(num1, num2);
      break;
    default:
      res = num2;
      break;
  }
  return res;
}
