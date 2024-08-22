//change text color 
$("h1").css("color", "blue");

//add class to element
$("button").addClass("purple-background");

//remove class
$("button").removeClass("purple-background");

//change text
$("button").text("click here");
$("a").text("www.google.com");

//change attribute
$("a").attr("href", "https://www.bing.com");

//iterate through all buttons and assign unique id
for (let i = 0; i < $("button").length; i++) {
    $("button")[i].id = "button-" + (i + 1);
    console.log($("button")[i].id + " ID : Created");  
}