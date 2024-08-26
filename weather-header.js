const URL =
  "https://api.openweathermap.org/data/2.5/weather?q=tooele&units=imperial&appid=ea1224e9743617c3ad4a24cd46952863";

fetch(URL)
  .then((response) => response.json())
  .then((jsObject) => {
    let data = jsObject;
    console.log(jsObject.main.temp);
    console.log(jsObject.weather[0].description);
    document.querySelector("#current-desc").innerHTML =
      data.weather[0].description;
    document.querySelector("#current-temp").innerHTML = data.main.temp;
    document.querySelector("#current-feelsLike").innerHTML =
      data.main.feels_like;
    document.querySelector("#current-humid").innerHTML = data.main.humidity;
    document.querySelector("#current-windSpeed").innerHTML = data.wind.speed;
    document.querySelector("#icon").innerHTML = data.weather[0].icon;

    let temp = data.main.temp;
    let windSpeed = data.wind.speed;
    var windChill =
      35.74 +
      0.6215 * temp -
      35.75 * Math.pow(windSpeed, 0.16) +
      0.4275 * temp * Math.pow(windSpeed, 0.16);
    var windChill = Math.round(windChill);
    document.getElementById("current-windChill").innerHTML = windChill;
  });
//
