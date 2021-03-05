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
/* harmony export */   "setWeather": () => (/* binding */ setWeather)
/* harmony export */ });
const getWeatherData = async (location) => {
  const key = 'ab1bb349d168e0577aa7f9a8a76025a4';
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`
  const weatherData = await fetch(url);
  return weatherData;
};
const processweatherData = async (location = 'Abbottabad') => {
  const response = await getWeatherData(location);
  const data = await response.json();
  return data;
};

const setDefaultCity = (obj) => {
  const city = obj.name;
  const country = obj.sys.country
  const main = document.querySelector('main');
  const cityName = document.createElement('h1');
  cityName.setAttribute('id', 'city-name');
  cityName.classList.add('center');
  cityName.textContent = city + ", " + country;
  main.appendChild(cityName);
};


const setCityName = (obj) => {
  const city = obj.name;
  const country = obj.sys.country;
  const cityName = document.getElementById('city-name');
  cityName.textContent = city + ", " + country;
};

const setDefaultWeather = (obj) => {
  let weatherInCelsius = obj.main.temp - 273.15;
  weatherInCelsius = Math.floor(weatherInCelsius);
  const main = document.querySelector('main');
  const weatherUpdate = document.createElement('h1');
  weatherUpdate.classList.add('center');
  weatherUpdate.setAttribute('id', 'weather-update')
  weatherUpdate.textContent = weatherInCelsius;
  // const span = document.createElement('span');
  // span.innerHTML = `&#8451;`;
  main.appendChild(weatherUpdate);
  // main.appendChild(span);
};

const setWeather = (obj) => {
  let weatherInCelsius = obj.main.temp - 273.15
  weatherInCelsius = Math.floor(weatherInCelsius);
  const weatherUpdate = document.getElementById('weather-update');
  weatherUpdate.textContent = weatherInCelsius;
}


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
});

const getLocation = (e) => {
  e.preventDefault();
  const city = document.getElementById('city').value;
  (0,_weatherData__WEBPACK_IMPORTED_MODULE_0__.processweatherData)(city).then((obj) => {
    (0,_weatherData__WEBPACK_IMPORTED_MODULE_0__.setCityName)(obj);
    (0,_weatherData__WEBPACK_IMPORTED_MODULE_0__.setWeather)(obj);
  });
  form.reset();
};

form.addEventListener('submit', getLocation);

})();

/******/ })()
;