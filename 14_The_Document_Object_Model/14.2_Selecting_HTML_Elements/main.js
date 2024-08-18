//get element by id
console.log(document.getElementById("title"));

//get element inner html
console.log(document.getElementById("title").innerHTML);

//change inner html
document.getElementById("h2").innerHTML = "h2 +";

//get element with query selector
console.log(document.querySelector("h2"));

//get element inner html
console.log(document.querySelector("h2").innerHTML);

//query select by id
console.log(document.querySelector("#list"));

//query select by class
console.log(document.querySelector(".btn"));