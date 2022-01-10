// forEach(), .map(), .reduce(), .filter()
console.log('====================================================================================');
console.log('forEach(), .map(), .reduce(), .filter()');
console.log('====================================================================================');

var officers = [
  { id: 20, name: 'Captain Piett' },
  { id: 24, name: 'General Veers' },
  { id: 56, name: 'Admiral Ozzel' },
  { id: 88, name: 'Commander Jerjerrod' }
];

var resultForEach = [];
var resultMap = [];
var resultReduce = [];
var resultFilter = [];

// Normal For loop over array of objects.
officers.forEach((officers) => {
  resultForEach.push(officers.id);
});

// Anytime you need to pick a value from the array
resultMap = officers.map((officers) => officers.id);

// Anytime you need to perform mathematical operation 
// Takes 2 arguments and has to be initialized.
resultReduce = officers.reduce((acc, officers) => acc + officers.id, 0);

// Anytime you need particular output from the array
// If statement is required

resultFilter = officers.filter(officers => officers.id === 56);

// Array Prototype
  Array.prototype.filter = function(fun /*, thisp*/) {
    var len = this.length >>> 0;
    if (typeof fun != "function")
    throw new TypeError();

    var res = [];
    var thisp = arguments[1];
    for (var i = 0; i < len; i++) {
      if (i in this) {
        var val = this[i];
        if (fun.call(thisp, val, i, this))
        res.push(val);
      }
    }
    return res;
  };


// Output of Each Functions

console.log('Output of forEach loop');
console.log(resultForEach, 'resultForEach');
console.log('Ouput for Map');
console.log(resultMap, 'resultMap');
console.log('Output for Reduce ');
console.log(resultReduce, 'resultReduce');
console.log('Output for Filter');
console.log(resultFilter, 'resultFilter');

// What you need

// Output [20, 24, 56, 88]

// Example with all the 3 functionalities

// Output - get the total score of force users only

var personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

var result = personnel.filter(forceUser => forceUser.isForceUser === true)
.reduce((total, score) => total + score.shootingScore + score.pilotingScore, 0);

// // Final Output
console.log('Final Output');
// // Output should be 420. Total of shootingScore and pilotingScore for all users where isForceUser is true
console.log(result, 'result');
console.log('====================================================================================');
// ==========================================================================================

Arrays, Object
console.log('Array, Object');
console.log('====================================================================================');

console.log('====================================================================================');
// Filter Method to find duplicates
console.log('Filter method to find duplicates');
console.log('====================================================================================');

// delete arr;
var arr = [1, 4, 1, 6, 2, 7, 3, 6];

arr.filter((item, i) => {
console.log(item, i, arr.indexOf(item), arr.indexOf(item) === i);
console.log('item, i, arr.indexOf(item), arr.indexOf(item) === i');
console.log(arr.indexOf(item) === i);
});

console.log(arr)
console.log('====================================================================================');

// //Reduce Method to find duplicates
// console.log('Reduce method to find duplicates');
// console.log('====================================================================================');

delete arra;
var arra = [1, 4, 1, 6, 2, 7, 3, 6];

arra.reduce((acc, value) => {
	console.log('acc, value, acc.includes(value), acc.includes(value) ? acc : [...acc, value]');
console.log(acc, value, acc.includes(value), acc.includes(value) ? acc : [...acc, value]);
return acc.includes(value) ? acc : [...acc, value];
}, []);


var acc = [1, 2, 4, 2];
var value = 2;

console.log(acc, 'acc');
console.log(value, 'value');
console.log(...acc, '...acc');
console.log(...acc, value, ' ===>> ...acc, value');
console.log([...acc, value], '[...acc, value]');
console.log(acc, 'acc');

// ==========================================================================================
console.log('====================================================================================');

// Object Cloning
console.log('Object Cloning');
console.log('====================================================================================');

// Array.from('pizza'); - this will only work with Arrays and Strings.
// Array.from() lets you create Array s from: array-like objects 
// const value1 = 12345;
  const value1 = "hello";
//  const value1 = 123;
//  const value1 = true;
//  const value1 = [1, "2", 3];
//  const value1 = {one: 1 };
//  const value1 = Symbol('123');
//  const value1 = undefined;
//  const value1 = null;

const result1 = Array.from(value1);
 console.log(result1, 'result 1');
 console.log(typeof result1, 'Type of Result 1');

