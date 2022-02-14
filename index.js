const express = require("express");
const res = require("express/lib/response");
const app = express()
let PORT = process.env.PORT || 3000;
const imporData = require("./data.json")

app.get("/", (req, res) => {
    res.send("Hello World")
});

app.get("/pikachu", (req, res) => {
    res.send(imporData);
});

app.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}`);
});