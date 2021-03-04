  const getWeatherData = async(location)=> {
  const key = process.env.APP_KEY;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`
  const weatherData = await fetch(url);
  return weatherData;
};
const processweatherData = async(location) => {
  const response = await getWeatherData(location);
  const data = await response.json();
  return data
};
export { processweatherData }