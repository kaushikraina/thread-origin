var request = require('request');
var requestify = require('requestify'); 
var constant = require('../config');
var Instagram = require('instagram-node').instagram();



exports.getExclusives = function(req,res){
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
                requestify.request(constant.EXCLUSIVE_URL,{
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


exports.getMediaURL= function(req,res){
    res.send(constant.MEDIA_BASE_URL);
}  



exports.getCamp1 = function(req,res){
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
                requestify.request(constant.HOME_CAMP_1,{
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


  exports.getCamp2 = function(req,res){
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
                requestify.request(constant.HOME_CAMP_2,{
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


exports.instaFeed = function(req,res){

    Instagram.use({ access_token: '8006095402.8a540c5.df7cf68e50b241c39ea3dd6463452527' });

    Instagram.user_self_media_recent(function(err, medias, pagination, remaining, limit) {
            if(err)
                res.json({message : 'authentication failed!'});
            else{
                res.send(medias);
            }
    });
  
}  