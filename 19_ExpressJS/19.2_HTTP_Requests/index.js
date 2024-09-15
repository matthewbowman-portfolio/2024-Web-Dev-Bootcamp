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
    console.log("\n----------------------------------------------------------------------------------------------------\n");
    console.log(`Request made : ${new Date()}\n`);
    console.log(req.headers);
    res.sendFile("C:/Users/machu/Portfolio_Directory/2024-Web-Dev-Bootcamp/19_ExpressJS/19.2_HTTP_Requests/index.html");
})

//get "/download"
app.get("/download", (req, res) => {
    res.download("C:/Users/machu/Portfolio_Directory/2024-Web-Dev-Bootcamp/19_ExpressJS/19.2_HTTP_Requests/index.js");
})

//get "/about"
app.get("/about", (req, res) => {
    res.send("I am a web-developer!");
})

//get "/contact"
app.get("/contact", (req, res) => {
    res.send("You can reach me at 555-555-5555");
})

//set listen function and configure port
app.listen(3000, () => {
    console.log("\n----------------------------------------------------------------------------------------------------\n");
    console.log(`Server Running on Port ${port}`);
})