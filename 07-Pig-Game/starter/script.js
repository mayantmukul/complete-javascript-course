'use strict';

const diceNode = document.querySelector('.btn--roll')
const diceImageNode = document.querySelector('.dice')
const newGameNode = document.querySelector('.btn--new')
const holdNode = document.querySelector('.btn--hold')
const currentScoreNodes = document.querySelectorAll('.current-score')
const totalScoreNodes = document.querySelectorAll('.score')

function PlayerState() {
    this.currentScore = 0
    this.totalScore = 0
}

let activePlayer = 0
let isOver = false
const state = [
    new PlayerState(),
    new PlayerState()
]

const toggleActivePlayer = () => {
    activePlayer = 1 - activePlayer
}

const setCurrentScore = (player, newScore) => {
    state[player].currentScore = newScore
    currentScoreNodes[player].textContent = newScore
}

const setTotalScore = (player, newScore) => {
    state[player].currentScore = newScore
    totalScoreNodes[player].textContent = newScore
}

const diceRoll = function() {
    if (isOver) return 

    const dice = Math.trunc(Math.random() * 6) + 1
    diceImageNode.src = `dice-${dice}.png`

    if (dice === 1) {
        setCurrentScore(activePlayer, 0)
        activePlayer = 1 - activePlayer
    } else {
        setCurrentScore(activePlayer, state[activePlayer].currentScore + dice)
    }
}

const hold = function() {
    if (isOver) return
    
    state[activePlayer].totalScore += state[activePlayer].currentScore    
    if (state[activePlayer].totalScore >= 100) {
        console.log(`Player ${activePlayer} wins`)
        isOver = true
    }

    totalScoreNodes[activePlayer].textContent = state[activePlayer].totalScore 
}

const reset = function() {
    for (let i = 0; i < 2; ++i) {
        state[i] = new PlayerState()
        totalScoreNodes[i].textContent = 0
        currentScoreNodes[i].textContent = 0
    }
    activePlayer = 0
    isOver = false
}

diceNode.addEventListener('click', diceRoll)
holdNode.addEventListener('click', hold)
newGameNode.addEventListener('click', reset)

reset()
