document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice6.png");
document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice6.png");

var randomNum1 = Math.floor(Math.random() * 6) ;
var randomNum2 = Math.floor(Math.random() * 6) ;

var allimage = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];


var image1 = "images/" + allimage[randomNum1];
var image2 = "images/" + allimage[randomNum2];
document.getElementsByClassName("img1")[0].setAttribute("src", image1);
document.getElementsByClassName("img2")[0].setAttribute("src", image2);


if (randomNum1 >= randomNum2) {
    document.getElementsByTagName("span")[0].innerHTML = "Player 1 win";
    document.getElementsByClassName("p1win")[0].style.visibility = "visible";
}
else if (randomNum1 === randomNum2) {
    document.getEledocument.getElementsByClassName("img1")[0].setAttribute("src", "images/dice6.png");
document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice6.png");

}
else {
    document.getElementsByTagName("span")[0].innerHTML = "Player 2 win";
    document.getElementsByClassName("p2win")[0].style.visibility = "visible";

}