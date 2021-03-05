import { processweatherData } from './weatherData';
  
console.log(processweatherData());
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = document.getElementById('city').value;
    processweatherData(city);
    form.reset();
  });
