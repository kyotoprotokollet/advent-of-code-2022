const fs = require('fs')

let data

try {
    data = fs.readFileSync('./input.txt', 'utf8').split(/\r?\n/)
} catch (err) {}

let arrays = [[]]

data.forEach(element => element ? arrays[arrays.length -1].push(element) : arrays.push([]))

const totals = arrays.map(array => array.reduce((acc, curr) => Number(acc) + Number(curr), []))

console.log(Math.max(...totals))

const topThree = totals
    .sort((a, b) => a - b)
    .slice(-3)
    .reduce((acc, curr) => Number(acc) + Number(curr), [])

console.log(topThree)