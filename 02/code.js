const fs = require('fs')
let input

try {
    input = fs.readFileSync('./input.txt', 'utf8').split(/\r?\n/)
} catch (err) {}

const roundScores = {
    LOOSE: 0,
    DRAW: 3,
    WIN: 6,
}

const plays = {
    // Rock
    X: {
        SCORE: 1,
        A: roundScores.DRAW,
        B: roundScores.LOOSE,
        C: roundScores.WIN,
    },
    // Paper
    Y: {
        SCORE: 2,
        A: roundScores.WIN,
        B: roundScores.DRAW,
        C: roundScores.LOOSE,
    },
    // Scissor
    Z: {
        SCORE: 3,
        A: roundScores.LOOSE,
        B: roundScores.WIN,
        C: roundScores.DRAW,
    },
}

let myScores = []
let totalScore = []

input.forEach(round => {
    const opponentPlay = round.charAt(0)
    const myPlay = round.charAt(2)

    myScores.push(plays[myPlay].SCORE)
    myScores.push(plays[myPlay][opponentPlay])
})

totalScore = myScores.reduce((acc, curr) => Number(acc) + Number(curr), [])
console.log(totalScore)

//--------------------------------------------------------------------------------//

myScores = []

input.forEach(round => {
    const opponentPlay = round.charAt(0) 
    const myPlayHint = round.charAt(2)

    const scoreMap = {
        X: roundScores.LOOSE,
        Y: roundScores.DRAW,
        Z: roundScores.WIN,
    }

    for (const [key, value] of Object.entries(plays)) {
        if (value[opponentPlay] === scoreMap[myPlayHint]) {
            myScores.push(plays[key].SCORE)
            myScores.push(plays[key][opponentPlay])
        }
    }
})

totalScore = myScores.reduce((acc, curr) => Number(acc) + Number(curr), [])
console.log(totalScore)
