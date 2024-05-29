'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    }
};

//destructuring to retrieve variables and store them in an easy way
//before
const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
//after destructuring
const [x, y, z] = arr;
console.log(x, y, z); //returns 2, 3, 4

const [first, second] = restaurant.categories;
console.log(first, second); //returns Italian, Pizzeria

const [first2, , second2] = restaurant.categories; //add a empty space if you want something beyond the second index
console.log(first2, second2); //returns Italian, Vegetarian

let [main, , secondary] = restaurant.categories; 
console.log(main, secondary);
//switching variables secondary to main the old way
//const temp = main;
//main = secondary;
//secondary = temp;

//switching secondary to main using destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary); //returns Vegetarian, Italian (it swapped places)

//recieve two return values from a function - destructing
const [starter, mainCourse] = restaurant.order(2,0);
console.log(starter, mainCourse); //returns Garlic Bread, Pizza

//nested destructuring
const nested = [2,4, [5, 6]];
const [i, j] = nested; //skip 4
console.log (i, j); //returns 2, [5,6] as variable and array
//destructing inside destructuring
const [i2, , [j2, k2]] = nested;
console.log(i2, j2, k2); //returns 2, 5, 6 as seperate variables

//default values
const [p = 1, q = 1, r=1] = [8, 9]; //useful for grabbing data from apis
console.log(p, q, r)