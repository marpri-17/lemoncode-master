function f(input) {
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

  console.log(f(undefined))
  console.log(f(null))
  console.log(f('result'));
  console.log(f(""))