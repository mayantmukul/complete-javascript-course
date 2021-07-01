'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const getGeoURL = (lat, lng) => `https://nominatim.geocoding.ai/reverse.php?lat=${lat}&lon=${lng}&format=jsonv2`
const getCountryURL = (code) => `https://restcountries.eu/rest/v2/alpha/${code}`

const renderCountry = (data) => {
    const population = (Number(data.population) / 1000000).toFixed(1)
    const html = `
    <article class="country">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${population}M people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
    `

    countriesContainer.insertAdjacentHTML('beforeend', html)
    countriesContainer.style.opacity = 1
}

const getJSON = (url, error) => {
    return fetch(url)
        .then(res => {
            if (!res.ok)
                throw Error(`${error} (status: ${res.status})`)
            return res.json()
        })
}

const whereAmI = (lat, lng) => {
    return getJSON(getGeoURL(lat, lng))
    .then(data => {
        console.log(`You are in ${data.address.city}, ${data.address.country}`)
        return data
    })
    .then(data => getJSON(getCountryURL(data.address.country_code)))
    .then(data => renderCountry(data))
    .catch(err => console.error(err))
}

// whereAmI(52.508, 13.381)
// whereAmI(19.037, 72.873)
whereAmI(-33.933, 18.474)
