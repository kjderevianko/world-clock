function updateTime() {
  // Amsterdam
  let amsterdamElement = document.querySelector("#amsterdam");
  let amstedamDateElement = amsterdamElement.querySelector(".date");
  let amsterdamTimeElement = amsterdamElement.querySelector(".time");
  let amsterdamTime = moment().tz("Europe/Amsterdam");
  amstedamDateElement.innerHTML = amsterdamTime.format("MMMM Do YYYY");
  amsterdamTimeElement.innerHTML = amsterdamTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
  // Kyiv
  let kyivElement = document.querySelector("#kyiv");
  let kyivDateElement = kyivElement.querySelector(".date");
  let kyivTimeElement = kyivElement.querySelector(".time");
  let kyivTime = moment().tz("Europe/Kiev");
  kyivDateElement.innerHTML = kyivTime.format("MMMM Do YYYY");
  kyivTimeElement.innerHTML = kyivTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
