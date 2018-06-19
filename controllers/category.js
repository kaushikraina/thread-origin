var request = require('request');
var requestify = require('requestify'); 
var constant = require('../config');

exports.getCategories = function(req,res){
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
                requestify.request(constant.CATEGORIES_URL,{
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


  exports.getCategoryCamp = function(req,res){
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
                requestify.request(constant.CATEGORY_CAMP_1,{
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


  

  