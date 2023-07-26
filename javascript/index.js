function updateTime() {
  // Haarlem
  let haarlemElement = document.querySelector("#haarlem");
  if (haarlemElement) {
    let haarlemDateElement = haarlemElement.querySelector(".date");
    let haarlemTimeElement = haarlemElement.querySelector(".time");
    let haarlemTime = moment().tz("Europe/Amsterdam");

    haarlemDateElement.innerHTML = haarlemTime.format("dddd, MMMM Do, YYYY");
    haarlemTimeElement.innerHTML = haarlemTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Kyiv
  let kyivElement = document.querySelector("#kyiv");
  if (kyivElement) {
    let kyivDateElement = kyivElement.querySelector(".date");
    let kyivTimeElement = kyivElement.querySelector(".time");
    let kyivTime = moment().tz("Europe/Kiev");

    kyivDateElement.innerHTML = kyivTime.format("dddd, MMMM	Do, YYYY");
    kyivTimeElement.innerHTML = kyivTime.format("h:mm:ss [<small>]A[</small>]");
  }
  // Denver

  let denverElement = document.querySelector("#denver");
  if (denverElement) {
    let denverDateElement = denverElement.querySelector(".date");
    let denverTimeElement = denverElement.querySelector(".time");
    let denverTime = moment().tz("America/Denver");

    denverDateElement.innerHTML = denverTime.format("dddd, MMMM	Do, YYYY");
    denverTimeElement.innerHTML = denverTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("dddd, MMMM	Do, YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  <a href="/"> Return to world clock</a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
