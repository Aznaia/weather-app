function formatDate(date) {
    let currentDate = date.getDate();
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let year = date.getFullYear();
    let dayIndex = date.getDay();
    let monthIndex = date.getMonth();
  
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[dayIndex];
    let months = [
      "Jan",
      "Feb",
      "March",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    let month = months[monthIndex];
  
    return `${month} ${currentDate}, ${day} ${hours}:${minutes}, ${year}`;
  }
  
  let todaysDate = document.querySelector("#current-date");
  let currentTime = new Date();
  
  todaysDate.innerHTML = formatDate(currentTime);
  
  // Search form
  function displayWeather(response) {
    document.querySelector("#current-city").innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML = Math.round(
      response.data.main.temp
    );
    document.querySelector("#humidity").innerHTML = Math.round(
      response.data.main.humidity
    );
    document.querySelector("#wind").innerHTML = Math.round(
      response.data.wind.speed
    );
    document.querySelector("#description").innerHTML =
      response.data.weather[0].main;
  }
  
  function searchButton(event) {
    event.preventDefault();
    let apiKey = "e937ae3f7a274820b678821bd8a9635d";
    let city = document.querySelector("#city-input").value;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  
  let searchForm = document.querySelector(".search-form");
  searchForm.addEventListener("submit", searchButton);
  
  // Celcius to Fahrenheit
  function convertToFahrenheit(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    let temperature = temperatureElement.innerHTML;
    temperatureElement.innerHTML = Math.round((temperature * 9) / 5 + 32);
  }
  let fahrenheitLink = document.querySelector("#fahrenheit-link");
  fahrenheitLink.addEventListener("click", convertToFahrenheit);
  // Celsius
  function convertToCelsius(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    let temperature = temperatureElement.innerHTML;
    temperatureElement.innerHTML = Math.round((temperature * 9) / 5 + 32);
  }
  let celsiusLink = document.querySelector("#celsius-link");
  celsiusLink.addEventListener("click", convertToCelsius);
  