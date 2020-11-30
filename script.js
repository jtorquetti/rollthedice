function load(){
var img1 = window.document.getElementById('img1')
var img2 = window.document.getElementById('img2')
var winner = window.document.getElementById('winner')

var randomNumber1 = Math.floor((Math.random() * 6) + 1 )
var randomDiceImage = "dice" + randomNumber1 + ".png"
var randomImageSource = "images/" + randomDiceImage
img1.setAttribute("src", randomImageSource)

var randomNumber2 = Math.floor((Math.random() * 6) + 1)
var randomDiceImage = "dice" + randomNumber2 + ".png"
var randomImageSource = "images/" + randomDiceImage
img2.setAttribute("src", randomImageSource)

    if (randomNumber1 > randomNumber2) {
        winner.innerHTML = "🚩Player 1 Wins"
    } else if (randomNumber2 > randomNumber1) {
        winner.innerHTML = "Player 2 Wins🚩"
    } else {
        winner.innerHTML = "🚩Draw!🚩"
    }
}

