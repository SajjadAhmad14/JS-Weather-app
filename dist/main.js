/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "processweatherData": () => (/* binding */ processweatherData),
/* harmony export */   "setCityName": () => (/* binding */ setCityName),
/* harmony export */   "setDefaultCity": () => (/* binding */ setDefaultCity),
/* harmony export */   "setDefaultWeather": () => (/* binding */ setDefaultWeather),
/* harmony export */   "setWeather": () => (/* binding */ setWeather),
/* harmony export */   "additionDataFefault": () => (/* binding */ additionDataFefault),
/* harmony export */   "additionalData": () => (/* binding */ additionalData)
/* harmony export */ });
const getWeatherData = async (location) => {
  const key = 'ab1bb349d168e0577aa7f9a8a76025a4';
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`;
  const weatherData = await fetch(url);
  return weatherData;
};


const getFlags = async (code) => {
  const data = await fetch('https://restcountries.eu/rest/v2/all');
  const response = await data.json();
  return response.find(country => country.alpha2Code === code);
};

const processweatherData = async (location = 'Abbottabad') => {
  const response = await getWeatherData(location);
  const data = await response.json();
  return data;
};

const setDefaultCity = (obj) => {
  const city = obj.name;
  const { country } = obj.sys;
  const flagContainer = document.createElement('div');
  flagContainer.setAttribute('id', 'flag-container');
  getFlags(country).then((obj) => {
    flagContainer.style.backgroundImage = `url(${obj.flag})`;
  });
  const main = document.querySelector('main');
  const cityContainer = document.createElement('div');
  cityContainer.classList.add('center');
  cityContainer.setAttribute('id', 'city-container');
  const cityName = document.createElement('h1');
  cityName.setAttribute('id', 'city-name');
  cityName.textContent = `${city}, ${country}`;
  cityContainer.appendChild(cityName);
  cityContainer.appendChild(flagContainer);
  main.appendChild(cityContainer);
};
const setCityName = (obj) => {
  const city = obj.name;
  const { country } = obj.sys;
  const flagContainer = document.getElementById('flag-container');
  getFlags(country).then((obj) => {
    flagContainer.style.backgroundImage = `url(${obj.flag})`;
  });
  const cityName = document.getElementById('city-name');
  cityName.textContent = `${city}, ${country}`;
};

const setDefaultWeather = (obj) => {
  let weatherInCelsius = obj.main.temp - 273.15;
  weatherInCelsius = Math.floor(weatherInCelsius);
  const main = document.querySelector('main');
  const weatherContainer = document.createElement('div');
  weatherContainer.classList.add('center');
  weatherContainer.setAttribute('id', 'weather-container');
  weatherContainer.innerHTML = `<h1 id = 'weather-update'>${weatherInCelsius}</h1>
  <h3>&#8451;</h3>`;
  main.appendChild(weatherContainer);
};

const setWeather = (obj) => {
  let weatherInCelsius = obj.main.temp - 273.15;
  weatherInCelsius = Math.floor(weatherInCelsius);
  const weatherUpdate = document.getElementById('weather-update');
  weatherUpdate.textContent = weatherInCelsius;
};

const additionDataFefault = (obj) => {
  let feelsLike = obj.main.feels_like - 273.15;
  feelsLike = Math.floor(feelsLike);
  let minTemp = obj.main.temp_min - 273.15;
  minTemp = Math.floor(minTemp);
  const clouds = obj.weather[0].description;
  const main = document.querySelector('main');
  const dataContainer = document.createElement('div');
  dataContainer.classList.add('center');
  dataContainer.setAttribute('id', 'addition-data');
  const feelsLikeHead = document.createElement('h1');
  feelsLikeHead.setAttribute('id', 'feels-like');
  const minTempHead = document.createElement('h1');
  minTempHead.setAttribute('id', 'min-temp');
  const cloudsHead = document.createElement('h1');
  cloudsHead.setAttribute('id', 'clouds');
  feelsLikeHead.textContent = `Feels Like: ${feelsLike}C |`;
  minTempHead.textContent = ` Min Temperature: ${minTemp}C |`;
  cloudsHead.textContent = ` Clouds: ${clouds}`;
  dataContainer.appendChild(feelsLikeHead);
  dataContainer.appendChild(minTempHead);
  dataContainer.appendChild(cloudsHead);
  main.appendChild(dataContainer);
};

const additionalData = (obj) => {
  let feelsLike = obj.main.feels_like - 273.15;
  feelsLike = Math.floor(feelsLike);
  let minTemp = obj.main.temp_min - 273.15;
  minTemp = Math.floor(minTemp);
  const clouds = obj.weather[0].description;
  const feelsLikeHead = document.getElementById('feels-like');
  const minTempHead = document.getElementById('min-temp');
  const cloudsHead = document.getElementById('clouds');
  feelsLikeHead.textContent = `Feels Like: ${feelsLike}C |`;
  minTempHead.textContent = `Min Temperature: ${minTemp}C |`;
  cloudsHead.textContent = ` Clouds: ${clouds}`;
};


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weatherData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


const form = document.querySelector('form');

(0,_weatherData__WEBPACK_IMPORTED_MODULE_0__.processweatherData)().then((obj) => {
  (0,_weatherData__WEBPACK_IMPORTED_MODULE_0__.setDefaultCity)(obj);
  (0,_weatherData__WEBPACK_IMPORTED_MODULE_0__.setDefaultWeather)(obj);
  (0,_weatherData__WEBPACK_IMPORTED_MODULE_0__.additionDataFefault)(obj);
});

const getLocation = (e) => {
  e.preventDefault();
  const city = document.getElementById('city').value;
  (0,_weatherData__WEBPACK_IMPORTED_MODULE_0__.processweatherData)(city).then((obj) => {
    (0,_weatherData__WEBPACK_IMPORTED_MODULE_0__.setCityName)(obj);
    (0,_weatherData__WEBPACK_IMPORTED_MODULE_0__.setWeather)(obj);
    (0,_weatherData__WEBPACK_IMPORTED_MODULE_0__.additionalData)(obj);
  });
  form.reset();
};

form.addEventListener('submit', getLocation);

})();

/******/ })()
;