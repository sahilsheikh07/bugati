const redbike = document.getElementById('red')
const bluebike = document.getElementById('blue')
const blackbike = document.getElementById('black')
const bike = document.querySelector('body')

redbike.addEventListener("click", (e) => {
    bike.style.backgroundImage = 'url("img/bike_red.jpg")'
})
bluebike.addEventListener("click", (e) => {
    bike.style.backgroundImage = 'url("img/bike_blue.jpg")'
})
blackbike.addEventListener("click", (e) => {
    bike.style.backgroundImage = 'url("img/bike_black.jpg")'
})
