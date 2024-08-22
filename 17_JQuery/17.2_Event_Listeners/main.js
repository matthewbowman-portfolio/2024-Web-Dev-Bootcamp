//add event listener for all clicks
$(document).click(function(click) {

    //log the click event and expand to see attributes
    console.log(click);

    //log pointer position at time of click
    console.log("pointer position");
    console.log("offsetX : " + click.offsetX);
    console.log("offsetY : " + click.offsetY);
});

//add event listeners for all key presses
$(document).keypress(function(event) {
    
    //log the keypress event and expand to see attributes
    console.log(event);

    //log event key
    console.log(event.key + " key : pressed");
});