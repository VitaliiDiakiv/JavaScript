'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);

    const language = Object.keys(data.languages)[0];

    const html = `
        <article class="country">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.official}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${
              data.languages[language]
            } </p>
            <p class="country__row"><span>💰</span>${
              Object.keys(data.currencies)[0]
            }</p>
          </div>
        </article>`;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('ukraine');
getCountryData('usa');
getCountryData('poland');
getCountryData('germany');
*/

const renderCountry = function (data, className = '') {
  const language = Object.keys(data.languages)[0];

  const html = `
        <article class="country ${className}">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.official}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${
              data.languages[language]
            } </p>
            <p class="country__row"><span>💰</span>${
              Object.keys(data.currencies)[0]
            }</p>
          </div>
        </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (country) {
  //AJAX call
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);

    //Render country
    renderCountry(data);

    const neighbours = data.borders;
    //Get Neighbour
    neighbours.forEach(neighbour => {
      const request2 = new XMLHttpRequest();
      request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
      request2.send();
      request2.addEventListener('load', function () {
        const [data2] = JSON.parse(this.responseText);

        //Render country
        renderCountry(data2, 'neighbour');
      });
      // const neighbour = data.borders?.[2];
      // console.log(neighbour);

      // const request2 = new XMLHttpRequest();
      // request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
      // request2.send();
      // request2.addEventListener('load', function () {
      //   const [data2] = JSON.parse(this.responseText);

      //   //Render country
      //   renderCountry(data2, 'neighbour');
    });
  });
};

// getCountryAndNeighbour('ukraine');
getCountryAndNeighbour('poland');
