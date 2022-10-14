const API_KEY = "03d0567e8463e7b61948310ef5d098e8"

function onGeoOk(position){
    const lat = position.coords.latitude
    const lng = position.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weatherContainer = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name
        weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}`
    })
}
// fetch는 promise. 즉발식이 아니라 지연식.
// 서버 지연을 생각하면 then이 필수적.

function onGeoErr(){
    alert("Can't find your location")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr)
