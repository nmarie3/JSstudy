'use strict';

const restaurant = {
    nameHere: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, //open 24 hours
            close: 24,
        },
    },

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },
    orderDelivery: function({starterIndex, mainIndex, time, address}) {
        console.log(
            `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
};
    resturant.orderDelivery({
        time: '22:30',
        adrress: 'Via del Sole 21',
        mainIndex: 2,
        starterIndex: 2,
    });


//{} are used to destructure
const {nameHere, openingHours, categories} = resturant;
console.log(nameHere, openingHours, categories); //returns everything in the object

const {
    nameHere: restaurantName,
    openingHours: hours,
    categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags); //returns same as above
//creating a default values
const {
    menu = [], 
    starterMenu: starters = []} = resturant; //renaming starterMenu to starters and gives an array just in case it doesn't exist, but ignores it since it does exist
console.log(menu, starters) //starters gets put into the menu array because menu doesn't exist in the object

//mutating variables
let a = 111;
let b = 999
const obj = {a: 23, b: 7, c:14};
({a,b} = obj); //need to wrap these in () because anything starting with {} will be errored because it needs to be wrapped in a code block
console.log(a, b) //return 23, 7

//nested objects
const {fri = {open, close} } = openingHours;
console.log(open, close); //returns 11, 23
