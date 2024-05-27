//strict mode -- helps to avoid bugs in code. forbids certain actions and warns of bad code
'use strict';

//calling / running / invoke function
logger();

//function delcaration - can be called before definined in code (can be called outside of code)
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);

//function expression -- 
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991); //this can't be accessed outside of code

console.log(age1, age2)

//arrow function
const calcAge3 = birthYear => 2037 - birthYear; //means the same as above

//need brackets as it gets more complicated
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));

//calling functions within functions
//refer to functionInfunction png file

if (retirement > 0) {
    return retirement; //since return comes before console.log it stops here and will not console.log
    console.log(`retires in ${retirement} years`); //put this above the return if you want to console.log
}

//ex. of how functions can be used
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function(avgDol, avgKol) { //can put a function statement as a const
    if (avgDol >= 2 * avgKol) {
        console.log('the winner is...')
    }
}
checkWinner(scoreDolphins, scoreKoalas) //these params then get put into avgDol and avgKol

//arrays
const fruits = ['apple', `orange`, `lemon`];
fruits[2] =  'blueberry'; //changes lemon into blueberry
//arrays are not primative values so arrays can be mutated even though its a const

fruits.push('pear'); //adds to end of array
fruits.unshift('grapes'); //adds to front of array
fruits.pop(); //removes last element of array
fruits.shift(); //removes frist element of array
console.log(fruits.indexOf('orange')); //gives the index of element in array
console.log(fruits.includes('banana')); //returns a boolean if it exists in array so this is false

//objects
const jonas = {
    firstName: 'Jonas',
    job: 'teacher',
    birthYear: 1991
    calcAge: function() {
        return 2037 - this.birthYear;
    }
}
console.log(jonas.job); //dot notation
const interestedIn = prompt('Do you want to know firstName or job?') 
//type in job then interestedIn becomes job accessing the object property for dot notation using bracket notation
console.log(jonas[interestedIn]); //bracket notation

jonas.location = 'Portugal'; //location: "Portugal"
jonas['twitter'] ='@---'; //twitter: "@---" the bracket must be a string
//these two methods above will then be added to the jonas object

calcAge: function() { //instead of always computing inside obj, compute once and turn it into a new property
    this.age = 2037 - this.birthYear; //this will create a new 'age' property in the object
    return this.age;
}

//for loop, keeps running while condition is true
for (let rep = 1; rep <= 10; rep = rep++) { //rep++ = rep + 1
    console.log(`number of reps: ${rep}`);
}

//looping through arrays
for (let i = 0; i < jonas.length; i++) {  //for this ex. it loops through the length(everything) of the array
    //reading array
    console.log(jonas[i]);
}

//filling in array
const years= [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

//continue and break
//only strings
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;
    console.log(jonas[i], typeof jonas[i]);
}
//break with number
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break; //stops once the typeof reaches a number
    console.log(jonas[i], typeof jonas[i]);
}

//looping backwards
for (let i = jonas.length - 1; i >= 0; i--);

//loop inside loop
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`starting exercise ${exercise}`);
for (let rep = 1; rep < 6; rep++) {
    console.log(`on rep ${rep} of exercise ${exercise}`);
    }
}

//while loop
let rep = 1;
while (rep <= 10) {
    console.log(`lifting rep ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1; //need to add this or you will crash program
    if (dice === 6) console.log('You rolled 6 so loop will end');
}

