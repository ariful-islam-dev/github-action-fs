const express = require('express');

const app = express();


app.get("/",(req, res)=>{
    res.status(201).send({message: "Hello World"});
})


module.exports = app;