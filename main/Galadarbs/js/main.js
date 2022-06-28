// Definējam mainīgos

let inputval = document.querySelector("#cityinput");
let btn = document.querySelector("#add");
let city = document.querySelector("#cityoutput");
let descrip = document.querySelector("#description");
let temp = document.querySelector("#temp");
let wind = document.querySelector("#wind");

let apik = "3045dd712ffe6e702e3245525ac7fa38";

//Funkcija, kas pārvērš Kelvinus Celsija grādos

function toCelcius(val) {
  return (val - 273).toFixed(2);
}

// Pēc Submit taustiņa nospiešanas ar fetch metodi iegūstam informāciju no api

btn.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputval.value +
      "&appid=" +
      apik
  )
    .then((res) => res.json())
    .then((data) => {
      //Iegūto informāciju saglabājam mainīgajos

      let nameval = data["name"];
      let descrip = data["weather"]["0"]["description"];
      let temperature = data["main"]["temp"];
      let wndspd = data["wind"]["speed"];

      //Izmantojot innerHTML, izvadām iegūto informāciju

      city.innerHTML = `Weather of <span>${nameval}<span>`;
      temp.innerHTML = `Temperature: <span>${toCelsius(temperature)} C</span>`;
      description.innerHTML = `Sky Conditions: <span>${descrip}<span>`;
      wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`;
    })

    //Ja pieprasītā pilsēta nav atrodama, izvadām kļūdas paziņojumu

    .catch((err) => alert("Wrong city name"));
});
