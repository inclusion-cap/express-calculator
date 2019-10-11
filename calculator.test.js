
const functions = require('./calculator.helper');

test('addition works', function () {

  expect(functions.calculator('addition', 1, 2)).toBe(3);
})

test('addition works, strings converted to numbers', function () {
  expect(functions.calculator('addition', '1', '2')).toBe(3);
})

test('subtraction works', function () {
  expect(functions.calculator('subtraction', 2, 1)).toBe(1);
})

test('division works', function () {
  expect(functions.calculator('division', 4, 2)).toBe(2);
})

test('multiplication works', function () {
  expect(functions.calculator('multiplication', '2', 3)).toBe(6);
})

test('error-handling for undefined operator works', function () {
  expect(functions.calculator('something else', '4', '6')).toBe("Sorry, please enter a valid operator! (addition, subtraction, multiplication, division)");
})
