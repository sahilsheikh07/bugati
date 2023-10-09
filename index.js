const change = document.querySelectorAll(".event")
// console.log(change)

change.forEach((asdf) => {
    asdf.addEventListener("click", (e) => {
        // console.log(e.target)
        if (e.target.id === "red") {
            document.body.style.backgroundImage = 'url("img/bike_red.jpg")'
        } else if (e.target.id === "blue") {
            document.body.style.backgroundImage = 'url("img/bike_blue.jpg")'
        } else if (e.target.id === "black") {
            document.body.style.backgroundImage = 'url("img/bike_black.jpg")'
        } else {
            document.body.style.backgroundImage = 'url("img/bike_red.jpg")'
        }
    })
})