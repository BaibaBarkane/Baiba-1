// Tiek definēti mainīgie

let inputval = document.querySelector("#cityinput");
let btn = document.querySelector("#add");
let city = document.querySelector("#cityoutput");
let descrip = document.querySelector("#description");
let temp = document.getElementById("temp");
let wind = document.getElementById("wind");
let sunRise = document.getElementById("sunrise");
let sunSet = document.getElementById("sunset");

apik = "3045dd712ffe6e702e3245525ac7fa38";

//funkcija, kas pārvērš Kelvinus Celsija grādos

function toCelcius(val) {
  return (val - 273).toFixed(2);
}

// Pēc SZubmit taustiņa nospiešanas

btn.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputval.value +
      "&appid=" +
      apik
  )
    .then((res) => res.json())
    .then((data) => {
      //iegūstam informāciju no api

      let nameval = data["name"];
      let descrip = data["weather"]["0"]["description"];
      let tempature = data["main"]["temp"];
      let wndspd = data["wind"]["speed"];
      let rise = data["sys"]["sunrise"];
      let set = data["sys"]["sunset"];

      //Izvadām iegūto informāciju
      city.innerHTML = `Weather of <span>${nameval}<span>`;
      temp.innerHTML = `Temperature: <span>${toCelsius(tempature)} C</span>`;
      description.innerHTML = `Sky Conditions: <span>${descrip}<span>`;
      wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`;
      sunRise.innerHTML = `Sun rise: <span.${rise}</span>`;
      sunSet.innerHTML = `Sun set: <span.${set}</span>`;
    })
    .catch((err) => alert("You entered wrong city name"));
});
