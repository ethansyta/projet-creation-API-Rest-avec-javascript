const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log('requete reussie');
    next();
});

app.use((req,res,next)=>{
    res.status(201);
    next();
});

app.use((req, res, next)=>{
    res.json ('votre requete est bonne');
});

module.exports = app;