//assign a variable to account for button being clicked
const rollDiceButton = document.querySelector("button");
console.log(rollDiceButton);

//create a function for rolling the dice
function rollDice() {
    console.log("Button Clicked");

    //assign variables for the two dice images
    var diceImage1 = document.querySelector("#image-1");
    var diceImage2 = document.querySelector("#image-2");

    //generate two random numbers between 1 and 6
    var randNum1 = Math.floor(Math.random() * 6) + 1;
    var randNum2 = Math.floor(Math.random() * 6) + 1;

    //assign dice images according to random numbers
    diceImage1.setAttribute("src", ("images/dice" + randNum1 + ".png"))
    diceImage2.setAttribute("src", ("images/dice" + randNum2 + ".png"))

    //set win conditions
    if (randNum1 > randNum2) {
        document.querySelector("h2").innerHTML = "Player 1 Wins!"
    }
    else if (randNum2 > randNum1) {
        document.querySelector("h2").innerHTML = "Player 2 Wins!"
    }
    else {
        document.querySelector("h2").innerHTML = "Draw!"
    }
}

//create an event binder for the button
rollDiceButton.onclick = rollDice;