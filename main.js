function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

var firstNumber = "";
var secondNumber = "";
var operator;
var displayValue = "";

function operate() {
  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);

  if (operator == "+") {
    return add(firstNumber, secondNumber);
  } else if (operator == "-") {
    return substract(firstNumber, secondNumber);
  } else if (operator == "*") {
    return multiply(firstNumber, secondNumber);
  } else if (operator == "/") {
    return divide(firstNumber, secondNumber);
  }
}
//nach dem storen in display Value den display Value zerlegen und in operate function einsetzen
function addToDisplay(digit) {
  displayValue = displayValue += digit;
}

//adding eventlisteners to the buttons

btn1.addEventListener("click", function () {
  addToDisplay("1");
  if (operator === undefined) {
    firstNumber += "1";
  } else {
    secondNumber += "1";
  }
});

btn2.addEventListener("click", function () {
  addToDisplay("2");
  if (operator === undefined) {
    firstNumber += "2";
  } else {
    secondNumber += "2";
  }
});

btn3.addEventListener("click", function () {
  addToDisplay("3");
  if (operator === undefined) {
    firstNumber += "3";
  } else {
    secondNumber += "3";
  }
});

btn4.addEventListener("click", function () {
  addToDisplay("4");
  if (operator === undefined) {
    firstNumber += "4";
  } else {
    secondNumber += "4";
  }
});

btn5.addEventListener("click", function () {
  addToDisplay("5");
  if (operator === undefined) {
    firstNumber += "5";
  } else {
    secondNumber += "5";
  }
});
btn6.addEventListener("click", function () {
  addToDisplay("6");
  if (operator === undefined) {
    firstNumber += "6";
  } else {
    secondNumber += "6";
  }
});
btn7.addEventListener("click", function () {
  addToDisplay("7");
  if (operator === undefined) {
    firstNumber += "7";
  } else {
    secondNumber += "7";
  }
});
btn8.addEventListener("click", function () {
  addToDisplay("8");
  if (operator === undefined) {
    firstNumber += "8";
  } else {
    secondNumber += "8";
  }
});
btn9.addEventListener("click", function () {
  addToDisplay("9");
  if (operator === undefined) {
    firstNumber += "9";
  } else {
    secondNumber += "9";
  }
});

btnAdd.addEventListener("click", function () {
  // anonyme Funktion
  addToDisplay("+");
  operator = "+";
});

btnSubstract.addEventListener("click", function () {
  // anonyme Funktion
  addToDisplay("-");
  operator = "-";
});
btnMultiply.addEventListener("click", function () {
  // anonyme Funktion
  addToDisplay("*");
  operator = "*";
});

btnDivide.addEventListener("click", function () {
  // anonyme Funktion
  addToDisplay("/");
  operator = "/";
});

btnEquals.addEventListener("click", function () {
  // anonyme Funktion
  displayValue = operate();
});

//adding eventlistener to all buttons that updats the display
const btns = document.querySelectorAll("button[id^=btn]");

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    // anonyme Funktion
    display.innerHTML = displayValue;
  });
});
