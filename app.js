
var express=require("express");
var app=express();
var bodyparser=require('body-parser');
var http=require('http');
var direccion=require('url');
var funcion=require('./funciones.js');

//Base de datos
var MongoClient = require('mongodb').MongoClient;
var dbo;





app.listen(80);
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }))



app.get('/test',function(req,res){
console.log("Corriendo")
res.json({"message":"Corriendo"});
});

app.get('/hello',function(req,res){
console.log("Entro a Hello");
res.json({"hello":"world"});
});

//Servicio para dar de alta ususario
app.post('/',function(req,res){
console.log("Register new user");
var email=req.body.email; //Recibo parametro email
var password=req.body.password;//Recibo parametro password
funcion.createNewUser(email, password, function(response_user){
		res.json(response_user);
	});
});


app.post('/auth',function(req,res){
	var email=req.body.email; //Recibo parametro email
	var password=req.body.password;//Recibo parametro password
	funcion.loginUser(email, password, function(response_user){
		res.json(response_user);
	});
});