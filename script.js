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
  return a / b;
}

let firstNumber = 0;
let operator = "";
let secondNumber = 0;
let result = 0;

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

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    display.value += button.textContent;

    if (button.textContent === "C") {
      display.value = "";
    }

    if (
      button.textContent === "+" ||
      button.textContent === "-" ||
      button.textContent === "*" ||
      button.textContent === "/"
    ) {
      firstNumber = parseInt(display.value.slice(0, -1));
      operator = button.textContent;
    }

    if (button.textContent === "=") {
      secondNumber = parseInt(
        display.value.slice(firstNumber.toString().length + 1, -1)
      );
      display.value = operate();
    }
  });
});

// function press(key) {
//   document.getElementById("display").value += key;
// }

// function clearDisplay() {
//   document.getElementById("display").value = "";
// }
