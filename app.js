
const currenteDateContainer = document.querySelector('#currenteDate')
const timeLeftContainer = document.querySelector('#timeLeft');
const secondsContainer = document.querySelector('#seconds');
const minutesContainer = document.querySelector('#minutes');
const hoursContainer = document.querySelector('#hours');
const daysContainer = document.querySelector('#days');
// const nextYearContainer = document.querySelector('#year');
const spinnerLoading = document.querySelector('#loading');
const countdownContainer = document.querySelector('#countdown');

const nextYear = new Date().getFullYear() + 1;
const newYearTime = new Date(`01 01 ${nextYear} 00:00:00`);
const periodInMilliseconds = 0.0001 * 24 * 60 * 60 * 1000;
console.log(periodInMilliseconds);
const caregivers = ["Marcos", "Marcelo", "Márcia"];


// nextYearContainer.textContent = caregivers[0];

function monthData(mes, ano) {
    var howManyDays = new Date(ano, mes, 0);
    var monthsFirstDay = new Date(2021, mes - 1);

    return [howManyDays.getDate(), monthsFirstDay.getDay()];
}

const [howManyDays, monthsFirstDay] = monthData(2, 2021);

// console.log(howManyDays, monthsFirstDay);

const initialTime = new Date("05 10 2021 16:42:00");
const finalDate = new Date(Date.parse(initialTime) + periodInMilliseconds);
console.log(finalDate);

const getTimeUnit = unit => unit < 10 ? "0" + unit : unit

const currentDate = new Date();

currenteDateContainer.textContent = 
    getTimeUnit(currentDate.getDate()) + "/" + 
    getTimeUnit(currentDate.getMonth() + 1) + "/" +
    currentDate.getFullYear();

timeLeftContainer.textContent = `Tempo restante com ${caregivers[0]}`;

// nextYearContainer.textContent = nextYear;


const insertCountdownValues = ({days, hours, minutes, seconds}) => {
    secondsContainer.textContent = getTimeUnit(seconds);
    minutesContainer.textContent = getTimeUnit(minutes);
    hoursContainer.textContent = getTimeUnit(hours);
    daysContainer.textContent = getTimeUnit(days);
}

const updateCountdown = () => {
    const currentTime = new Date();
    const difference =  finalDate - currentTime;
    const days = Math.floor(difference / 1000 / 60 / 60 / 24);
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(difference / 1000 / 60) % 60;
    const seconds = Math.floor(difference / 1000) % 60;

    insertCountdownValues({days, hours, minutes, seconds})
};

const handleCountdownDiplay = () => {
    spinnerLoading.remove();
    countdownContainer.style.display = "flex";
}

setTimeout(handleCountdownDiplay, 1000);

setInterval(updateCountdown, 1000);