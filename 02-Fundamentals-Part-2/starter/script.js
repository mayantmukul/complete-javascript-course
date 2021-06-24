'use strict';

// =============================================================
// Functional utils

const compose = (f, g) => x => f(g(x))
const reduce = f => arr => arr.reduce(f)
const map = f => arr => arr.map(f)
const combine = f => (xs, ys) => xs.map((val, idx) => f(val, ys[idx]))
const curry = f => arg => data => f(arg, data)
const uncurry = f => (arg, data) => f(arg)(data)
const flip = f => (y, x) => f(x, y)
const add = (y, x) => (x + y)
const inc = curry(add)(1)

const Some = x => ({
    map: f => Some(f(x)),
    chain: f => f(x),
    fold: (f, g) => g(x)
})

const None = x => ({
    map: f => None(x),
    chain: f => None(x),
    fold: (f, g) => f(x)
})

/* =============================================================
// Coding challenge #4

const bills = []
for (let i = 0; i < 10; ++i)
    bills.push(Math.trunc(Math.random() * 500))

const tips = []
const totals = []

const calculateTip = (bill) =>
    (50 <= bill && bill <= 300) ? 0.15 * bill : 0.20 * bill

const calculateAverage = (arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; ++i) {
        sum += arr[i]
    }
    return sum / arr.length
}

for (let i = 0; i < bills.length; ++i) {
    const tip = calculateTip(bills[i])
    tips.push(tip)
    totals.push(bills[i] + tip)
}

console.log(bills, tips, totals)
console.log(calculateAverage(totals))

*/


/* =============================================================
// Coding challenge #3

const mark = {
    fullname: 'Mark Miller',
    mass: 78,
    height: 1.69,

    getBMI: function () {
        if (!this.bmi) {
            this.bmi = this.mass / (this.height * this.height)
        }
        return this.bmi
    }
}

const john = {
    fullname: 'John Smith',
    mass: 92,
    height: 1.95,

    getBMI: function () {
        if (!this.bmi) {
            this.bmi = this.mass / (this.height * this.height)
        }
        return this.bmi
    }
}

if (john.getBMI() > mark.getBMI()) {
    console.log(`John's BMI (${john.getBMI()}) is higher than Mark's (${mark.getBMI()})!`)
} else {
    console.log(`Mark's BMI (${mark.getBMI()}) is higher than John's (${john.getBMI()})!`)
}

*/

/* =============================================================
// Coding challenge #2

const calculateTip = (bill) =>
    (50 <= bill && bill <= 300) ? 0.15 * bill : 0.20 * bill


const bills = [125, 555, 44]
const tips = [
    calculateTip(bills[0]),
    calculateTip(bills[1]),
    calculateTip(bills[2])
]

const totals = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2]
]

console.log(totals)

// OR, a functional approach

const calculateTip = bill =>
    (50 <= bill && bill <= 300) ? 0.15 * bill : 0.20 * bill

const calculateTotals = map(bill => bill + calculateTip(bill))

const bills = [125, 555, 44]
console.log(calculateTotals(bills))

*/

/* =============================================================
// Coding Challenge #1

const average = (x, y, z) => (x + y + z) / 3

// const dolphins = average(44, 23, 71)
// const koalas = average(65, 54, 49)

const dolphins = average(85, 54, 41)
const koalas = average(23, 34, 27)

const checkWinner = (d, k) => {
    if (d >= 2 * k) return `Dolphins win (${d} vs. ${k})`
    else if (k >= 2 * d) return `Koalas win (${k} vs. ${d})`
    else return 'no winner'
}

console.log(checkWinner(dolphins, koalas))

// OR, a functional approach

const average = arr => arr.reduce((acc, x) => acc += x) / arr.length

const dolphinsWin = (d, k) => (d >= 2 * k) ? Some(`Dolphins win (${d} vs. ${k})`) : None()
const koalasWin = (d, k) => (k >= 2 * d) ? Some(`Koalas win (${k} vs. ${d})`) : None()

const checkWinner = (d, k) =>
    dolphinsWin(d, k)
    .fold(
        () => koalasWin(d, k).fold(
            () => `no winner`,
            str => str
        ),
        str => str
    )

const d = average([44, 23, 71])
const k = average([65, 54, 49])

// const d = average([85, 54, 41])
// const k = average([23, 34, 27])

console.log(checkWinner(d, k))

*/
