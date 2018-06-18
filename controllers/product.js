var request = require('request');
var requestify = require('requestify'); 
var constant = require('../config');

exports.getProduct = function(req,res){
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
                requestify.request(constant.PRODUCT_INFO+req.params.sku,{
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


  exports.getCategoryProducts = function(req,res){
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
                requestify.request(constant.SEARCH_PRODUCT+req.params.category+constant.CONFIGURABLE_PRODUCTS,{
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






