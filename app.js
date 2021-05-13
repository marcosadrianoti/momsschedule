
const currenteDateContainer = document.querySelector('#currenteDate')
const currentCaregiverContainer = document.querySelector('#currentCaregiver');
const secondsContainer = document.querySelector('#seconds');
const minutesContainer = document.querySelector('#minutes');
const hoursContainer = document.querySelector('#hours');
const daysContainer = document.querySelector('#days');
const spinnerLoading = document.querySelector('#loading');
const countdownContainer = document.querySelector('#countdown');

const periodInMilliseconds = 0.0001 * 24 * 60 * 60 * 1000;
const caregivers = ["Marcos", "Marcelo", "Márcia"];
const initialTime = new Date("05 13 2021 14:18:00");
var finalDateToSwitch = new Date(Date.parse(initialTime) + periodInMilliseconds);


const currentCaregiver = (caregivers, initialTime, period, finalDateToSwitch) => {

}


// Testing of aquisiting datas

function monthData(mes, ano) {
    var howManyDays = new Date(ano, mes, 0);
    var monthsFirstDay = new Date(2021, mes - 1);

    return [howManyDays.getDate(), monthsFirstDay.getDay()];
}

const [howManyDays, monthsFirstDay] = monthData(2, 2021);



const getTimeUnit = unit => unit < 10 ? "0" + unit : unit

const currentDate = new Date();

currenteDateContainer.textContent = 
    getTimeUnit(currentDate.getDate()) + "/" + 
    getTimeUnit(currentDate.getMonth() + 1) + "/" +
    currentDate.getFullYear();

    currentCaregiverContainer.textContent = `Tempo restante com ${caregivers[0]}`;


const insertCountdownValues = ({days, hours, minutes, seconds}) => {
    secondsContainer.textContent = getTimeUnit(seconds);
    minutesContainer.textContent = getTimeUnit(minutes);
    hoursContainer.textContent = getTimeUnit(hours);
    daysContainer.textContent = getTimeUnit(days);
}
var teste = "teste" //global
const updateCountdown = () => {
    const currentTime = new Date();
    const difference =  finalDateToSwitch - currentTime;
    const days = Math.floor(difference / 1000 / 60 / 60 / 24);
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(difference / 1000 / 60) % 60;
    const seconds = Math.floor(difference / 1000) % 60;

    console.log(difference, teste);
    teste = "teste2" //mudou global

    if (days == 0 & hours == 0 & minutes == 0 & seconds == 0) {
        console.log("troca")
        finalDateToSwitch = new Date(Date.parse(currentTime) + periodInMilliseconds);
        currentCaregiverContainer.textContent = `Tempo restante com ${caregivers[1]}`;
    }

    insertCountdownValues({days, hours, minutes, seconds})
};

const handleCountdownDiplay = () => {
    spinnerLoading.remove();
    countdownContainer.style.display = "flex";
}

setTimeout(handleCountdownDiplay, 1000);

setInterval(updateCountdown, 1000);