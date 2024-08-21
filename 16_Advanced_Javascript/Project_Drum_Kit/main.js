//sounds
var sound_1 = new Audio("sounds/tom-1.mp3");
var sound_2 = new Audio("sounds/tom-2.mp3");
var sound_3 = new Audio("sounds/tom-3.mp3");
var sound_4 = new Audio("sounds/tom-4.mp3");
var sound_5 = new Audio("sounds/snare.mp3");
var sound_6 = new Audio("sounds/crash.mp3");
var sound_7 = new Audio("sounds/kick-bass.mp3");

//----------------------------------------------------------------------------------------------------

//animate button function
function animateButton(buttonID) {
    console.log("Button ID = " + buttonID)
    var activeButton = document.querySelector("#" + buttonID);
    activeButton.classList.add("pressed");
    setTimeout(function() {activeButton.classList.remove("pressed");}, 100);
}

//determine number of buttons
var numButtons = document.querySelectorAll("button").length

//iterate through all document buttons
for (let i = 0; i < numButtons; i++) {
                
    //add event listener
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        var buttonID = this.id;
        console.log(buttonID + " : clicked");

        //set switch conditions for the corresponding button IDs
        switch (buttonID) {
            case "button-1" :
                sound_1.play();
                console.log("sound-1 : playing");
                animateButton(buttonID);
                break;
            case "button-2" :
                sound_2.play();
                console.log("sound-2 : playing");
                animateButton(buttonID);
                break;
            case "button-3" :
                sound_3.play();
                console.log("sound-3 : playing");
                animateButton(buttonID);
                break;
            case "button-4" :
                sound_4.play();
                console.log("sound-4 : playing");
                animateButton(buttonID);
                break;
            case "button-5" :
                sound_5.play();
                console.log("sound-5 : playing");
                animateButton(buttonID);
                break;
            case "button-6" :
                sound_6.play();
                console.log("sound-6 : playing");
                animateButton(buttonID);
                break;
            case "button-7" :
                sound_7.play();
                console.log("sound-7 : playing");
                animateButton(buttonID);
                break;
            default:
                console.log("error : no button detected");
                break;
        }
    });
}

//----------------------------------------------------------------------------------------------------

//to check if a specific key is pressed down, create an event listener of type "keydown"
document.addEventListener("keydown", function(event) {
    var key = event.key;
    console.log(key + " : key pressed");

    //set switch conditions for corresponding keys
    switch (key) {
        case "w" :
            sound_1.play();
            console.log("sound-1 : playing");
            buttonID = "button-1"
            animateButton(buttonID);
            break;
        case "a" :
            sound_2.play();
            console.log("sound-2 : playing");
            buttonID = "button-2"
            animateButton(buttonID);
            break;
        case "s" :
            sound_3.play();
            console.log("sound-3 : playing");
            buttonID = "button-3"
            animateButton(buttonID);
            break;
        case "d" :
            sound_4.play();
            console.log("sound-4 : playing");
            buttonID = "button-4"
            animateButton(buttonID);
            break;
        case "f" :
            sound_5.play();
            console.log("sound-5 : playing");
            buttonID = "button-5"
            animateButton(buttonID);
            break;
        case "g" :
            sound_6.play();
            console.log("sound-6 : playing");
            buttonID = "button-6"
            animateButton(buttonID);
            break;
        case "h" :
            sound_7.play();
            console.log("sound-7 : playing");
            buttonID = "button-7"
            animateButton(buttonID);
            break;
        default:
            console.log("error : no key detected");
            break;
    }
});