var food1 = { food1: 'egg', food2: 'chicken', food3: 'mutton' }
var foodCopy = {};

console.log(food1, 'food');
// console.log(...food, 'food');
// The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.
console.log(Object.assign({}, food1), 'Object assign null');
console.log(Object.assign(foodCopy, food1), 'Copy to foodCopy');
console.log(foodCopy, 'foodCopy');
console.log(JSON.stringify(food1), 'JSON.stringify(food1)');
console.log(JSON.parse(JSON.stringify(food1)), 'JSON.parse(JSON.stringify(food1))');

console.log('====================================================================================');
console.log('Using =');
// Using '='
console.log('====================================================================================');


foodCopy = food1;
foodCopy.food4 = 'beef';

console.log(food1, 'food1 post mutation');
console.log(foodCopy, 'foodCopy post mutation');
console.log('====================================================================================');

// Using Object.assign()
console.log('Using Object.assign()');
console.log('====================================================================================');

var food2 = { food1: 'egg', food2: 'chicken', food3: 'mutton' }
var foodCopy = {};

console.log(foodCopy, 'foodCopy pre mutation');
foodCopy = Object.assign({}, food2);
console.log(food2, 'food2 post mutation');
console.log(foodCopy, 'foodCopy post mutation');
console.log('====================================================================================');

// Using JSON
console.log('Using JSON');
console.log('====================================================================================');

var food3 = { food1: 'egg', food2: 'chicken', food3: 'mutton' }
var foodCopy = {};

console.log(foodCopy, 'foodCopy pre mutation');
foodCopy = JSON.parse(JSON.stringify(food3));
console.log(food3, 'food3 post mutation');
console.log(foodCopy, 'foodCopy post mutation');
console.log(typeof food3, 'typeof food3');
console.log(typeof foodCopy, 'typeof foodCopy');
console.log('====================================================================================');

// Shallow Cloning and Deep Cloning an Object
console.log('Shallow Cloning and Deep Cloning');
console.log('====================================================================================');

var food4 = { 
  food1: 'egg',  
  food2: 'chicken', 
  food3: 
    {
      food4: 'mutton'
    }
};
var foodCopy = {};

console.log(food4, 'food4 pre mutation');
console.log(foodCopy, 'foodCopy pre mutation');

// Use either of these 3
// foodCopy = { ...food4 }; // This will update both the objects when copied object is changed - Shallow cloning
// foodCopy = JSON.parse(JSON.stringify(food4)); // This will not update the source object if target is updated - Deep Cloning
 foodCopy = Object.assign({}, food4); // This will update both the object when copied object is changed - Shallow Cloning

// Object.assign is a lot faster than JSON 

foodCopy.food3.food = 'Beef';

console.log(food4, 'food4 post mutation');
console.log(foodCopy, 'foodCopy post mutation');
console.log(typeof food4, 'typeof food');
console.log(typeof foodCopy, 'typeof foodCopy');

// ==========================================================================================
console.log('====================================================================================');

Flattening an Array - Nested Array, bring all nesting to same level
console.log('Flattening and Array - Nested Array, bring all nesting to same level');
console.log('====================================================================================');

// To calculate performance
var p1 = new Date();

const nestedArr = [
  'a', 'b', 3, [
                2, 5, [ 
                        'b', 
                            [
                              'a'
                            ]
                      ]
                ]
  ];
console.log(nestedArr, 'pre mutation of nestedArr');

// Works only with ES2019 - Does not work with most browsers
// const resultArr = nestedArr.flat(); 

// ES6
 // const resultArr = [].concat(...nestedArr);

// Older Browsers
const resultArr = [].concat.apply([], nestedArr);

// Recursion method
// function flattenArray(arr) {
//   return arr.reduce((acc, index) => 
//     Array.isArray(index) ? arr.concat(flattenArray(index)) : arr.concat(index), [])
// }
// const resultArr = flattenArray(nestedArr);

// To calculate performance
var p2 = new Date();

console.log(resultArr, 'post mutation of nestedArr');
console.log("Call took " + (p2 - p1) + " milliseconds.");


Question based on the above approach - 

function search(needle, haystack) {}const haystack =[1, 4, [5,6,7, [8, 18, [34,177,[98,[210,[213]]]]]]];
const needle = 213;

========================================================================================
console.log('====================================================================================');

const variable = 'pizza'
console.log(variable, 'variable');
const split = [...variable];
console.log('Split value below');
console.table(split);
console.log(split);
console.log(typeof split, 'typeof split');
console.log('====================================================================================');

