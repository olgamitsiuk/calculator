function calc(op) {

  var result;
  var num1 = Number(document.getElementById("num1").value);
  var num2 = Number(document.getElementById("num2").value);
  console.log(typeof num1)

  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    result = "Invalid input: both arguments must be numbers.";
  }

  switch (op) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
        if (num2 === 0) {
            result = "Error: Division by zero is not allowed.";
        } else {
      result = num1 / num2;
        }
      break;
  }

  document.getElementById("result").innerHTML = result;
}
