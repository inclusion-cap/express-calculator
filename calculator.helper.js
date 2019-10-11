function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

const calculator = function (operator, num1, num2) {
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  let result;

  switch (operator) {
    case "addition":
      result = add(num1, num2);
      break;

    case "subtraction":
      result = subtract(num1, num2);
      break;

    case "multiplication":
      result = multiply(num1, num2);
      break;

    case "division":
      result = divide(num1, num2);
      break;

    default:
      result = "Sorry, please enter a valid operator! (addition, subtraction, multiplication, division)"
  }

  return result;
}

module.exports = { calculator, add, subtract, multiply, divide };
