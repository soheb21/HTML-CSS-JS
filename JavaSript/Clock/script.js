const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')

function updateClock() {
    const currDate = new Date();
    setTimeout(updateClock, 1000);
    const hour = currDate.getHours();
    const minute = currDate.getMinutes();
    const second = currDate.getSeconds();
    const hourDeg = (hour / 12) * 360;
    hourEl.style.transform = `rotate(${hourDeg}deg)`;
    const minDeg = (minute / 60) * 360;
    minuteEl.style.transform = `rotate(${minDeg}deg)`;
    const secDeg = (second / 60) * 360;
    secondEl.style.transform = `rotate(${secDeg}deg)`;
}
// updateClock();
setInterval(updateClock(), 1000);