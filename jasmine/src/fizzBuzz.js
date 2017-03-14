// function fizzbuzz(number) {
//   var str = ""
//   if (number % 3 === 0)
//     str += "fizz";
//   if (number % 5 === 0)
//     str += "buzz";
//   return str
// }

function fizzbuzz(number) {
  if (number % 15 === 0)
    // console.log("fizzbuzz");
    return("fizzbuzz");
  else if (number % 3 === 0)
    return("fizz");
  else if (number % 5 === 0)
    return("buzz");
}

for (var n = 1; n < 100; n++) {
  console.log(fizzbuzz(n));
};
