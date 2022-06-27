// ------------------------------------------------------------
// Name: Jimmy Klein
// Abstract: Destructing Exercise
// ------------------------------------------------------------


// ------------------------------------------------------------
// Name: Problem One
// Abstract: Object Destructuring 1
// ------------------------------------------------------------
// let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// let {numPlanets, yearNeptuneDiscovered} = facts;

// console.log(numPlanets); // 8
// console.log(yearNeptuneDiscovered); // 1846



// ------------------------------------------------------------
// Name: Problem Two
// Abstract: Object Destrucuring 2 
// ------------------------------------------------------------
let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
};

let {numPlanets, ...discoveryYears} = planetFacts;

console.log(discoveryYears);
// {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

// ------------------------------------------------------------
// Name: Problem Three
// Abstract: Object Destrucuring 3
// ------------------------------------------------------------
function getUserData({firstName, favoriteColor="green"}){
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({firstName: "Alejandro", favoriteColor: "purple"})
// Your name is Alejandro and you like purple

getUserData({firstName: "Melissa"})
// Your name is Melissa and you like green

getUserData({})
// Your name is undefined and you like green


// ------------------------------------------------------------
// Name: Problem Four
// Abstract: Array Destrucuring 1
// ------------------------------------------------------------
let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // Maya
console.log(second); // Marisa
console.log(third); // Chi


// ------------------------------------------------------------
// Name: Problem Five
// Abstract: Array Destrucuring 2 and 3
// ------------------------------------------------------------

// -----------------Array Destrucuring 2 ----------------------
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings"
]

console.log(raindrops); // "Raindrops on roses"
console.log(whiskers); // "whiskers on kittens"
console.log(aFewOfMyFavoriteThings);
// ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]


// -----------------Array Destrucuring 3 ----------------------
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // [10,30,20]

// ------------------------------------------------------------
// Name: Problem Six
// Abstract: ES5 Assigning Variables to Object Properties 
// ------------------------------------------------------------
var obj = {
  numbers: {
    a: 1,
    b: 2
  }
};

var a = obj.numbers.a;
var b = obj.numbers.b;



// ------------------------------------------------------------
// Name: Problem Seven
// Abstract: ES2015 Object Destructuring
// ------------------------------------------------------------
/* Write an ES2015 Version */

const obj = {
  numbers: {
    a: 1,
    b: 2
  }
};

const {a,b} = obj.numbers

// ------------------------------------------------------------
// Name: Problem Eight
// Abstract: ES5 Array Swap 
// ------------------------------------------------------------
var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;


// ------------------------------------------------------------
// Name: Problem Nine
// Abstract: ES2015 One-Line Array Swap with Destructuring
// ------------------------------------------------------------
[arr[0], arr[1]] = [arr[1], arr[0]]

// ------------------------------------------------------------
// Name: Problem Ten
// Abstract: raceResults()
// ------------------------------------------------------------
raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

// {first: "Tom", second: "Margaret", third: "Allison", rest: ["David", "Pierre"]}

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})
