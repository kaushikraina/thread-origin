var express = require('express');
var apiRouter = express.Router();
var homepageCtrl = require('./controllers/homepage');
var productCtrl = require('./controllers/product');
var categoryCtrl = require('./controllers/category');
var accountCtrl = require('./controllers/account');


/************     HOMEPAGE API'S     ********/

//Get homepage exclusive products
apiRouter.route('/homepage/exclusive').get(homepageCtrl.getExclusives);

//Get homepage campaign 1
apiRouter.route('/homepage/camp1').get(homepageCtrl.getCamp1);

//Get homepage campaign 2
apiRouter.route('/homepage/camp2').get(homepageCtrl.getCamp2);



/************     MEDIA API'S     ********/

//Media base url
apiRouter.route('/media').get(homepageCtrl.getMediaURL);



/************     PRODUCT API'S     ********/

//Get product details
apiRouter.route('/product/:sku').get(productCtrl.getProduct);

//Search products by category
apiRouter.route('/product/all/:category').get(productCtrl.getCategoryProducts);




/************     CATEGORY API'S     ********/

//Get categories
apiRouter.route('/categories').get(categoryCtrl.getCategories);

//Get category page campaign
apiRouter.route('/category/campaign').get(categoryCtrl.getCategoryCamp);



/************     ACCOUNT API'S     ********/

//Add an account
apiRouter.route('/account').post(accountCtrl.addAccount);

//Get customer account 
apiRouter.route('/account/:id').get(accountCtrl.getAccount);

//Check user credentials
apiRouter.route('/account/validate').post(accountCtrl.validateAccount);


module.exports = apiRouter;