var express = require('express');
var apiRouter = express.Router();
var homepageCtrl = require('./controllers/homepage');

//Get exclusive products
apiRouter.route('/homepage/exclusive').get(homepageCtrl.getExclusives);

//Media base url
apiRouter.route('/media').get(homepageCtrl.getMediaURL);



module.exports = apiRouter;