const secondsEl = document.getElementById("seconds")
const minutesEl = document.getElementById("minutes")
const hoursEl  = document.getElementById("hours")
const daysEl = document.getElementById("days")
const newYears = '31 December 2023'

function countdown(){
    const newYearsDate = new Date(newYears)
    const currentDate = new Date() 
    const diff = newYearsDate - currentDate   

    const seconds = Math.floor(diff / 1000) % 60
    const minutes = Math.floor(diff / 1000 / 60) % 60
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24
    const days = Math.floor(diff / 1000 / 60 / 60 / 24)

    secondsEl.innerHTML = formatTime(seconds)
    minutesEl.innerHTML = formatTime(minutes)
    hoursEl.innerHTML = formatTime(hours)
    daysEl.innerHTML = days
}

function formatTime(time){
    return time < 10 ? '0' + time : time 
}

countdown()

setInterval(countdown, 1000)
