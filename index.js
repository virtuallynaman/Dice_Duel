var randomNumber1 = Math.floor((Math.random() * 5) + 1);
var randomNumber2 = Math.floor((Math.random() * 5) + 1);

if (randomNumber1 === 1) {
    document.querySelector(".img1").setAttribute("src", "images/dice1.png");
}

if (randomNumber1 === 2) {
    document.querySelector(".img1").setAttribute("src", "images/dice2.png");
}
if (randomNumber1 === 3) {
    document.querySelector(".img1").setAttribute("src", "images/dice3.png");
}
if (randomNumber1 === 4) {
    document.querySelector(".img1").setAttribute("src", "images/dice4.png");
}
if (randomNumber1 === 5) {
    document.querySelector(".img1").setAttribute("src", "images/dice5.png");
}
else {
    document.querySelector(".img1").setAttribute("src", "images/dice6.png");
}
