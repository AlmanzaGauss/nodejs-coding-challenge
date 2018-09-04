
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";


exports.createUser = function(name,password,callback){
MongoClient.connect(url,function(err, db){
	if(err)
	{
		throw err;
	}
	else
	{
		console.log("Conectado");
		var dbo = db.db("codeChallengeAlmanza");
  		var user = { name: name, password: password };
  		dbo.collection("users").insertOne(user, function(err, res) {
  	  	if (err) throw err;
  	  	console.log("Registrado correctamente");
    	callback(err);
    	db.close();
    	});
	}
  		});
}

exports.existUser = function(email,password,callback)
{
	MongoClient.connect(url,function(err, db){
	if(err)
	{
		throw error;
	}
	else
	{
		console.log("Conectado");
		var dbo = db.db("codeChallengeAlmanza");
		dbo.collection("users").find({$and:[{"name":email}, {"password":password}]}).toArray(function(error, res) {
			if (error) throw error;
  	  		callback(res);
    		db.close();
			});
	}
  		});
}



		
		
  	  	
    	