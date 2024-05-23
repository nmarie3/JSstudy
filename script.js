let person = 'me'
let PI = 3.1415 //variables that are all uppercase are reserved for thinsg that will never change

//object data type
let me = {
    name: 'Jonas'
};

//primitive data type
let firstName= 'Jonas';
let age = 30;
//number, string, boolean, undefined>value taken by variable that is not defined (empty), null, symbol, bigint

let javascriptIsFun = true;
console.log(typeof javascriptIsFun);
//logs the data type = boolean

//dynamic typing
javascriptIsFun = 'Yes!';
//does not need the let variable again to reassign
//works for undefined as well
let year;
console.log(year) //=undefined
year = 1991; //now =number

let newAge = 30;
newAge = 31; //mutated variable. only let can be mutated

const job; //=error. const needs to have an initial declaration otherwise it will error

//never use var
//2 ** 3 means 2*2*2
//x += 10 means x = x+10 =25
//x *= 4 means x = x *4 = 100
//x++ means x= x +1

//------------------------------------

/*1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.*/

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76; 

const BMIMark = massMark / heightMark **  2;
constBMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJOhn, markHigherBMI)

//----------------------------------------------------------

//template literal
const jonasNew = `I'm ${firstName}`;
console.log(jonasNew)
//backticks can also be used for regular strings
//backticks can also be used to make multiline strings instead of using /n

//if-else is a controlled structure
const birthYear = 2012;

let century; //century has to be defined outside of the if statement else it's an error of undefined
if (birthYear <= 2000) {
    century = 20;
}else{
    century = 21;
}
console.log(century);


//type conversion is when you change the calculations
//type coercion is when javascript converts it automatically
const inputYear = '1991';
console.log(Number(inputYear), inputYear); //1991, '1991'
console.log(inputYear + 18) //199118
//NaN appears when doing an operation involving numbers fails
//when a value is white in console it's a string, purple when a number

//type corercion is when javascript is dealing with different types
//ex. + operator turns into a string, - operator converts strings to numbers

// === strict, == loose

const favorite = prompt("What's your favorite number?") //favorite stores the number given
//but will need to convert the answer to a number since it becomes a string
const favorite = Number(prompt("What's your favorite number?"))

switch(day) {
    case 'monday':
        console.log('Plan course structure');
        break;
        case 'tuesday':
        console.log('Theory vids')
        break;
        default: //this happens when none of the cases are valid
            console.log('Not a valid day');
}