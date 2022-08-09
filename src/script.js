// Create formatDate function to receive timestamp data
function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let day = date.getDay();
  return `${day} ${hours}:${minutes}`;
}
// Initialize and invoke displayTemperature function that pulls data from OpenWeatherMap
function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature"); // selecting temperature that alters
  temperatureElement.innerHTML = Math.round(response.data.main.temp); // pull the data of the city entered from OpenWeatherMap
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = Math.round(response.data.main.humidity);
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
  let dateElement = document.querySelector("#date");
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
}

let apiKey = "eb2ee96fce77dd8a4eaad97e550c01d8";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=${apiKey}&units=metric`;
console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
