const getWeatherData = async (location) => {
  const key = 'ab1bb349d168e0577aa7f9a8a76025a4';
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`
  const weatherData = await fetch(url);
  return weatherData;
};


const getFlags = async (code) => {
  const data = await fetch('https://restcountries.eu/rest/v2/all');
  const response = await data.json();
  return response.find(country => country.alpha2Code === code);
}

const processweatherData = async (location = 'Abbottabad') => {
  const response = await getWeatherData(location);
  const data = await response.json();
  return data;
};

const setDefaultCity = (obj) => {
  const city = obj.name;
  const country = obj.sys.country;
  const flagContainer = document.createElement('div');
  flagContainer.setAttribute('id', 'flag-container')
  getFlags(country).then((obj) => {
    flagContainer.style.backgroundImage = `url(${obj.flag})`
  })
  const main = document.querySelector('main');
  const cityContainer = document.createElement('div');
  cityContainer.classList.add('center');
  cityContainer.setAttribute('id', 'city-container');
  const cityName = document.createElement('h1');
  cityName.setAttribute('id', 'city-name');
  cityName.textContent = city + ", " + country;
  cityContainer.appendChild(cityName);
  cityContainer.appendChild(flagContainer);
  main.appendChild(cityContainer);
};
const setCityName = (obj) => {
  const city = obj.name;
  const country = obj.sys.country;
  const flagContainer = document.getElementById('flag-container');
  getFlags(country).then((obj) => {
    flagContainer.style.backgroundImage = `url(${obj.flag})`
  })
  const cityName = document.getElementById('city-name');
  cityName.textContent = city + ", " + country;
};

const setDefaultWeather = (obj) => {
  let weatherInCelsius = obj.main.temp - 273.15;
  weatherInCelsius = Math.floor(weatherInCelsius);
  const main = document.querySelector('main');
  const weatherContainer = document.createElement('div');
  weatherContainer.classList.add('center');
  weatherContainer.setAttribute('id', 'weather-container');
  weatherContainer.innerHTML = `<h1 id = 'weather-update'>${weatherInCelsius}</h1>
  <h3>&#8451;</h3>`
  main.appendChild(weatherContainer);
};

const setWeather = (obj) => {
  let weatherInCelsius = obj.main.temp - 273.15
  weatherInCelsius = Math.floor(weatherInCelsius);
  const weatherUpdate = document.getElementById('weather-update');
  weatherUpdate.textContent = weatherInCelsius;
}
export { processweatherData, setCityName, setDefaultCity, setDefaultWeather, setWeather }