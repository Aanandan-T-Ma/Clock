const hourHand = document.querySelector('.hour-hand')
const minuteHand = document.querySelector('.min-hand')
const secondHand = document.querySelector('.sec-hand')
const hoursPlace = document.querySelector('.hours')
const minutesPlace = document.querySelector('.minutes')
const secondsPlace = document.querySelector('.seconds')
const apmPlace = document.querySelector('.apm')

const date = new Date()
var seconds = date.getSeconds()
var minutes = date.getMinutes()
var hours = date.getHours()
var apm = (hours<12)? 'AM' : 'PM'

for(let i=1;i<=12;i++){
    let no = document.querySelector('.no'+i)
    no.style.transform = 'rotate(' + (i*30) + 'deg)'
    for(let j=(i-1)*5+1;j<=(i-1)*5+4;j++){
        let div = document.createElement('div')
        div.innerHTML = '|'
        div.classList.add('line')
        div.style.transform = 'rotate(' + (j*6) + 'deg)'
        no.insertAdjacentElement('beforebegin', div)
    }
}

setTimes()

setInterval(setTimes, 1000)

function setTimes(){
    setAnalog()
    setDigital()
    getTime()
}

function setAnalog(){
    let secondsDeg = seconds*6
    let minutesDeg = minutes*6 + seconds/10
    let hoursDeg = (hours%12)*30 + minutes/2
    secondHand.style.transform = 'rotate(' + secondsDeg + 'deg)'
    minuteHand.style.transform = 'rotate(' + minutesDeg + 'deg)'
    hourHand.style.transform = 'rotate(' + hoursDeg + 'deg)'
}

function setDigital(){
    let h = hours%12
    hoursPlace.innerHTML = h? (h>9? h : '0'+h) : 12
    minutesPlace.innerHTML = (minutes>9)? minutes : '0'+minutes
    secondsPlace.innerHTML = (seconds>9)? seconds : '0'+seconds
    apmPlace.innerHTML = apm
}

function getTime(){
    seconds = (seconds+1)%60
    if(seconds === 0){
        minutes = (minutes+1)%60
        if(minutes === 0)
            hours = (hours+1)%24
    }
    apm = (hours<12)? 'AM' : 'PM'
}