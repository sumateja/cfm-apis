const express = require('express')
const app = express()
const mongoose = require('mongoose')

//Database

mongoose.connect('mongodb+srv://fleetuser:fleetdb07@cluster0-uuisi.mongodb.net/fleetdb?retryWrites=true&w=majority',{newURLParser:true})
.then(()=>{console.log("Connected to Database success");})
.catch(err=> console.log(err))
//Middleware
//Controllers
//Routes
//Start Server

app.listen(9090, () => console.log('Server started successfully'+' Listening at port:'+ "9090"))


