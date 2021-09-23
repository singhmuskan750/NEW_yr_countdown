


















const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const newYear = "1 Jan 2022"; 

function countdown() {

    //Set two dates to two variables
    const newYearDate = new Date(newYear); // Date of New Years 
    const currentDate = new Date(); //current day is

    //Calculations 
    const totalSeconds = (newYearDate - currentDate) / 1000; // Divided by miliseconds  

    const days = Math.floor(totalSeconds / 3600 / 24); //Divided by Minutes and Hours (60 minutes in a day * 60 Hours in a day = 3600, divided by 24 which is how many hours are in a day)
    const hours = Math.floor(totalSeconds / 3600) % 24; 
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60; 

   daysEl.innerHTML = formatTime(days); 
   hoursEl.innerHTML =formatTime(hours); 
   minutesEl.innerHTML =formatTime(minutes); 
   secondsEl.innerHTML = formatTime(seconds); 

}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time; 
}
//initial call 
countdown(); 

setInterval(countdown, 1000);










