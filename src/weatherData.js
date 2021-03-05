const getWeatherData = async (location) => {
  const key = 'ab1bb349d168e0577aa7f9a8a76025a4';
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`
  const weatherData = await fetch(url);
  return weatherData;
};
const processweatherData = async (location = 'Abbottabad') => {
  const response = await getWeatherData(location);
  const data = await response.json();
  return data
};

export { processweatherData }