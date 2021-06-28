'use strict';

const messageNode = document.querySelector('.message');
const guesserNode = document.querySelector('.guess')
const checkButtonNode = document.querySelector('.check')
const againButtonNode = document.querySelector('.again')
const numberDisplayNode = document.querySelector('.number')
const scoreDisplayNode = document.querySelector('.score')
const highScoreDisplayNode = document.querySelector('.highscore')
const bodyNode = document.querySelector('body')

const generateSecret = () => Math.trunc(Math.random() * 20) + 1

const state = {
    score: 20,
    highscore: 0,
    isOver: false,
    secret: generateSecret()
}

const getOutcomeForGuess = (guess) => {
    if (!guess) {
        return [0, 'No number!']
    } else if (guess === state.secret) {
        return [0, 'Correct!']
    } else if (guess < state.secret) {
        return [-1, 'Too low']
    } else if (guess > state.secret) {
        return [-1, 'Too high']
    } else {
        console.error(`Invalid input for guess: ${guess}`)
        return [0, 'Was that a valid input?']
    }
}

const clickHandler = () => {
    // Don't do anything if the game is already over
    if (state.isOver) return;

    const guess = Number(guesserNode.value)
    const [deltaScore, message] = getOutcomeForGuess(guess)
    
    // Update scores
    state.score += deltaScore
    const isWin = (guess === state.secret)
    const isLoss = (state.score <= 0)
    state.isOver = isWin || isLoss
    if (state.isOver && state.score > state.highscore) {
        state.highscore = state.score
    }

    // Update page background
    if (isWin) {
        bodyNode.style.backgroundColor = '#65ad5a'
    } else if (isLoss) {
        bodyNode.style.backgroundColor = '#d15919'
    }
    
    // Display results
    // Note: If I wanted to optimize for DOM operations I would
    //   not make changes to state, but rather create a newState
    //   object and use some applyChanges() method to apply the diff
    messageNode.textContent = message
    highScoreDisplayNode.textContent = state.highscore
    scoreDisplayNode.textContent = state.score
}

const resetGame = () => {
    state.score = 20
    state.secret = generateSecret()
    state.isOver = false
    
    bodyNode.style.backgroundColor = '#222'
    // numberDisplayNode.textContent = '?'
    messageNode.textContent = 'Start guessing...'
    scoreDisplayNode.textContent = state.score
    guesserNode.value = ''
}

numberDisplayNode.textContent = state.secret
checkButtonNode.addEventListener('click', clickHandler)
againButtonNode.addEventListener('click', resetGame)