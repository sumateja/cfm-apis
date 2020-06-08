const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser=require('body-parser')

//Database

mongoose.connect('mongodb+srv://fleetuser:newpassword@cluster0-uuisi.mongodb.net/fleetdb?retryWrites=true&w=majority',{newURLParser:true})
.then(()=>{console.log("Connected to Database succsss");})
.catch(err=> console.log(err))

app.use(bodyParser.json());
//Middleware
//Controllers

const AssetControl=require('./app/controllers/assetControl')

//Routes

app.post('/api/vehicle/create',AssetControl.create)
app.post('/api/vehicle/update',AssetControl.update)
app.post('/api/vehicle/retrieve',AssetControl.retrieve)
app.post('/api/vehicle/delete',AssetControl.delete)

//Start Server

app.listen(9090, () => console.log('Server started successfully Listening at port:'+ "9090"))


