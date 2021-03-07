import {
  additionDataFefault, additionalData, processweatherData, setCityName, setDefaultCity,
  setDefaultWeather, setWeather,
} from './weatherData';

const form = document.querySelector('form');

processweatherData().then((obj) => {
  setDefaultCity(obj);
  setDefaultWeather(obj);
  additionDataFefault(obj);
});

const getLocation = (e) => {
  e.preventDefault();
  const city = document.getElementById('city').value;
  processweatherData(city).then((obj) => {
    setCityName(obj);
    setWeather(obj);
    additionalData(obj);
  });
  form.reset();
};

form.addEventListener('submit', getLocation);
