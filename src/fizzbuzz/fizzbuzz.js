function fizzbuzz(num) {
  let fizzbuzzResult = "";

  if (num === 0) {
    return num;
  }

  if (num % 3 === 0) {
    fizzbuzzResult = "Fizz";
    //   return "Fizz";
  }

  if (num % 5 === 0) {
    fizzbuzzResult += "Buzz";
    //   return "Buzz";
  }

  if (fizzbuzzResult === "") {
    fizzbuzzResult = num;
  }

  return fizzbuzzResult;
}

module.exports = fizzbuzz;
