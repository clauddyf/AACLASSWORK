
function mySum(arr) {
  let sum = 0;


  arr.forEach((ele) =>  { 
    sum += ele;
  });

 return sum;
}

console.log(mySum(1,2,3));



class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");


Function.prototype.myBind = function () {
  let that = this;

  let bindArgs = Array.from(arguments).slice(1);

  let context = arguments[0];

  return function () {
    let callArgs = Array.from(arguments);

    return that.apply(context, bindArgs.concat(callArgs));

  };

};

function curriedSum(numArguments) {

  const numbers = [];

  let _curriedSum = function(num) {
    numbers.push(num);

    if (numbers.length === numArguments) {
      return mySum(numbers);
    } else {
      return _curriedSum;
    }
  };
  return _curriedSum;
}

  const sum = curriedSum(4);
  sum(5)(30)(20)(1); // => 56

  Function.prototype.curry = function (numArgs) {
    const numbers = [];
    let that = this;

    let _arrSum = function (n) {
      numbers.push(n);
      let sum = 0;
      if (numbers.length < numArgs) { 
        return _arrSum; 
      } else { 
          return that.call(null, ...numbers);
         }
    };
    return _arrSum;
  };


// numbers.ducere((ele) => { +=s; }um  ele); 