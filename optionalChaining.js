'use strict';
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours ={
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0, //open 24 hours
        close: 24,
    },
};

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
    //non optional chaining method to check if and time is open on mondays
    if (resturant.openingHours && restresturant.openingHours.mon) 
    console.log(resturant.openingHours.mon.open);

    //with optional chaining
    console.log(resturant.openingHours.mon?.open); //the ? is asking if mon exists then if it does return the open hours
    console.log(resturant.openingHours?.mon?.open); //can also add it after hours to check if monday exisits to begin with

    //example
    const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
    for (const day of days) {
        console.log(day);
        restaurant.openingHours[day]?.open ?? 'closed'; //day has to be in brackets because property doesn't exisit in the object for dot notation
        //the ?? also fixes the error of  0 undefined and shows the number instead
       console.log(`On ${day}, we open at ${open}`);
    }

    //methods
    console.log(resturant.order?.(0, 1) ?? 'Method does not exist'); //? does it exist
    console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist'); //since it doesn't after ?? gets displayed
    
    //arrays
    const users = [{ name: 'Jonas', email: 'hello@jonas.io'}];
    console.log(users[0]?.name ?? 'User array empty') // ? tests if value on left exists 