var jwt = require('jsonwebtoken');
var status = require('../status');
var secret = require('../controllers/database').secret;

var User = require('../models/user');

function jwtInterceptor(req, res, next) {
    var token = req.get('Authorization');

    if(token){
        jwt.verify(token, secret, function (err, decoded) {
            if(err) {
                return res
                    .status(status.HTTP_401_UNAUTHORIZED)
                    .json({message: 'token required'});

            } else {
                User.findOne({username: decoded.username, _id: decoded._id}, function (err, user) {
                    if(err){
                        return res
                            .status(status.HTTP_500_INTERNAL_SERVER_ERROR)
                            .json({message: 'Something went wrong in the server'});
                    }
                    req.user = user;
                    next();

                });

            }

        })
    } else {
        // no token
        return res
            .status(status.HTTP_403_FORBIDDEN)
            .json({message: 'No token provided'});
    }
}

module.exports = {
    jwtInterceptor: jwtInterceptor
};