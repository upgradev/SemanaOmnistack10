const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('')

app.use(express.json()); //reconhecer o envio json

//get post put delete

//tipos de parametros
///query params, router params, body

app.get('/users', (request, response) => {
    console.log(request.body);
    
    return response.json({ message: 'Hello world' });
})

app.listen(3333);