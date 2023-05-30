(function () {
  `use strict`;

  const h1 = document.querySelector("h1");
  const h2 = document.querySelector("h2");
  const p = document.querySelector("p");
  const form = document.querySelector("#form");

  let convertType = "miles";

  document.addEventListener("keydown", function (event) {
    const key = event.code;

    if (key === "KeyK") {
      convertType = "kilometers";
      h1.innerHTML = "Kilometers to Miles Converter";
      p.innerHTML =
        "Type in a number of kilometers and click the button to convert the distance to miles.";
    } else if (key === "KeyM") {
      convertType = "miles";
      h1.innerHTML = "Miles to Kilometers Converter";
      p.innerHTML =
        "Type in a number of miles and click the button to convert the distance to kilometers.";
    }
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const distance = parseFloat(document.getElementById("distance").value);

    if (distance) {
      let answer = 0;
      if (convertType === "miles") {
        answer = (distance * 0.621371).toFixed(2);
        h2.innerHTML = `${distance} miles converts to ${answer} kilometers.`;
      } else {
        answer = (distance * 1.60934).toFixed(2);
        h2.innerHTML = `${distance} kilometers converts to ${answer} miles.`;
      }
    } else {
      h2.innerHTML = `ERROR. Please, enter a number.`;
    }
  });
})();
