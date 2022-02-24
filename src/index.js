module.exports = function reverse (n) {
  let input = n;
  let number = Math.abs(input);
  let string = number.toString();
  let output = 0;
  for (let i = 1; i <= string.length; i++) {
    output +=  (Math.trunc(((number % (10 ** i)) * 10) / (10 ** i))) * (10 ** (string.length - i));
  }
  return output;
}