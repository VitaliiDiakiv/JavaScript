// let country = "Ukraine",
//   continent = "Europe",
//   population = 45000000;

// console.log(country, continent, population);
// console.log(true);

// console.log(typeof null);

// //Math operators
// let currentYear = 2037;

// const ageVitalii = currentYear - 2003;
// const ageAnna = currentYear - 2004;
// console.log(ageVitalii);
// console.log(ageAnna);

// console.log((ageVitalii * ageAnna) / 100, 2 ** 3);

// const firstName = "Vitalii";
// const secondName = "Diakiv";

// console.log(firstName + " " + secondName);

// //Assignment Operators
// let x = 10 + 1;
// x += 10;
// x *= 5;
// x++;
// x--;
// x--;
// console.log(x);

// //Comparison Operators
// console.log(ageVitalii > ageAnna);

// const isFullAge = ageAnna >= 18;
// console.log(isFullAge);

// const firstName = "Vitalii";
// const job = "unemployed";
// const birthYear = 2003;
// let currentYear = 2024;

// const vitalii =
//   "I'm " +
//   firstName +
//   ", a " +
//   (currentYear - birthYear) +
//   " years old " +
//   job +
//   "!";

// console.log(vitalii);

// const vitaliiNew = `I'm ${firstName}, a ${
//   currentYear - birthYear
// } years old ${job} !`;
// console.log(vitaliiNew);

// const age = 22;

// if (age >= 18) {
//   console.log("Anna can start driving license 🚗");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(
//     `Anna can't start driving license ❌, wait another ${yearsLeft} years.`
//   );
// }

// const birthYear = 2023;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// //type conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 33);

// console.log(Number("vitalii"));
// console.log(typeof NaN);

// console.log(String(23), 23);

// //type coercion

// console.log("Im " + 23 + " years old");

// const age = 18;
// if (age === 18) console.log("adult (strict)");
// if (age == "18") console.log("adult (loose)");

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// // if (hasDriversLicense && hasGoodVision) {
// //   console.log("Anna is able to drive");
// // } else {
// //   console.log("Someone else should drive...");
// // }

// const isTired = true;
// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Anna is able to drive");
// } else {
//   console.log("Someone else should drive...");
// }

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy");
// } else if (scoreKoalas > scoreDolphins) {
//   console.log("Koalas win the trophy");
// } else {
//   console.log("Both win the trophy");
// }

// const day = "saturday";

// switch (day) {
//   case "monday":
//     console.log("Plan course learning");
//     console.log("Go to shop");
//     break;
//   case "tuesday":
//     console.log("Learn materials");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Chill time");
//     break;
//   case "friday":
//     console.log("start new section");
//     break;
//   case "saturday":
//     console.log("watching videos");
//     break;
//   case "sunday":
//     console.log("go to the gym");
//   default:
//     console.log("not a valid day");
//     break;
// }

// const bill = 275;
// // const bill = 40;
// // const bill = 430;

// let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
// );
