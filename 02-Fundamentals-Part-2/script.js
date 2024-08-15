"use strict";

// let hasDriverLicense = false;
// const passTest = true;

// if (passTest) {
//   hasDriversLicense = true;
// }
// if (hasDriverLicense) {
//   console.log("I can ride");
// }

/*function logger() {
  console.log("Vitalii");
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples, and ${oranges} oranges`;
  return juice;
}

console.log(fruitProcessor(3, 1));

const appleOrangeJuice = fruitProcessor(5, 2);
console.log(appleOrangeJuice);

//function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

console.log(calcAge1(1991));

//function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
console.log(calcAge2(1994));

//Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
console.log(calcAge3(2003));

const yearsRetirement = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;

  return `${firstName} retires in ${retirement}`;
};

console.log(yearsRetirement(2003, "Vitalii"));*/

/* function cutFruitPieces(fruit) {
  return fruit * 5;
}

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  console.log(applePieces, orangePieces);
  const juice = `Juice with ${applePieces} apples pieces, and ${orangePieces} oranges pieces`;
  return juice;
}

console.log(fruitProcessor(2, 3));

//challange 5
const calcAverage = function (a, b, c) {
  return (a + b + c) / 3;
};

const scoreDolphins = calcAverage(44, 23, 71);
console.log(scoreDolphins);

const scoreDolphins2 = calcAverage(85, 54, 41);
console.log(scoreDolphins2);

const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreKoalas);

const scoreKoalas2 = calcAverage(23, 34, 27);
console.log(scoreKoalas2);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins / 2 > avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas / 2 > avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins2, scoreKoalas2); */

//ARRAYS

// const friends = ["Me", "You", "We"];
// console.log(friends);

// const years = new Array(1991, 1990, 2003, friends);
// console.log(years);

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// console.log(
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1])
// );

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];

// console.log(ages);
/* 
const friends = ["Anna", "Ann", "Aneta"];
friends.push("Anneta");
console.log(friends);

friends.unshift("John");
console.log(friends);

console.log(friends.indexOf("Ann"));
console.log(friends.includes("Ann"));

//Coding exercise 6
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);

function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

console.log(evenOrOdd(0));*/

// const vitalii = {
//   firstName: "Vitalii",
//   lastName: "Diakiv",
//   age: 2024 - 2003,
//   job: "unemployed",
//   friends: ["Anna", "Ann", "Aneta"],
// };

// console.log(vitalii);

// console.log(vitalii.firstName);

// console.log(
//   `${vitalii.firstName} has ${vitalii.friends.length} friends, and his best friend is ${vitalii.friends[2]}`
// );

//Object methods

/*const vitalii = {
  firstName: "Vitalii",
  lastName: "Diakiv",
  birthYear: 2003,
  job: "unemployed",
  friends: ["Anna", "Ann", "Aneta"],
  hasDriversLicense: false,

  // calcAge: function (birthYear) {
  //   return 2024 - birthYear;
  // },

  // calcAge: function () {
  //   return 2024 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },

  makeSummarize: function () {
    this.summarize = `${this.firstName} is ${this.calcAge()}-year old ${
      this.job
    }, and has ${this.hasDriversLicense ? "a" : "no"} driver's license `;
    return this.summarize;
  },
};

console.log(vitalii.calcAge());
console.log(vitalii.age);
console.log(vitalii.age);
console.log(vitalii.age);
console.log(vitalii.makeSummarize()); */

//Coding exercise 7 CHALLANGE #3

/*const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

console.log(
  `${
    mark.calcBMI() > john.calcBMI()
      ? `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
          john.fullName
        }'s (${john.calcBMI()})`
      : `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${
          mark.fullName
        }'s (${mark.calcBMI()})`
  }`
);*/
/* 
const vitalii = [
  "Vitalii",
  "Diakiv",
  ["Anna", "Ann", "Aneta"],
  2024 - 2003,
  "unemployed",
];

for (let i = 0; i < vitalii.length; i++) {
  console.log(vitalii[i]);
  if (Array.isArray(vitalii[i])) {
    for (let j = 0; j < vitalii[i].length; j++) {
      console.log(vitalii[i][j]);
    }
  }
}
for (let i = 0; i < vitalii.length; i++) {
  console.log(!Array.isArray(vitalii[i]));
  if (!Array.isArray(vitalii[i])) continue;
  console.log(vitalii[i]);
}

for (let i = 0; i < vitalii.length; i++) {
  if (Array.isArray(vitalii[i])) break;
  console.log(vitalii[i]);
}
*/

// const vitalii = [
//   "Vitalii",
//   "Diakiv",
//   ["Anna", "Ann", "Aneta"],
//   2024 - 2003,
//   "unemployed",
// ];

// for (let i = vitalii.length - 1; i >= 0; i--) {
//   console.log(vitalii[i]);
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) {
//     console.log("Loop is end...");
//   }
// }

// //Coding exercise 8: Challange #4
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// /* Write your code below. Good luck! 🙂 */

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   tips.push(calcTip(bills[i]));
//   totals.push(bills[i] + tips[i]);
// }
// console.log(tips);
// console.log(totals);

// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }

//   return sum / arr.length;
// };

// console.log(calcAverage(totals));

// const l = [1, 2, "aasf", "1", "123", 123];

// function filter_list(l) {
//   let f = [];
//   for (let i = 0; i < l.length; i++) {
//     console.log(typeof l[i] === "string");
//     if (typeof l[i] === "string") continue;
//     f.push(l[i]);
//   }
//   return f;
// }
// console.log(filter_list(l));
// var x = 123;
// let y = x.toString().split("");
// console.log(y);
// let digits = y.map(Number);
// console.log(digits);

// let x = [
//   [3, 0],
//   [9, 1],
//   [4, 10],
//   [12, 2],
//   [6, 1],
//   [7, 10],
// ];

// let y = [
//   [86, 0],
//   [9, 9],
//   [66, 70],
//   [36, 17],
//   [55, 84],
//   [25, 67],
//   [93, 4],
//   [56, 92],
//   [85, 5],
//   [35, 122],
//   [73, 56],
//   [97, 43],
//   [52, 9],
//   [3, 36],
//   [22, 155],
//   [58, 1],
//   [81, 37],
//   [84, 108],
// ];

// var number = function (busStops) {
//   let leftPeople = 0;
//   for (let i = 0; i < busStops.length; i++) {
//     let difference = busStops[i][0] - busStops[i][1];
//     leftPeople += difference;
//   }
//   return leftPeople;
// };

// console.log(number(y));
// console.log(number(x));
// console.log(number([[0, 0]]));

function findAverage(array) {
  if (array.length === 0) {
    return 0;
  } else {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum / array.length;
  }
}

console.log(findAverage([1]));
console.log(typeof [1, 1, 1].length);

const str = "1 9 3 4 -5";
function highAndLow(numbers) {
  let strArray = numbers.split(" ");
  let numberArray = [];
  for (let i = 0; i < strArray.length; i++) {
    numberArray.push(Number(strArray[i]));
  }
  const max = Math.max(...numberArray);
  const min = Math.min(...numberArray);
  console.log(max, min);
  return `${max} ${min}`;
}

console.log(highAndLow(str));

var isSquare = function (n) {
  return Math.sqrt(n) === Math.floor(Math.sqrt(n)) ? true : false;
};

console.log(isSquare(-1));
console.log(isSquare());

console.log(Math.sqrt(26));
console.log(Math.sqrt(26) ** 2);
console.log(isSquare(0));
