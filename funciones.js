
var db = require('./database.js');

exports.createNewUser = function(email, password, callback)
{
	var validateMail = validateEmail(email);
	if(!validateMail)
	{
		callback({"error":"check Email and Password"});
	}
	else
	{

		//Guardamos en la base de datos
		db.createUser(email,password,function(err){
			if(err)
			{
				callback({"error":"System error"});
			}
			else
			{
				callback({"message":"User saved"});
			}
		});

	}


}

function validateEmail(email)
{
	var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var validate = regex.test(String(email).toLowerCase());
    console.log("ValidMail:"+validate);
    return validate;
}

exports.loginUser = function(email,password,callback)
{
	db.existUser(email, password,function(response_user){
		if(response_user.length==1)
			{
				callback({"message":"User valid"});
			}
			else
			{
				callback({"message":"User invalid"});
			}
	});
}