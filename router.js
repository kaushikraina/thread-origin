var express = require('express');
var apiRouter = express.Router();
var homepageCtrl = require('./controllers/homepage');
var productCtrl = require('./controllers/product');
var categoryCtrl = require('./controllers/category');

//Get homepage exclusive products
apiRouter.route('/homepage/exclusive').get(homepageCtrl.getExclusives);

//Get homepage campaign 1
apiRouter.route('/homepage/camp1').get(homepageCtrl.getCamp1);

//Get homepage campaign 2
apiRouter.route('/homepage/camp2').get(homepageCtrl.getCamp2);

//Media base url
apiRouter.route('/media').get(homepageCtrl.getMediaURL);

//Get product details
apiRouter.route('/product/:sku').get(productCtrl.getProduct);

//Search products by category
apiRouter.route('/product/:category').get(productCtrl.getCategoryProducts);

//Get categories
apiRouter.route('/categories').get(categoryCtrl.getCategories);

//Get category page campaign
apiRouter.route('/category/campaign').get(categoryCtrl.getCategoryCamp);


module.exports = apiRouter;