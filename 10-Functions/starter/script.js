'use strict';

const pollNode = document.querySelector('.poll')

const poll = {
    question: "What is your favourite programming language?",
    options: [
        "0: JavaScript",
        "1: Python",
        "2: Rust",
        "3: C++"
    ],
    answers: new Array(4).fill(0),

    registerNewAnswer: function() {
        const message = this.question + "\n" + this.answers.join("\n")

        const answer = Number(prompt(message))
        if (isNaN(answer) || answer < 0 || answer > 3) {
            alert("I don't think that's a valid choice, try again")
            return
        }

        this.answers[answer] += 1
        this.displayResults('array')
        this.displayResults('string')
    },

    displayResults: function(type = 'array') {
        if (type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`)
        } else {
            console.log(this.answers)
        }
    }
}

pollNode.addEventListener('click', poll.registerNewAnswer.bind(poll))

poll.displayResults.call({ answers: [5, 2, 3] }, 'array')
