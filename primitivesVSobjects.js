let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
    name: 'Jonas',
    age: 30,
};

const friend = me;
friend.age = 27;
console.log('Me', me); //this will change both ages to 27 which we don't want

//primitives are store in call stack
//objects are stored in heap
//refer to primitiveVSrefrenceValues png for details