let isDobOpen = false
let dateOfBirth;
const settingCog = document.getElementById("settingIcon");
const settingContentEl = document.getElementById("settingContent");
const initialtextEl = document.getElementById("initialtext")
const afterDobEl = document.getElementById("afterDob");
const dobButtonEl = document.getElementById("dobButton");
const dobInputEl = document.getElementById("dobInput");

const yearEl = document.getElementById("year")
const monthEl = document.getElementById("month")
const dayEl = document.getElementById("day")
const hourEl = document.getElementById("hour")
const minEl = document.getElementById("min")
const secEl = document.getElementById("sec")


const toggleDob = () => {
    if (isDobOpen) {
        settingContentEl.classList.add("hide");
    }
    else {
        settingContentEl.classList.remove("hide");
    }
    isDobOpen = !isDobOpen
    console.log("Toggel", isDobOpen)
};

const updateAge = () => {
    const currDate = new Date();
    const dateDiff = currDate - dateOfBirth;
    const year = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
    const month = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365)%12);
    const day = Math.floor(dateDiff / (1000 * 60 * 60 * 24) % 30);
    const hour = Math.floor(dateDiff / (1000 * 60 * 60) % 24);
    const min = Math.floor(dateDiff / (1000 * 60) % 60);
    const sec = Math.floor(dateDiff / 1000) % 60;

    yearEl.innerHTML = year
    monthEl.innerHTML = month
    dayEl.innerHTML = day
    hourEl.innerHTML = hour
    minEl.innerHTML = min
    secEl.innerHTML = sec
}

const setDobHandler = () => {
    const dateString = dobInputEl.value;
    dateOfBirth =dateString? new Date(dateString):null ;
    if (dateOfBirth) {
        initialtextEl.classList.add("hide")
        afterDobEl.classList.remove("hide")
        setInterval(()=>updateAge(),1000);
    }
    else {
        afterDobEl.classList.add("hide")
        initialtextEl.classList.remove("hide")
    }
}
setDobHandler();

settingCog.addEventListener('click', toggleDob)
dobButtonEl.addEventListener('click', setDobHandler)

