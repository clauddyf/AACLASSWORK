const readline = require('readline');

reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
  
});


function addNumbers(sum, numsLeft, completionCallback){
  
  if (numsLeft > 0){
    reader.question('Enter a number NOW!', function(input){
      input = parseInt(input);
      sum += input;
      numsLeft --;
      console.log(`The sum is ${sum} `);
      addNumbers(sum,numsLeft, completionCallback);
    });
  }
 
  completionCallback(sum);
}
addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));


