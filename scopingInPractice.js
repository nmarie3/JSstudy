'use strict'


function calcAge(birthYear) { //global scope
    const age = 2037 - birthYear;
    console.log(firstName); //can be called because firstName is a global variable - did variable lookup in paret scope

    function printAge() {
        let output = `You are ${age}, born in ${birthYear}` //looked for age variable in parent scope
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            //creating NEW variable with same name as outer scope's variable
            const firstName = 'Steven'; //this gets placed for firstName before the global variable. it takes local scopes variables first

            //reassigning outer scope's variable
            output = 'new output'

            const str = `oh you're a millenial, ${firstName}`
            console.log(str);

            function add(a,b) {
                return a+b;
            }
        }
        //console.log(str) //can't access because of block scope
        console.log(millenial); //can access because var variable
        //add(2,3); //can't access because functions are block scoped but only because of strict mode. works not in strict mode
    }
    printAge();
    return age;
}

const firstName = 'Jonas'; //global variable
calcAge(1991);
console.log(age); //can not access because it's in inner scope
printAge(); //can't access because it's in an inner scope