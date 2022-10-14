const clock = document.querySelector("h2#clock")

function getClock(){
    const date=new Date()
    const hours=String(date.getHours()).padStart(2,"0")
    const Minutes=String(date.getMinutes()).padStart(2,"0")
    const Seconds=String(date.getSeconds()).padStart(2,"0")
    clock.innerText=`${hours}:${Minutes}:${Seconds}`
}

getClock()
setInterval(getClock, 1000)
// setTimeout(sayHello, 5000)
// setInterval(sayHello, 5000)
// (function, ms) 구조.