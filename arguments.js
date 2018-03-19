function sum1 () {
  let result = 0;
  let argumentss = Array.from(arguments);
  argumentss.forEach(el => {
    result += el;
  });

  return result;
}

function sum (...args) {
  let result = 0;
  args.forEach(el => {
    result += el;
  });

  return result;
}

Function.prototype.myBind1 = function(classToBind) {
   console.log(arguments);
  let argumentss = Array.from(arguments);
  let result = () => {
    argumentss.shift();
    return this.apply(classToBind, argumentss);
  };
  return result;
};

Function.prototype.myBind = function(classToBind, ...bindArgs ) {
  return (...callArgs) => this.apply(classToBind, bindArgs.concat(callArgs));
};




function curriedSum(numArgs) {
  let numbers = [];
  let _curriedSum = (arg) => {
    numbers.push(arg);
    if (numbers.length === numArgs) {
      // numbers = [];
      return numbers.reduce((acc,el) => acc + el);
    } else {
      return _curriedSum;
    }
  };

  return _curriedSum;
}

// const func3 = curriedSum(3);
// console.log(func3(5)(5)(4));

Function.prototype.curry = function(numArgs) {
  let numbers = [];
  let _curry = (arg) => {
    numbers.push(arg);
    console.log(numbers);
    if (numbers.length === numArgs) {
      return this.apply(this, numbers);
    } else {
      return _curry;
    }
  };

  return _curry;
};


function add (args) {
  console.log('This is return after curry');
}
