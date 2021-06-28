'use strict';

const modalNode = document.querySelector('.modal')
const overlayNode = document.querySelector('.overlay')
const buttonCloseModalNode = document.querySelector('.close-modal')
const buttonOpenModalNodeList = document.querySelectorAll('.show-modal')

const isModalVisible = () => !modalNode.classList.contains('hidden')

const handlers = {
    showModal: function() {
        modalNode.classList.remove('hidden')
        overlayNode.classList.remove('hidden')
    },

    hideModal: function() {
        modalNode.classList.add('hidden')
        overlayNode.classList.add('hidden')
    },

    esc: function(event) {
        if (event.key === "Escape" && isModalVisible()) {
            modalNode.classList.add('hidden')
            overlayNode.classList.add('hidden')
        }
    }
}

for (const btn of buttonOpenModalNodeList)
    btn.addEventListener('click', handlers.showModal)

buttonCloseModalNode.addEventListener('click', handlers.hideModal)
overlayNode.addEventListener('click', handlers.hideModal)
document.addEventListener('keydown', handlers.esc)