// ========================================================================================

// Dot vs []
console.log('Dot vs []');
console.log('====================================================================================');

const obj = {
  '123': 'digit',
  '123name': 'start with digit',
  'name123': 'does not start with digit',
  '$name': '$ sign',
  'name-123': 'hyphen',
  'NAME': 'upper case',
  'name': 'lower case'
};

// console.log(obj.123);// - Fails
console.log(obj['123name'], 'obj[\'123\']'); // - Works

console.log('====================================================================================');

// =========================================================================================
console.log('====================================================================================');

Arrow Operators
Very important - While returning object literals, wrap them in paranthesis.
console.log('Arrow Operators');
console.log('Very Important - While returning object literals, wrap them in paranthesis');
console.log('====================================================================================');


const me = () => ({ name: 'hello' });
console.table(me());

// =========================================================================================
console.log('====================================================================================');
console.log('Passing array as function arguments');
// Passing array as function arguments
console.log('====================================================================================');

const arrFuncVar = [1, 'f', 3, 'a'];

function arrFunc(arrFuncVar) {
  console.log(arrFuncVar);
}

// arrFunc(arrFuncVar);

function arrFun2(a, b, c, d) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
}
arrFun2.apply(null, arrFuncVar); // Or
arrFun2(...arrFuncVar);

// Example

const numbers = [1, 5, 9, 41];
const resultMath = Math.max(...numbers);
console.table(resultMath);

const num = [2, 4, 6, 8];
console.log('====================================================================================');
console.log('Merging Arrays');
// // ================== Merging arrays ============
console.log('====================================================================================');

console.table([...numbers, ...num]);
console.log([...numbers, ...num]);
console.log('numbers.concat(num)', numbers.concat(num));
console.log('Another Method to concat', [].concat(numbers, num));
const res = Math.max(...numbers, ...num);
console.log(res);

// =========================================================================================
console.log('====================================================================================');

// Convert value to string
console.log('Convert Value to String');
console.log('====================================================================================');

// const valueNew = 12345;
// const value = "hello";
// const value = 123;
// const value = true;
// const value = [1, "2", 3];
 const valueNew = {one: 1 };
// const value = Symbol('123');
// const value = undefined;
// const value = null;


console.log('typeof valueNew', typeof valueNew);

// Concat Empty String
console.log('valueNew', valueNew + '');

// Template Strings
console.log('`${valueNew}`', `${valueNew}`); 

// JSON.stringify
console.log('JSON.stringify(valueNew)', JSON.stringify(valueNew));

console.log(typeof JSON.stringify(valueNew))

// toString()
console.log('valueNew.toString()', valueNew.toString());

// String()
console.log('String(valueNew)', String(valueNew));
console.log('====================================================================================');



// console.log('====================================================================================');

// console.log('Check if number is an integer or not');

// function typeCheck(testValue) {
//   return (testValue % 1 === 0) ;
// }

// console.log('typeCheck(123)', typeCheck(123));
// console.log('typeCheck(123.2)', typeCheck(123.2));

// //Closure
// // const multiply = function(num1) {
// //   return function(num2) {
// //     console.log(num1, num2, 'num1', 'num2');
// //     return num1 * num2;
// //   }
// // }

// const multiply = (num1) => {
//   return (num2) => num1 * num2;
// }

// console.log(multiply(5)(6), 'multiply(5)(6)');


// console.log('Average Prototype Example');




// Array.prototype.average = function() {
//   var sum = this.reduce((anon, index) => anon + index);
//   return sum/this.length;
// }
// var arr = [1, 2, 3, 4, 5];
// var avg = arr.average();
// console.log(avg);


// console.log('Duplicate');

// var dupArray = [1,2,3,4,5];
// var resultArray = [];
// function duplicate(arr) {
//    for(let i = 0; i < arr.length-1; i++) {
//      resultArray = arr.concat(arr);
//     }
//    return resultArray;
// }

// console.log(duplicate(dupArray)); // [1,2,3,4,5,1,2,3,4,5]


// var name = 'Drishti';
// String.prototype.test = () => this.name;

// console.log(name.test());

// https://jsonplaceholder.typicode.com/users

// https://blog.angulartraining.com/5-different-syntax-options-for-ngif-3408dd9050c

// https://www.interviewbit.com/angular-interview-questions/