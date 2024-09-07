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

// const getCountryAndNeighbour = function (country) {
//   //AJAX call
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);

//     //Render country
//     renderCountry(data);

//     const neighbours = data.borders;
//     //Get Neighbour
//     neighbours.forEach(neighbour => {
//       const request2 = new XMLHttpRequest();
//       request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//       request2.send();
//       request2.addEventListener('load', function () {
//         const [data2] = JSON.parse(this.responseText);

//         //Render country
//         renderCountry(data2, 'neighbour');
//       });
// const neighbour = data.borders?.[2];
// console.log(neighbour);

// const request2 = new XMLHttpRequest();
// request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
// request2.send();
// request2.addEventListener('load', function () {
//   const [data2] = JSON.parse(this.responseText);

//   //Render country
//   renderCountry(data2, 'neighbour');
//     });
//   });
// };

/*// getCountryAndNeighbour('ukraine');
getCountryAndNeighbour('poland');
*/
// const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

const request = fetch(`https://restcountries.com/v3.1/name/ukraine`);
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       // console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       // console.log(data);
//       getCountryAndNeighbour(`${country}`);
//     });
// };

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
    return response.json();
  });
};

//Simplify code
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       // console.log(response);
//       if (!response.ok) throw new Error(`Country not found ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       renderCountry(data[0]);
//       // const neighbour = data[0].borders?.[3];
//       const neighbour = 'gfgfgdgs';
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//       // neighbours.forEach(neighbour => {
//       //   fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
//       //     .then(response => response.json())
//       //     .then(data => renderCountry(data[0], 'neighbour'));
//       // });
//     })
//     .then(response => {
//       if (!response.ok) throw new Error(`Country not found ${response.status}`);
//       return response.json();
//     })
//     .then(data => renderCountry(data[0], 'neighbour'));
// };

btn.addEventListener('click', function () {
  getCountryData('australia');
});

const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      // console.log(data);
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[3];
      // const neighbour = 'gfgfgdgs';
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
      // neighbours.forEach(neighbour => {
      //   fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
      //     .then(response => response.json())
      //     .then(data => renderCountry(data[0], 'neighbour'));
      // });
    })
    .then(data => renderCountry(data[0], 'neighbour'));
};

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/
const whereAmI = function (lat, lng) {
  fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=json&auth=657084027624698590748x84960`
  )
    .then(res => {
      res.json();
      if (!res.ok) {
        throw new Error(`Problem wit geocode ${res.status}`);
      }
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);
    })
    .catch(err => console.error(err));
};
whereAmI('49.8059964', '24.0110422');
// whereAmI('19.037', '72.873');
// whereAmI('52.508', '13.381');
