import {
  additionDataFefault, additionalData, processweatherData, setCityName, setDefaultCity,
  setDefaultWeather, setWeather,
} from './weatherData';

import './style.css';

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
  }).catch((error) => {
    alert(error.name + ': Please Enter A Valid City Name!');
  })
  form.reset();
};

form.addEventListener('submit', getLocation);

  const check = document.getElementsByClassName('checkbox')[0];
  check.addEventListener('click', () => {
    if(check.value == 'F') {
      check.value = 'C';
    }
    else {
      check.value = 'F';
    }
    console.log(check.value)
  })