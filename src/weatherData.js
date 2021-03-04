async function hitApiandReturn(location) {
  const key = process.env.APP_KEY
  console.log(key);
  const weatherData = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Abbottabad&appid=key')
  const response = await weatherData.json();
  console.log(response.main.temp);
}
export { hitApiandReturn }