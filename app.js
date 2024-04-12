const express = require('express');

const app = express();


app.get("/",(req, res)=>{
    res.status(201).send({message: "Hello World"});
})

app.use((req, res, next)=>{
    res.status(404).send({message: "Page Not Found"})
})


module.exports = app;