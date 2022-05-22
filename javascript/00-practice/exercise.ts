console.log("************** PRACTICE *********************");
console.log("Use folder 00 practice to practice with homework exercises");
console.log("You can add new files as long as they are imported from index.ts");

// [FUNDAMENTALS] Check arguments
function fdf(input) {
    var result;
    if (input === undefined) {
      result = "Unknown";
    } else if (input === null) {
      result = "";
    } else {
      result = input;
    }
    return result;
  }

  console.log(fdf(undefined))
  console.log(fdf(null))
  console.log(fdf('result'));
  console.log(fdf(""))
