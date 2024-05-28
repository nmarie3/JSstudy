//primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//refrence types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};
const marriedJessica = jessica; //copying refrence to jessica
marriedJessica.lastName = 'Davis';
console.log('Before marriage: ', jessica);
console.log('After marriage: ', marriedJessica)
//these will both change to Davis since it's refrencing the same memory address in the callstack and not a new object in the heap

//copying objectsconst 
// const jessica2 = {
//     firstName: 'Jessica',
//     lastName: 'Williams',
//     age: 27,
// };

// const jessicaCopy = Object.assign({}. jessica2); //merge two objects to return a new one
// jessicaCopy.lastName = 'Davis';
// console.log('Before marriage: ', jessica2);
// console.log('After marriage: ', jessicaCopy);
//but this only makes a shallow copy and not a deep clone which is ideally what we want
//it only perserves data from first level. if you add something in object within object, it will be reflected in the first copy too
//ex.
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob'], //added family property
};
const jessicaCopy = Object.assign({}. jessica2); 
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('Mary'); //pushing more family
jessicaCopy.family.push('John'); //pushing more family

console.log('Before marriage: ', jessica2);
console.log('After marriage: ', jessicaCopy);
//this will copy all the family members into the before marriage object too because family property is deeply nested