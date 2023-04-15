/*-------Clock------*/

//get current time
function digitalClock() {
    var today = new Date();

    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    hours = hours > 24 ? hours % 24 : hours;


    //Add the 0 for the values lower than 10
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }


    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;

}

var updateClock = setInterval(digitalClock, 1000);

//Get the date
var today = new Date();
const dayNumber = today.getDate();
const year = today.getFullYear();
const dayName = today.toLocaleString("default", { weekday: "short" });
const monthName = today.toLocaleString("default", { month: "short" });


document.querySelector(".day-name").innerHTML = dayName;
document.querySelector(".day-number").innerHTML = dayNumber;
document.querySelector(".month-name").innerHTML = monthName;
document.querySelector(".year").innerHTML = year;
