'use strict';

// Data needed for a later exercise

// Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be recieved at ${time} to ${address}`
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
//   },

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Road 55',
//   mainIndex: 2,
//   starterIndex: 1,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name);
// console.log(openingHours);
// console.log(categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName);
// console.log(hours);
// console.log(tags);

// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open);
// console.log(close);

// const arr = [2, 3, 4];
// const [a, b, c] = arr;
// console.log(a, b, c);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// [secondary, main] = [main, secondary];

// console.log(main, secondary);

// const [starter, main] = restaurant.order(2, 0);
// console.log(starter);
// console.log(main);

// const nested = [2, 4, [5, 6]];

// const [i, , [j, k]] = nested;
// console.log(j);
// console.log(k);

// const arr = [7, 8, 9];

// const arr1 = [5, 6, ...arr];

// console.log(arr1);
// console.log(...arr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// const ingredients = [
//   prompt('Lets make pasta! Ingredient 1?'),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];

// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// const newRestaurant = { ...restaurant };

// console.log(newRestaurant);

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni',
// };

// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ??= 10;
// rest1.owner ||= '<ANONYMOUS>';
// rest2.numGuests ??= 10;

// console.log(rest1);
// console.log(rest2);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// for (const item of menu) console.log(item);

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be recieved at ${time} to ${address}`
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
//   },
// };

// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const keys = Object.keys(openingHours);
// console.log(keys);

// const values = Object.values(openingHours);
// console.log(values);

// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we open at ${open} and closed at ${close}`);
// }

// //SETS AND MAPS

// const orderSet = new Set(['Pasta', 'Pizza', 'Pasta', 'Risotto']);

// console.log(orderSet);

// console.log(new Set('vitalii'));
// console.log(new Set('1231'));
// console.log(orderSet.size);

// console.log(orderSet.has('Pizza'));

// for (const order of orderSet) {
//   console.log(order);
// }

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(new Set(staff).size);

// console.log(new Set('vitalii').size);

// const rest = new Map();
// rest.set(1, 2);
// rest.set('name', 'Classico ');
// console.log(rest);

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');

// console.log(rest);

// console.log(rest.get('name'));

// console.log(rest.get(1));

// console.log(rest.get(true));

// const time = 21;
// console.log(rest.get(time >= rest.get('open') && time < rest.get('close')));

// console.log(rest.has(1));

// rest.set(document.querySelector('h1'), 'Heading');

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 🎉'],
//   [false, 'Try again!'],
// ]);
// console.log(question);

// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// const answer = Number(prompt('Your answer'));

// console.log(question.get(answer === question.get('correct')));

//WORKING WITH STRINGS

// const airlines = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane.indexOf(0));

// const checkMiddleSeat = function (seat) {
//   return seat.slice(-1) === 'B' || seat.slice(-1) === 'E'
//     ? 'Middle seat'
//     : 'Not a middle seat';
// };

// console.log(checkMiddleSeat('11B'));
// console.log(checkMiddleSeat('23C'));
// console.log(checkMiddleSeat('3E'));

// console.log(airlines.toLowerCase());
// console.log(airlines.toUpperCase());

// const passenger = 'vItaLii';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);

// console.log(passengerCorrect);

// //Comparing emails

// const email = 'hello@jonas.io';
// const loginEmail = '   Hello@Jonas.IO \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

// console.log(trimmedEmail);
// const normalizeEmail = loginEmail.toLowerCase().trim();

// console.log(normalizeEmail);

// //replace

// const priceGB = '222.22';

// const priceUS = priceGB.replace('.', ',');

// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';

// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));

// const plane2 = 'A320neo';
// console.log(plane2.includes('A320'));
// console.log(plane2.startsWith('B320'));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(12323321324214214));
// console.log(maskCreditCard('12313132213213213'));

// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const splited = text.split('\n');
  for (const [i, x] of splited.entries()) {
    const separate = x.trim().toLowerCase().split('_');

    if (separate.length == 2) {
      for (const [firstWord, secondWord] of [separate]) {
        const secondWordFinal = secondWord.replace(
          secondWord[0],
          secondWord[0].toUpperCase()
        );
        console.log(
          (firstWord + secondWordFinal).padEnd(20, ' ') + '✅'.repeat(i + 1)
        );
      }
    } else {
      console.log('There are more than 2 words');
    }
  }
});
//Challenge 2
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const flightsSeparated = flights.split('+');

for (const [i, j] of flightsSeparated.entries()) {
  const [type, from, to, time] = j.split(';');
  console.log(
    `${type.startsWith('_Delayed') ? ' 🔴' : ''} ${type
      .replaceAll('_', ' ')
      .trim()} from ${from.toUpperCase().slice(0, 3)} to ${to
      .toUpperCase()
      .slice(0, 3)} (${time.replace(':', 'h')})`.padStart(36)
  );
}
