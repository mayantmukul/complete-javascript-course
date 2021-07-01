'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const imagesContainer = document.querySelector('.images')

///////////////////////////////////////

const createImage = function(path) {
    return new Promise(function(resolve) {
        const node = document.createElement('img')
        node.src = path
        node.addEventListener('load', () => {
            resolve(node)
        })
    })
}

const loadAll = async function(imgPaths) {
    const imgNodePromises = imgPaths.map(path => createImage(path))
    const imgs = await Promise.all(imgNodePromises)
    imgs.forEach(img => {
        img.classList.add('parallel')
        imagesContainer.insertAdjacentElement('beforeend', img)
    })
}

;(async function() {
    const paths = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']
    await loadAll(paths)
})()