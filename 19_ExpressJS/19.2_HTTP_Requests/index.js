//in terminal type the following:
// npm init -y
// npm i express

//this will create a json package and import many node modules
//make sure package.json file has type set to module

import express from "express";
const app = express();
const port = 3000;

//get root "/"
app.get("/", (req, res) => {
    console.log("Request Details:");
    console.log(req.rawHeaders);
    res.send("Hello World!~~");
})

//get "/about"
app.get("/about", (req, res) => {
    res.send("I am a web-developer!");
})

//get "/contact"
app.get("/contact", (req, res) => {
    res.send("You can reach me at 555-555-5555");
})

//listen function with port configuration
app.listen(3000, () => {
    console.log(`Server running on Port ${port}`);
})