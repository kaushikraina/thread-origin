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


exports.searchProduct  = function(req,res){

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
                requestify.request(constant.SEARCH_1+req.params.search+constant.SEARCH_2,{
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





/******************* Category Front Page  *****************************/




exports.allProductDetails  = async function(req,res){

    try{

    var result = {};
    result['Products'] = [];
    
    let response1 = await requestify.request(constant.ADMIN_URL,{
        method: 'POST',
        body:{                
                "username" : constant.ADMIN_USERNAME,
	            "password" : constant.ADMIN_PASSWORD        
        },
        headers:{
            'content-type' : 'application/json; charset=utf-8'
        }
    });

    var token = response1.body.replace(/"/g,'');
    let response = await requestify.request(constant.SEARCH_PRODUCT+req.params.category+constant.CONFIGURABLE_PRODUCTS,{
                    method: 'GET',
                    headers:{
                        'authorization' : 'Bearer '+token,
                        'content-type' : 'application/json; charset=utf-8'
                    }
                });               
    
    let data_products = await JSON.parse(response.body);  //Stores all the products
   
    let res_ = await getAllDetails(data_products,token);      
    let data_colors = await getpColors(token);
    let data_sizes = await getpSizes(token); 
    await result['Products'].push(res_);
    await result['Products'].push(data_colors); 
    await result['Products'].push(data_sizes); 
    await res.send(res_);
    
    }
    catch(err){
        res.send(err);
    }              
  };  

  async function getAllDetails(data_products,token){

    var result = {};
    var data_variants;
    var variant_info;
    result['Products'] = [];
    try{
        
    for(var a=0; a < data_products.items.length;a++){
        data_variants = await getVariants(data_products.items[a].sku,token); //variants of a product
        //for(var b = 0; b<data_variants.length; b++ ){
          // variant_info = await getVariantInfo(data_variants[b].sku,token); //Variant info
           console.log("Variant",data_variants.length);
        //}
        // var item = {};
        // item['name'] = data_products.items[a].name;
        // item['sku'] = data_products.items[a].sku;
        // item['custom_attributes'] = data_products.items[a].custom_attributes;
        // item['variant_info'] = variant_info;
        // result['Products'].push(item);
        
    }    
  }
  
  catch(err){console.log(err);}
  return result;

  }

  async function getVariantInfo(sku,token){
   
   let res = await requestify.request(constant.PRODUCT_INFO+sku,{
        method: 'GET',
        headers:{
            'authorization' : 'Bearer '+token,
            'content-type' : 'application/json; charset=utf-8'
        }
    });  
    console.log(res);
    return res.body;
  }

  async function getVariants(sku,token){
    //Requesting product variants   
                            
        let res = await requestify.request(constant.PRODUCT_VARIANTS+sku+'/children',{
            method: 'GET',
            headers:{
                'authorization' : 'Bearer '+token,                        
                'content-type' : 'application/json; charset=utf-8'
            }
        });
        
    return res.body;
}

async function getpColors(token){
    var result = {};
    result['colors'] = [];

    try{
    //Requesting product variants                            
    let res = await requestify.request(constant.CAT_PRODUCT_COLORS,{
        method: 'GET',
        headers:{
            'authorization' : 'Bearer '+token,                        
            'content-type' : 'application/json; charset=utf-8'
        }
    }); 
    
    }
    catch(err){
        console.log(err);
    }
    
    result['colors'].push(res.body.options);

    return result;
}

async function getpSizes(token){
    var result = {};
    result['sizes'] = [];
    //Requesting product variants                            
    let res = await requestify.request(constant.CAT_PRODUCT_SIZES,{
        method: 'GET',
        headers:{
            'authorization' : 'Bearer '+token,                        
            'content-type' : 'application/json; charset=utf-8'
        }
    });    
    result['sizes'].push(res.body.options);
    return result;
}