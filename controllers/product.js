var request = require('request');
var requestify = require('requestify'); 
var constant = require('../config');
let { wrap: async } = require('co');


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




 exports.getProductVariant = function(req,res){
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
                requestify.request(constant.PRODUCT_VARIANTS+req.params.sku+'/children',{
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



exports.getColor = function(req,res){
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
                requestify.request(constant.PRODUCT_COLORS,{
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


exports.getSize = function(req,res){
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
                requestify.request(constant.PRODUCT_SIZES,{
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



//Params 

var rates;
var country;
var converted_price;

exports.currenyConvert = async function (req,res){

try{
   let response = await  requestify.request(constant.ADMIN_URL,{
        method: 'POST',
        body:{
                "username" : constant.ADMIN_USERNAME,
                "password" : constant.ADMIN_PASSWORD
        },
        headers:{
            'content-type' : 'application/json; charset=utf-8'
        }
    });
    
    let token =  response.body.replace(/"/g,'');
    let response_ = await requestify.request(constant.PRODUCT_VARIANTS+req.body.sku+'/children',{
            method: 'GET',
            headers:{
                'authorization' : 'Bearer '+token,
                'content-type' : 'application/json; charset=utf-8'
            }
        });
    let output = await result(req.body.ip,response_.body);  
    res.send(output);
  }
catch(err){
    res.send(err);
  }
};

async function result(ip,body){
    await getRates();
    await getCountry(ip);
    await getConvertedPrice(country.country);
    console.log(rates.rates);
    try{
        return getFinalPrice(body);    
    }catch(err){
        console.log(err);
    }
}

async function getFinalPrice(body){
    var data = JSON.parse(body);
    for(var a=0; a<data.length; a++){
        console.log('Before',data[a].price);
        data[a].price = (parseFloat(data[a].price) * parseFloat(converted_price));
        console.log('After',data[a].price);
    }

    return data;
}

async function getConvertedPrice(country){
    converted_price = rates.rates['USD'];
    try{
    switch(country){
        case 'Singapore' : converted_price = rates.rates['SGD']; break;
        case 'India' : converted_price = 1; break;
        case 'Canada' : converted_price = rates.rates['CAD']; break;
        case 'United Arab Emirates' : converted_price = rates.rates['AED']; break;
        case 'Australia' : converted_price = rates.rates['AUD']; break;
        case 'United Kingdom' : converted_price = rates.rates['GBP']; break;
        case 'Germany' : converted_price = rates.rates['EUR']; break;
        case 'France' : converted_price = rates.rates['EUR']; break;
        case 'Italy' : converted_price = rates.rates['EUR']; break;
        case 'Spain' : converted_price = rates.rates['EUR']; break;
        case 'Portugal' : converted_price = rates.rates['EUR']; break;
        case 'Netherlands' : converted_price = rates.rates['EUR']; break;
        case 'United States' : converted_price = rates.rates['USD']; break;
    }
    }catch(err){
        console.log(err);
    }

}


async function getRates() {

   try{ 
    //Get latest exchange rates    
   let response = await requestify.request(constant.EXCHANGE_RATES,{
        method : 'GET'  
      });      
    rates = JSON.parse(response.body);
    }
    catch(err){
        console.log(err);
    }
    return;


}

async function getCountry(ip){
try{
      //Get country from IP
    let response = await requestify.request(constant.GEO_IP+ip,{
        method : 'GET'  
      });     
    country = JSON.parse(response.body);
}
catch(err){
    console.log(err);
}
    return;
}