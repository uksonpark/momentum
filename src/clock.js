const clockArea = document.querySelector(".js-clock h1");

function clock() {
    const time = new Date();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    clockArea.innerHTML = `${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}:${second < 10 ? `0${second}` : second}`;
}

function init() {
    setInterval(clock, 1000);
}

init();