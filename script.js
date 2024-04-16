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
  return b === 0 ? "Not possible" : a / b;
}

let firstNumber = 0;
let operator = "";
let secondNumber = 0;
let result = 0;
let usedAdd = 0;

function operate() {
  switch (operator) {
    case "+":
      result = add(firstNumber, secondNumber);
      break;
    case "-":
      result = subtract(firstNumber, secondNumber);
      break;
    case "*":
      result = multiply(firstNumber, secondNumber);
      break;
    case "/":
      result = divide(firstNumber, secondNumber);
      break;
    default:
      result = "Invalid operation";
  }
  return result;
}

const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
let displayNumber = 0;
let total = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    display.value += button.textContent;

    switch (button.textContent) {
      case "C":
        display.value = "";
        firstNumber = 0;
        operator = "";
        secondNumber = 0;
        displayNumber = 0;
        usedAdd = 0;
        break;

      case "+":
      case "-":
      case "*":
      case "/":
        operator = button.textContent;
        if (usedAdd === 0) {
          firstNumber = parseInt(displayNumber);
          displayNumber = 0;
          usedAdd = 1;
        } else {
          secondNumber = parseInt(displayNumber);
          displayNumber = 0;
          total = operate();
          firstNumber = total;
          display.value = firstNumber + operator;
        }
        break;

      case "=":
        if (operator === "") {
          display.value = parseInt(displayNumber);
        } else {
          secondNumber = parseInt(displayNumber);
          total = operate();
          display.value = total;
          firstNumber = 0;
          secondNumber = 0;
          operator = "";
          displayNumber = total;
          usedAdd = 0;
        }

        break;

      default:
        displayNumber += button.textContent;
        break;
    }
  });
});
