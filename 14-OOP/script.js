'use strict';

const Person = function (firstName, birtYear) {
  this.firstName = firstName;
  this.birtYear = birtYear;
};

const me = new Person('Vitalii', 2003);
console.log(me);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birtYear);
};

me.calcAge();

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

const car1 = new Car('BMW', 120);
const car2 = new Car('Kia', 95);

car1.brake();
car1.accelerate();
car1.accelerate();
