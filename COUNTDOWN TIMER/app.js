

const daysEl = document.getElementById('day-el')
const hrsEl = document.getElementById('hr-el')
const minsEl = document.getElementById('min-el')
const secsEl = document.getElementById('sec-el')


const newYear = '1 Jan 2025'
function countDown(){
    const newyearDate = new Date(newYear)
    const currentDate = new Date()

    const totalRemSec = (newyearDate - currentDate)/1000
    const days = Math.floor((totalRemSec / 3600) / 24)
    const hrs = Math.floor((totalRemSec / 3600) % 24)
    const mins = Math.floor((totalRemSec / 60) % 60)
    const secs = Math.floor((totalRemSec) % 60)
    
    daysEl.textContent = formatTime(days)
    hrsEl.textContent = formatTime(hrs)
    minsEl.textContent = formatTime(mins)
    secsEl.textContent = formatTime(secs)
    }
  

function formatTime(time){
    return time < 10 ? `0${time}` : time
}

countDown()

setInterval(countDown, 1000)