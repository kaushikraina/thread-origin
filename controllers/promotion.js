var request = require('request');
var requestify = require('requestify'); 
var constant = require('../config');

exports.addCouponToCart = function(req,res){

    if(req.headers.authorization != null){

        var token = 'Bearer '+req.headers.authorization;

        requestify.request(constant.USER_CART,{
            method: 'POST',
            headers:{
                'content-type' : 'application/json; charset=utf-8',
                'authorization' : token
            }
        }).then(function(response) {
                requestify.request(constant.ADD_COUPON_CODE+req.body.cart+'/coupons/'+req.body.code,{
                method: 'POST',
                headers:{
                    'authorization' : token,
                    'content-type' : 'application/json; charset=utf-8'
                },
                body : {
                    
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
