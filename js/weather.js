const API_KEY = "a6a830c1279b24bba9d994e81668021f";

async function suc(pos) {
  const lat = pos.coords.latitude;
  const lng = pos.coords.longitude;
  const data = await axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    )
    .then((res) => {
      const data = res.data;
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = `${data.weather[0].main} , ${data.main.temp}℃`;
      city.innerText = data.name;
    });
}

function err() {
  alert("Error Occured!!");
}

navigator.geolocation.getCurrentPosition(suc, err);
