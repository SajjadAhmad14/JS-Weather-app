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
export { processweatherData, setCityName, setDefaultCity, setDefaultWeather, setWeather }