const getWeatherData = async (location) => {
  const key = 'ab1bb349d168e0577aa7f9a8a76025a4';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`;
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

const toCelsius = (obj) => {
  let weatherInCelsius = obj.main.temp - 273.15;
  weatherInCelsius = Math.floor(weatherInCelsius);
  return weatherInCelsius;
}
const toForenheight = (obj) => {
  let weatherInForenheight = 9 / 5 * (obj.main.temp - 273) + 32;
  weatherInForenheight = Math.ceil(weatherInForenheight);
  return weatherInForenheight
}

const setDefaultWeather = (obj) => {
  const weatherInCelsius = toCelsius(obj);
  let weatherInForenheight = toForenheight(obj);
  const toggle = document.getElementsByClassName('toggle-2-container')[0];
  toggle.style.display = "none";
  const main = document.querySelector('main');
  const weatherContainer = document.createElement('div');
  weatherContainer.classList.add('center');
  weatherContainer.setAttribute('id', 'weather-container');
  weatherContainer.innerHTML = `<h1 id = 'weather-update'>${weatherInCelsius}</h1>
      <h3>&#8451;</h3>`;
  const toggleSwitch = document.getElementById('switch');
  toggleSwitch.addEventListener('click', () => {
    if (toggleSwitch.checked) {
      toggleSwitch.value = 'C';
      weatherContainer.innerHTML = `<h1 id = 'weather-update'>${weatherInCelsius}</h1>
      <h3>&#8451;</h3>`;
    }
    else {
      toggleSwitch.value = 'F';
      weatherContainer.innerHTML = `<h1 id = 'weather-update'>${weatherInForenheight}</h1>
      <h3>&#8457;</h3>`;
    }
  });
  main.appendChild(weatherContainer);
};

const setWeather = (obj) => {
  const weatherInCelsius = toCelsius(obj);
  const weatherInForenheight = toForenheight(obj);
  const toggle = document.getElementsByClassName('toggle-container')[0];
  const toggle2 = document.getElementsByClassName('toggle-2-container')[0];
  toggle.style.display = "none";
  toggle2.style.display = "block";
  const toggleSwitch = document.getElementById('switch-2');
  const weatherContainer = document.getElementById('weather-container');
  weatherContainer.innerHTML = `<h1 id = 'weather-update'>${weatherInCelsius}</h1>
      <h3>&#8451;</h3>`;
  toggleSwitch.addEventListener('click', () => {
    if (toggleSwitch.checked) {
      toggleSwitch.value = 'C';
      weatherContainer.innerHTML = `<h1 id = 'weather-update'>${weatherInCelsius}</h1>
      <h3>&#8451;</h3>`;
    }
    else {
      toggleSwitch.value = 'F';
      weatherContainer.innerHTML = `<h1 id = 'weather-update'>${weatherInForenheight}</h1>
      <h3>&#8457;</h3>`;
    }
  });
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
export {
  processweatherData, setCityName, setDefaultCity,
  setDefaultWeather, setWeather, additionDataFefault, additionalData,
};