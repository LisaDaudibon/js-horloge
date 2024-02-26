let hours = document.getElementById("hours")
let minutes = document.getElementById("minutes")
let seconds = document.getElementById("seconds")

let start = document.getElementById("start")

function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
}

function declareHours () {
    let currentHour = new Date;
    currentHour = currentHour.getHours().toString().padStart(2, '0');
    hours.innerHTML = currentHour + " : "
}

function declareMinutes() {
    let currentMinutes = new Date;
    currentMinutes = currentMinutes.getMinutes().toString().padStart(2, '0');
    minutes.innerHTML = currentMinutes + " : "
}

function declareSeconds() {
    let currentSeconds = new Date;
    currentSeconds = currentSeconds.getSeconds().toString().padStart(2, '0');
    seconds.innerHTML = currentSeconds
}

function declareTime () {
    declareHours();
    declareMinutes();
    declareSeconds();
    console.log('time')
}

let intervalClock = setInterval(declareTime, 1000)
// start.addEventListener("click", declareTime())

const stopClock = clearInterval(intervalClock)