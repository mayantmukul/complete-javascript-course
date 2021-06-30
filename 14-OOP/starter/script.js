'use strict';

const obj = {
    _data: [1, 2, 3],
    getData: function() {
        // Simply returning this._data would allow it
        // to be mutated (everything is a reference)
        // So create a copy
        return Array.from(this._data)
    }
}

const data = obj.getData()
data.push(4)
console.log(obj, data)

/***************************************************
 * Coding Challenge #2
 ***************************************************/

/*
class Car {
    // Constructor function call `Car`
    constructor(make, speed = 0) {
        this.make = make
        this.speed = speed
    }

    // This will go on `Car.prototype`
    accelerate() {
        this.speed += 10
    }

    // This will go on `Car.prototype`
    brake() {
        this.speed -= 5
    }

    // Will go on prototype but can be used as
    //  car.speedUS = xyz
    //  xyz = car.speedUS
    get speedUS() {
        return this.speed / 1.6
    }

    set speedUS(speedInMPH) {
        this.speed = speedInMPH * 1.6
    }
}

const ford = new Car('Ford', 120)
*/


/***************************************************
 * Coding Challenge #3
 ***************************************************/

// Challenge 3 requires a function-based approach
function Car(make, speed) {
    this.make = make
    this.speed = speed
}

Car.prototype.accelerate = function() {
    this.speed += 1
}


function ElectricCar(make, speed, charge) {
    // Assign to this object whatever a Car has
    Car.call(this, make, speed)
    // Create a new propery specific to electric cars
    this.charge = charge
}

// Assign to ElectricCar.prototype whatever Car.prototype has
ElectricCar.prototype = Object.create(Car.prototype)
// Reset the constructor here otherwise it'll be Car since we copied the object above
ElectricCar.prototype.constructor =  ElectricCar
// Add a new method to ElectricCar
ElectricCar.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo
}
// Override the accelerate method on Car
ElectricCar.prototype.accelerate = function() {
    this.speed += 20
    this.charge = 0.99 * this.charge
    console.log(`${this.make} is going at ${this.speed}km/h with a charge of ${this.charge}%`)
}

const ec = new ElectricCar('Tesla', 120, 23)

/***************************************************
 * Coding Challenge #1


function Car(make, speed = 0) {
    this.make = make
    this.speed = speed
}

Car.prototype.accelerate = function() {
    this.speed += 10
    console.log(this.speed)
}

Car.prototype.brake = function() {
    this.speed -= 5
    console.log(this.speed)
}

const BMW = new Car('BMW', 120)
const merc = new Car('Mercedes', 95)
*/


/*
function Person(firstName, lastName) {
    this.firstName = firstName // 'own property', this is directly on the object. It is also possible to set properties on the prototype.
    this.lastName = lastName


    // While this works, this is a bad idea
    // Copies of this function will be stored in each instance of Person now
    // So it is better to keep methods in the prototype
    // Each object can be linked to a prototype object, which will be shared
    // Constructor functions should therefore define data
    // and prototypes should defined methods
    // this.greet = function() {
    //     console.log(`Hello ${this.firstName}`)
    // }
}

Person.prototype.greet = function() {
    console.log(`Hello ${this.firstName}`)
}

// Custom implementation of the new operator
function myNew(constructor) {
    // 1. A new empty object is created
    // 2. Invoke the constructor keeping this as the new empty
    // 3. Link this object to a prototype
    //   a. All objects created by a constructor are also linked to the constructor's prototype
    //    i.e obj.__proto__ = constructor.prototype
    // 4. Return this final object
}

console.dir(Person)

const person = new Person('Papa', 'John')
console.log(person)
console.log(person.greet())

const p2 = Person('Hello', 'Me') // Error: this will be undefined
console.log(p2)
*/