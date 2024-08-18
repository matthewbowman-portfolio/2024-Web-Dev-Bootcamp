//get element attributes
console.log(document.querySelector("a").attributes);

//get attribute
console.log(document.querySelector("a").getAttribute("href"));

//set attribute, takes two arguments
document.querySelector("a").setAttribute("href", "https://www.bing.com");

//get attribute again to show change
console.log(document.querySelector("a").getAttribute("href"));