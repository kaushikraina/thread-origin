var express = require('express');
var apiRouter = express.Router();
var homepageCtrl = require('./controllers/homepage');
var productCtrl = require('./controllers/product');
var categoryCtrl = require('./controllers/category');
var accountCtrl = require('./controllers/account');
var userCtrl = require('./controllers/user');
var promotionCtrl = require('./controllers/promotion');
var guestCtrl = require('./controllers/guest');


/************     HOMEPAGE API'S     ********/

//Get homepage exclusive products
apiRouter.route('/homepage/exclusive').get(homepageCtrl.getExclusives);

//Get homepage campaign 1
apiRouter.route('/homepage/camp1').get(homepageCtrl.getCamp1);

//Get homepage campaign 2
apiRouter.route('/homepage/camp2').get(homepageCtrl.getCamp2);

//Get homepage campaign 3
apiRouter.route('/homepage/camp3').get(homepageCtrl.getCamp3);

//Get instagram feed
apiRouter.route('/homepage/instafeed').get(homepageCtrl.instaFeed);


/************     MEDIA API'S     ********/

//Media base url
apiRouter.route('/media').get(homepageCtrl.getMediaURL);



/************     PRODUCT API'S     ********/

//Get product details
apiRouter.route('/product/:sku').get(productCtrl.getProduct);

//Search products by category
apiRouter.route('/product/all/:category').get(productCtrl.getCategoryProducts);

//Get product variant information
apiRouter.route('/product/variants/:sku').get(productCtrl.getProductVariant);

//Get all color
apiRouter.route('/products/colors').get(productCtrl.getColor);

//Get all sizes
apiRouter.route('/products/sizes').get(productCtrl.getSize);

//Quicksearch Product
apiRouter.route('/product/find/:search').get(productCtrl.searchProduct);

//Currency comversion
apiRouter.route('/products/conversion').post(productCtrl.currenyConvert);

//All details
apiRouter.route('/products/info/:category').get(productCtrl.allProductDetails);




/************     CATEGORY API'S     ********/

//Get categories
apiRouter.route('/categories').get(categoryCtrl.getCategories);

//Get category page campaign
apiRouter.route('/category/campaign').get(categoryCtrl.getCategoryCamp);

//Sort Category products based on color
apiRouter.route('/category/color/:value').get(categoryCtrl.sortCategoryColor);

//Sort Category products based on size
apiRouter.route('/category/size/:value').get(categoryCtrl.sortCategorySize);



/************     ACCOUNT API'S     ********/

//Add an account
apiRouter.route('/account').post(accountCtrl.addAccount);

//Get customer account 
apiRouter.route('/account/:id').get(accountCtrl.getAccount);

//Check user credentials (return customer token)
apiRouter.route('/account/validate').post(accountCtrl.validateAccount);


/**************     USER ACCOUNT RELETED FUNCTIONS API's  ************/

//Add item to a cart
apiRouter.route('/user/cart').post(userCtrl.addToCart);

//Get cart items
apiRouter.route('/user/cart').get(userCtrl.getCart);

//Remove cart item
apiRouter.route('/user/cart/:id').get(userCtrl.removeCartItem);

//Get order details
apiRouter.route('/user/order/:id').get(userCtrl.getOrderDetails);

//Add item to wishlist
apiRouter.route('/user/wishlist/add/:product').get(userCtrl.addToWishlist);

//Get wishlist items
apiRouter.route('/user/wishlist').get(userCtrl.getWishlist);

//Delete wishlist item
apiRouter.route('/user/wishlist/delete/:id').get(userCtrl.updateWishlist);

//Newsletter Subscription
apiRouter.route('/user/newsletter').post(userCtrl.subscribeNews);



/****************   PROMOTION API's ***********************/

//Add coupon to cart 
apiRouter.route('/cart/coupon').post(promotionCtrl.addCouponToCart);


/**************      GUEST CHECKOUT API's    ****************/

//Create empty guest cart
apiRouter.route('/guest').get(guestCtrl.createEmptyCart);

//Add item to cart
apiRouter.route('/guest/cart/:id').post(guestCtrl.addToCart);

//Get cart items
apiRouter.route('/guest/:id').get(guestCtrl.getCart);

//Update Cart item
apiRouter.route('/guest/update').post(guestCtrl.updateCartItem);

module.exports = apiRouter;