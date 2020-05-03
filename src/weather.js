const weather = document.querySelector(".js-weather");

const COORDS_LS = "coords";
const API_KEY = "9db64eb8262679f1025a232b79197683";

function getWeather(coords) {
    const lat = coords.latitude,
        lon = coords.longitude;

    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(response => { return response.json() })
        .then(data => {
            const temp = data.main.temp;
            const place = data.name;
            weather.innerText = `${temp}ºC @ ${place}`
        })
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS_LS, JSON.stringify(coordsObj));
}

function getSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    }
    saveCoords(coordsObj);
    getWeather(coordsObj);
}

function getError() {
    console.log("Can't access geolocation");
}

function getPosition() {
    navigator.geolocation.getCurrentPosition(getSuccess, getError);
}

function loadPosition() {
    const currentCoords = localStorage.getItem(COORDS_LS)
    if (currentCoords) {
        const parsedCoords = JSON.parse(currentCoords);
        getWeather(parsedCoords);
    } else {
        getPosition();
    }
}

function init() {
    loadPosition();
}

init();