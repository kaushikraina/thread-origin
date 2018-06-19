var request = require('request');
var requestify = require('requestify'); 
var constant = require('../config');

exports.addAccount = function(req,res){    
    requestify.request(constant.ADMIN_URL,{
        method: 'POST',
        body:{
                
                "username" : constant.ADMIN_USERNAME,
	            "password" : constant.ADMIN_PASSWORD
        
        },
        headers:{
            'content-type' : 'application/json; charset=utf-8'
        }
    }).then(function(response) {
                var token = response.body.replace(/"/g,'');
                requestify.request(constant.ADD_ACCOUNT,{
                    method: 'POST',
                    headers:{
                        'authorization' : 'Bearer '+token,
                        'content-type' : 'application/json; charset=utf-8'
                    },
                    body : {
                        'customer': {
                            "email" : req.body.email,
                            "firstname" : req.body.firstname,
                            "lastname" : req.body.lastname,
                            "storeId" : 1,
                            "websiteId" : 1
                        },
                        
                        "password" : req.body.password
                    }
                }).then(function(response) {
                            res.send(response.body);                            
                        })
                .catch(function(err){
                    res.send(err);
                });
            })
    .catch(function(err){
        res.send(err);
    });
  };




  exports.getAccount = function(req,res){    
    requestify.request(constant.ADMIN_URL,{
        method: 'POST',
        body:{
                
                "username" : constant.ADMIN_USERNAME,
	            "password" : constant.ADMIN_PASSWORD
        
        },
        headers:{
            'content-type' : 'application/json; charset=utf-8'
        }
    }).then(function(response) {
                var token = response.body.replace(/"/g,'');
                requestify.request(constant.GET_ACCOUNT+req.params.id,{
                    method: 'GET',
                    headers:{
                        'authorization' : 'Bearer '+token,
                        'content-type' : 'application/json; charset=utf-8'
                    }
                }).then(function(response) {
                            res.send(response.body);                            
                        })
                .catch(function(err){
                    res.send(err);
                });
            })
    .catch(function(err){
        res.send(err);
    });
  };


  exports.validateAccount = function(req,res){    
    requestify.request(constant.AUTHENTICATE_USER,{
        method: 'POST',
        body:{                
                "username" : req.body.email,
	            "password" : req.body.password        
        },
        headers:{
            'content-type' : 'application/json; charset=utf-8'
        }
    }).then(function(response) {
                if(response.statusCode == 401)
                    res.json({success : "false"});
                else
                    res.json({success : "true"});    
            })
    .catch(function(err){
        res.send(err);
    });
  };



