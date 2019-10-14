const readline = require('readline');

reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout

});

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} greater than ${el2}`, function (input) {
    if (input.toDownCase() === "yes"){
      callback(true);
    }
    callback(false);
  }
}

function absurdBubbleSort(arr) {
  let swap = false;
  let n = arr.length -1;
  while (!swap) {
  swap = true;
  for (i = 0; i < n; i++) {
      let temp = arr[i];
      if ( ) {
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swap = false; 
    }
    }
  }
  }
  return arr;

}