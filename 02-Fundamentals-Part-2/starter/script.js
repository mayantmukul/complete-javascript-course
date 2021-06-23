'use strict';

// =============================================================
// Functional utils

const compose = (f, g) => x => f(g(x))
const reduce = f => arr => arr.reduce(f)
const map = f => arr => arr.map(f)
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

// =============================================================
// Coding challenge #2




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

============================================================= */
