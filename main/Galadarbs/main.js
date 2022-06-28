// local variables:

let inputValue = document.getElementById("cityinput");
let btn = document.getElementById("add");
let temp = document.getElementById("temp");
let descrip = document.querySelector("description");
let wind = document.querySelector("wind");
let sunRise = document.querySelector("sunrise");
let sunSet = document.querySelector("sunset");
let city = "";

let apik = "3045dd712ffe6e702e3245525ac7fa38";

//funkcija, kas pārvērš Celsija grādos
function toCelsius(temp) {
  return (temp - 273).toFixed(2);
}

function renderData() {
  temp.innerHTML = "Temperature: ${data.main.temp)} C";
  let nameval = data["name"];
  let descrip = data["weather"]["0"]["description"];
  let temperature = data["main"]["temp"];
  let wndspd = data["wind"]["speed"];
  let rise = data["sys"]["sunrise"];
  let set = data["sys"]["sunset"];

  city.innerHTML = `Weather of <span>${nameval}<span>`;
  temp.innerHTML = `Temperature: <span>${toCelsius(temperature)} C</span>`;
  description.innerHTML = `Sky Conditions: <span>${descrip}<span>`;
  wind.innerHTML = `Wind speed: <span>${wndspd} km/h<span>`;
  sunRise.innerHTML = `Sunrise: <span.${rise}</span>`;
  sunSet.innerHTML = `Sunset: <span.${set}</span>`;
}

function getData() {
  city = input.Value;
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=" +
      apik
  )
    .then((response) => response.json())
    .then((data) => renderData(data))
    .catch((err) => alert("Wrong city"));
}
btn.addEventListener("click", function () {
  city = inputValue;
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputval.value +
      "&appid=" +
      apik
  )
    .then((res) => res.json())
    .then((data) => renderData(data))

    .catch((err) => alert("You entered Wrong city name"));
});

// fetch metode
// fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
// inputval.value === ievadita pilseta
// apik = "3045dd712ffe6e702e3245525ac7fa38"

// on btn click funkcija
// addEventListener
// fetch
// response
// izvadit datus
// Temperatura tiek pievinota kelvinos lidz ar to nepicišam parveidot tos celcios
// no data pievinotas temperaturas jaatņem 273 tad mes dabusim temperaturu celcios

// datu response piemers
//   {
//     "coord": {
//         "lon": 23.7128,
//         "lat": 56.65
//     },
//     "weather": [
//         {
//             "id": 802,
//             "main": "Clouds",
//             "description": "scattered clouds",
//             "icon": "03d"
//         }
//     ],
//     "base": "stations",
//     "main": {
//         "temp": 293.17,
//         "feels_like": 292.48,
//         "temp_min": 293.17,
//         "temp_max": 293.17,
//         "pressure": 1014,
//         "humidity": 48,
//         "sea_level": 1014,
//         "grnd_level": 1014
//     },
//     "visibility": 10000,
//     "wind": {
//         "speed": 4.6,
//         "deg": 299,
//         "gust": 8.75
//     },
//     "clouds": {
//         "all": 46
//     },
//     "dt": 1655294073,
//     "sys": {
//         "type": 1,
//         "id": 1876,
//         "country": "LV",
//         "sunrise": 1655256795,
//         "sunset": 1655320681
//     },
//     "timezone": 10800,
//     "id": 459279,
//     "name": "Jelgava",
//     "cod": 200
// }
