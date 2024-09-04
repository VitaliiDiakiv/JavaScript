'use strict';

// const Person = function (firstName, birtYear) {
//   this.firstName = firstName;
//   this.birtYear = birtYear;
// };

// const me = new Person('Vitalii', 2003);
// console.log(me);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birtYear);
// };

// me.calcAge();

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   console.log((this.speed += 10));
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(this.speed);
// };

// const car1 = new Car('BMW', 120);
// const car2 = new Car('Kia', 95);

// car1.brake();
// car1.accelerate();
// car1.accelerate();

//----THEME---- ES6 Classes

//class expression
// const PersonCl1 = class {};

//class declaration
/*class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const jessi = new PersonCl('jes', 1996);
console.log(jessi);
 */

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
// };

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   console.log((this.speed += 10));
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(this.speed);
// };

// const car1 = new Car('BMW', 120);
// const car2 = new Car('Kia', 95);

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const car = new Car('Ford', 120);
// console.log(car.speedUS);

//----THEME---- inheritance of clases
const Person = function (firstName, birtYear) {
  this.firstName = firstName;
  this.birtYear = birtYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birtYear);
};

const Student = function (firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and i stude ${this.course}`);
};

const mike = new Student('Mi', 2020, 'CS');
console.log(mike);
mike.introduce();
mike.calcAge();
console.dir(Student.prototype.constructor);
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

//Challange 3

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  console.log((this.speed += 10));
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed}, with a charge of ${this.charge}`
  );
};

const electro = new EV('Tesla', 120, 23);
console.log(electro);
electro.chargeBattery(90);
console.log(electro);
electro.accelerate();
