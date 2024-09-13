//in terminal type the following:
// npm init -y
// npm i express

//this will create a json package and import many node modules
//make sure package.json file has type set to module

import express from "express";
const app = express();
const port = 3000;

app.listen(3000, () => {
    console.log(`Server running on Port ${port}`);
})