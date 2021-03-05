import { processweatherData, setCityName, setDefaultCity, setDefaultWeather, setWeather } from './weatherData';

const form = document.querySelector('form');

processweatherData().then((obj) => {
  setDefaultCity(obj);
  setDefaultWeather(obj);
});

const getLocation = (e) => {
  e.preventDefault();
  const city = document.getElementById('city').value;
  processweatherData(city).then((obj) => {
    setCityName(obj);
    setWeather(obj);
  });
  form.reset();
};

form.addEventListener('submit', getLocation);
