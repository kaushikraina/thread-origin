var request = require('request');
var requestify = require('requestify'); 
var constant = require('../config');



exports.createEmptyCart = function(req,res){
    requestify.request(constant.GUEST_CART,{
        method: 'POST',
        headers:{
            'content-type' : 'application/json; charset=utf-8'
        }
    }).then(function(response) {
            res.send({cart_id:response.body});
    }).catch(function(err){
        res.send(err);
    })
};


exports.addToCart = function(req,res){
    requestify.request(constant.GUEST_ADD_ITEM+req.params.id+'/items',{
    method: 'POST',
    headers:{
        'content-type' : 'application/json; charset=utf-8'
    },
    body : {
        "cart_item": {
            "quote_id": req.params.id,
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
  };



  exports.getCart = function(req,res){
    requestify.request(constant.GUEST_ADD_ITEM+req.params.id,{
    method: 'GET',
    headers:{
        'content-type' : 'application/json; charset=utf-8'
    }
    }).then(function(response) {
                res.send(response.body);                            
            })
    .catch(function(err){
        res.send(err.body);
    });
  };


  exports.updateCartItem = function(req,res){
    requestify.request(constant.GUEST_ADD_ITEM+req.body.cart+'/items'+req.body.item,{
    method: 'PUT',
    headers:{
        'content-type' : 'application/json; charset=utf-8'
    },
    body : {
        "cart_item": {
            "quote_id": req.body.cart,
            "itemId": req.body.item,
            "qty": req.body.qty
            }
    }
    }).then(function(response) {
                res.send(response.body);                            
            })
    .catch(function(err){
        res.send(err.body);
    });
  }; 


exports.deleteCartItem = function(req,res){
    requestify.request(constant.GUEST_ADD_ITEM+req.body.cart+'/items'+req.body.item,{
    method: 'DELETE',
    headers:{
        'content-type' : 'application/json; charset=utf-8'
    },
    body : {
        "cart_item": {
            "quote_id": req.body.cart,
            "itemId": req.body.item
            }
    }
    }).then(function(response) {
                res.send(response.body);                            
            })
    .catch(function(err){
        res.send(err.body);
    });
}; 


//requires customer token
exports.mergeCart = function(req,res){

    requestify.request(constant.GUEST_ADD_ITEM+req.body.cart,{
        method: 'PUT',
        headers:{
            'content-type' : 'application/json; charset=utf-8',
            'authorization' : req.body.token 
        },
        body : {            
            "customerId": req.body.customer,
            "storeId": 1              
        }
        }).then(function(response) {
                    res.send(response.body);                            
                })
        .catch(function(err){
            res.send(err.body);
        });

}