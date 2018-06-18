let express = require('express');
let apiRouter = express.Router();
let homepageCtrl = require('./controllers/homepage');

//Get exclusive products
apiRouter.route('/homepage/exclusive').get(homepageCtrl.getExclusives);

//Media base url
apiRouter.route('/media').get(homepageCtrl.getMediaURL);



module.exports = apiRouter;