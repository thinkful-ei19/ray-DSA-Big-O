// Iterative Solution
function countSheepLoop(num){
    for(let i=num; i>0; i--){
        console.log(`counting sheeps ${i}`);
    }
  }
  countSheepLoop(10);

// O(n) Linear - algorithm's run time of operations increases as size of input increases


// Iterative Solution
function double_all(arr) {
    var ret = Array(arr.length);
    for (var i = 0; i < arr.length; ++i) {
        ret[i] = arr[i] * 2;
    }
    return ret;
}
let arr = [10,4,5,2,1];
console.log(double_all(arr));

// O(n) Linear - the larger the input array, the longer the number or operations required to finish


// Iterative Solution
function reverse_tail(str) {
    var accumulator = "";
    while (str !== "") {
      accumulator = str[0] + accumulator;
      str = str.slice(1);
    }
    return accumulator;
  }

// O(n) Linear - the longer the string data input is, the longer the operations required to complete 


// Iterative Solution
function triangle(n) {
    var tot = 0;
    for (var i = 1; i <= n; ++i) {
      tot += n;
    }
    return tot;
  }

// O(n) Linear - the larger the input number, the longer to complete


// Iterative Solution
function split(str, sep) {
    var ret = [];
    while (true) {
        var idx = str.indexOf(sep);
        if (idx == -1) break;
  ret.push(str.slice(0, idx))
  str = str.slice(idx + sep.length);
    }
    ret.push(str);
    return ret;
  }

// O(n) Linear - the longer the string, the longer the number of operations takes to complete


// Iterative Solution
function convertToBinaryIter(num){
    var binary = '';
    while(num>0){
        let rem = Math.floor(num%2);
        binary = rem + binary;
        num = Math.floor(num/2);
    }
    return binary;
  
  
  }
  console.log(convertToBinaryIter(124)); //1111100

// O(log(n)) Logarithmic 


// Iterative Solution
function factorialIterative(number){
    let fact = 1;
    for (let i = 1; i <= number; i++){
        fact *= i;
    }
    return fact;
  }
  console.log(factorialIterative(5));

// O(n) Linear - number of operations will depend on input data


// Iterative Solution
function fibonacciIterative(number){
    let num1 = 1;
    let num2 = 0;
    let fib = null;
    while(number > 0){
        fib = num1;
        num1 = num1+num2;
        num2 = fib;
        number--;
    }
    return num2;
  }

// O(n) Linear - number of operations increase as input value increases


