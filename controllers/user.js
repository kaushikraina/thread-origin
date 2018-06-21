var request = require('request');
var requestify = require('requestify'); 
var constant = require('../config');

exports.addToCart = function(req,res){

    if(req.headers.authorization != null){

        var token = 'Bearer '+req.headers.authorization;

        requestify.request(constant.USER_CART,{
            method: 'POST',
            headers:{
                'content-type' : 'application/json; charset=utf-8',
                'authorization' : token
            }
        }).then(function(response) {
                    var id = '';
                    if(response.body.id == null)
                        id = response.body;
                    else
                        id = response.body.id;  

                        requestify.request(constant.ADD_TO_CART,{
                        method: 'POST',
                        headers:{
                            'authorization' : token,
                            'content-type' : 'application/json; charset=utf-8'
                        },
                        body : {
                            "cart_item": {
                                "quote_id": parseInt(id.replace(/"/g,'')),
                                "product_type" : "configurable",
                                "sku": req.body.sku,
                                "qty": parseInt(req.body.qty),
                                "product_option": {
                                    "extension_attributes": {
                                    "configurable_item_options" : [
                                        {
                                            "option_id": parseInt(req.body.color_id), 
                                            "option_value": parseInt(req.body.color_value)
                                        },
                                        {
                                            "option_id": parseInt(req.body.size_id), 
                                            "option_value": parseInt(req.body.size_value)
                                        }
                                     ]
                                   }
                                 }
                                }
                        }
                    }).then(function(response) {
                                res.send(response.body);                            
                            })
                    .catch(function(err){
                        res.send(err.body);
                    });
                })
        .catch(function(err){
            res.send(err);
        });
    }

    else
        res.send({error : "requires user token"});

  };



exports.getCart = function(req,res){

    if(req.headers.authorization != null){
        
        var token = 'Bearer '+req.headers.authorization;

        requestify.request(constant.USER_CART,{
            method: 'POST',
            headers:{
                'content-type' : 'application/json; charset=utf-8',
                'authorization' : token
            }
        }).then(function(response) {
                    if(response.body.id == null)
                        var id = response.body;
                    else
                        var id = response.body.id;  

                    requestify.request(constant.ADD_TO_CART,{
                        method: 'GET',
                        headers:{
                            'authorization' : token,
                            'content-type' : 'application/json; charset=utf-8'
                        }
                    }).then(function(response) {
                                res.send(response.body);                            
                            })
                    .catch(function(err){
                        res.send(err.body);
                    });
                })
        .catch(function(err){
            res.send(err.body);
        });
    }
    else
        res.send({error : "requires user token"});

  };


