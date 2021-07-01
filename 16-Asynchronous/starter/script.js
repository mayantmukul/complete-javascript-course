'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const imagesContainer = document.querySelector('.images')
///////////////////////////////////////

const wait = function(seconds) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log(`${seconds}s done!`)
            resolve()
        }, seconds * 1000)
    })
}

const setImageSource = function(node, path) {
    return new Promise(function(resolve, reject) {
        node.src = path
        node.addEventListener('load', function() {
            resolve(node)
        })
        node.addEventListener('error', function() {
            resolve(node)
        })
    })
}

const createImage = (imgPath) => {
    return new Promise(function(resolve, reject) {
        const imgNode = document.createElement('img')
        setImageSource(imgNode, imgPath)
            .then(node => {
                imagesContainer.insertAdjacentElement('beforeend', node)
                return resolve(node)
            })
            .catch(error => reject(error))
    })
}

let current;
createImage('./img/img-1.jpg')
    .then(res => {
        console.log(res)
        current = res
        return wait(2)
    })
    .then(() => {
        current.style.display = 'none'
        return createImage('./img/img-2.jpg')
    })
    .then(res => {
        console.log(res)
        current = res
        return wait(2)
    })
    .then(() => {
        current.style.display = 'none'
    })
    .catch(err => console.error(err))
