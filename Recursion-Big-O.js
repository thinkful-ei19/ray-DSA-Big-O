'use strict';

// Recursive Solution
function countSheep(from) {
    if(from === 0) {
      return;
    }
  
    console.log(from + ' Another sheep jump over the fence');
    countSheep(from - 1);
  };
  
  countSheep(5);

// O(n) Linear Time - this algorithm's run time will depend on how large the input value will be. 



// Recursive Solution
function arrayDouble(array) {
    if(array.length === 0) {
      return [];
    }
  
    const doubleElement = array[0] * 2;
    return [doubleElement, ...arrayDouble(array.slice(1))];
  
  };
  
  console.log(arrayDouble([1, 3, 5]));

// O(n) Linear Time - the larger the input array is, the longer the algorithm run time will take to complete


// Recursive Solution
function reverseString(str) {
    if(str.length === 0) {
        return '';
    }
    return str[str.length - 1] + reverseString(str.slice(0, -1));
  };
  
  console.log(reverseString('Hello'));

// O(n) Linear Time - the longer the string, the longer the algorithm run time will take to cycle through each letter in the string.


// Recursive Solution
function triangleNum(num) {
    if(num === 0) {
      return 0;
    }
    return num + triangleNum(num - 1);
  };
  
  console.log(triangleNum(5));

// O(n) Linear Time - the larger the number, the more operations the algorithm will take to run until the triangle is finished


// Recursive Solution
function strSplitter(str, seperator) {
    if(str.indexOf(seperator) <= -1) {
      return [str];
    }
    let index = str.indexOf(seperator);
    let newStr = str.slice(0, index);
    return [newStr, ...strSplitter(str.slice(index + 1), seperator)];
  };
  
  console.log(strSplitter('how are you doing today?', ' '));

// O(n) Linear Time - this algorithm run time will depend on the length of the string. The algorithm needs to run through the entire string until each seperator has been hit, returning the new array.


// Recursive Solution
function binaryRep(num) {
    if(num === 0) {
      return 0;
    }
    let numDivided = Math.floor(num / 2);
    let remainder = num % 2;
    if(numDivided === 0) {
      return `${remainder}`;
    }
    return binaryRep(numDivided) + remainder;
  };
  
  console.log(binaryRep(8));

// O(n) Linear Time - this algorithm run time will grow depending how large the input number is. The larger the input data, the more time the algorithm needs to run through returning the appropriate binary remainder values.



// Recursive Solution
function factorial(num) {
    if(num === 1) {
      return 1;
    }
    return num * factorial(num - 1);
  };
  
  console.log(factorial(8));

// 0(n) Linear Time - the larger the input value, the more number of operations the algorithm with take to complete


// Recursive Solution
function fibonacci(num) {
    if(num === 0) {
      return 0;
    }
    if(num === 1) {
      return 1;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
  };
  
  console.log(fibonacci(5));

// 0(n) Linear Time - this algorithm run time calculates out the fibonnaci sequence series of numbers so the larger the input value is, the deeper in the fibonnaci sequence it will be, meaning the longer it will take to calculate.




// Recursive Solution
function anagrams(prefix, str) {
    if(str.length <= 1) {
      console.log(`The anagram is ${prefix}${str}`);
    } else {
      for(let i = 0; i < str.length; i++) {
        let current = str.substring(i, i + 1);
        let previous = str.substring(0, i);
        let after = str.substring(i + 1);
        anagrams(prefix + current, previous + after);
      }
    }
  };
  
  console.log(anagrams('', 'east'));


// O(2^n) Exponential Time - this algorithm's run time increases exponentially increases as the input data increases.


// Recursive Solution
const animalHierarchy = [
    {id: 'Animals', parent: null},
    {id: 'Mammals', parent: 'Animals'},
    {id: 'Dogs', parent:'Mammals' },
    {id: 'Cats', parent:'Mammals' },
    {id: 'Golden Retriever', parent: 'Dogs'},
    {id: 'Husky', parent:'Dogs' },
    {id: 'Bengal', parent:'Cats' }
]

function traverse(animalHierarchy, parent) {
    let node = {};
    animalHierarchy.filter(item => item.parent === parent)
                   .forEach(item => node[item.id] = traverse(animalHierarchy, item.id));
    return node;  
}

// O(n) Linear Time - this algorithm is linear because it runs one animal object one at a time.


// Recursive Solution
let organization = {
	"Zuckerberg": {		
		"Schroepfer": {
			"Bosworth": {
				"Steve":{},
				"Kyle":{},
				"Andra":{}
			},
			"Zhao": {
				"Richie":{},
				"Sofia":{},
				"Jen":{}
			},
			"Badros": {
				"John":{},
				"Mike":{},
				"Pat":{}
			},
			"Parikh": {
				"Zach":{},
				"Ryan":{},
				"Tes":{}
			}
		},
		"Schrage": {
			"VanDyck": {
				"Sabrina":{},
				"Michelle":{},
				"Josh":{}
			},
			"Swain": {
				"Blanch":{},
				"Tom":{},
				"Joe":{}
			},
			"Frankovsky": {
				"Jasee":{},
				"Brian":{},
				"Margaret":{}
			}
		},
		"Sandberg": {
			"Goler": {
				"Eddie":{},
				"Julie":{},
				"Annie":{}
			},
			"Hernandez": {
				"Rowi":{},
				"Inga":{},
				"Morgan":{}
			},
			"Moissinac": {
				"Amy":{},
				"Chuck":{},
				"Vinni":{}
			},
			"Kelley": {
				"Eric":{},
				"Ana":{},
				"Wes":{}
			}
}}};

function traverseA(data, depth = 0) {
	let indent = " ".repeat(depth * 4);
	Object.keys(data).forEach(key => {
		console.log(indent + key);
		traverseA(data[key], depth + 1)
	});
}

function traverseB(node, indent=0) {
	for (var key in node) {
		console.log(" ".repeat(indent), key);
		traverseB(node[key], indent + 4);
	}
}




function main(){
	//console.log('#1 - count sheep');
	//countSheep(5);

	//console.log('#2 - Array Doubler');
	//let arr = [10,5,3,4];
	//console.log(double_all(arr));

	//console.log('#3 - Reverse String');
	//console.log(reverseString("tauhida"));

	//console.log('#4 - nth Triangular Number');
	//console.log(triangle(5));

	//console.log('#5 - String Splitter');
	//console.log(split('1/21/2018', '/'));

	//console.log('#6 - Binary Representation');
	//console.log(convertToBinary(25));

	//console.log('#7 - Anagrams');
	//printAnagram("east");

	//console.log('#8 - animalHierarchy');
	//console.log(traverse(animalHierarchy, null));

	//console.log('#9 - Factorial');
	//console.log(factorial(5)); //120

	//console.log('#10 - Fibonacci');
	//console.log(fibonacci(7));

	console.log('#11 - Organization Chart');
	console.log(traverseA(organization));
	//console.log(traverseB(organization));

}
main()


// O(n) Linear Time - as the organization input increases, the number of operation also increases
