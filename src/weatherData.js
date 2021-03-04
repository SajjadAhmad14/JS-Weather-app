async function getWeatherData(location) {
  const key = process.env.APP_KEY
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`
  const weatherData = await fetch(url)
  const response = await weatherData.json();
  console.log(response);
}
export { getWeatherData }