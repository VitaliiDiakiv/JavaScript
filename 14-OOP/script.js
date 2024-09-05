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

/*//class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const jessi = new PersonCl('jes', 1996);
console.log(jessi);*/

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

/*//----THEME---- inheritance of clases
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
 */
/**
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //Always needs to happen first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and i stude ${this.course}`);
  }
  calcAge() {
    console.log(`I'm ${2037 - this.birthYear} years old`);
  }
}

const Anna = new StudentCl('Anna Bishchuk', 2004, 'Computer Science');
console.log(Anna);
Anna.introduce();
Anna.calcAge();

//----THEME---- Inheritance in Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

const jay = Object.create(StudentProto);
console.log(jay);
jay.init('jay', 2010, 'CS'); */

//////
/**class Account {
  //public fields
  locale = navigator.locale;

  //private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;
    console.log(`Thanks for opening an account ${this.owner}`);
  }

  getMovemets() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }
  #approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account('Vitalii', 'USD', 1111);
console.log(acc1);

acc1.deposit(100);
acc1.withdraw(290);
acc1.requestLoan(1000);
// console.log(acc1.#movements);
 */

//Challange 4

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(this.speed);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(this.speed);
    return this;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed}, with a charge of ${this.#charge}`
    );
    return this;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
}

const electro = new EVCl('Rivian', 120, 23);
console.log(electro);
electro.chargeBattery(90).accelerate().accelerate().accelerate().accelerate();

electro.accelerate();
