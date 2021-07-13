const express = require('express');
require('dotenv').config();
const homeController = require('../controllers/HomeController');
const router = express.Router();

const initWebRouter = function(app) {
    router.get('/', homeController.index);
    return app.use('/', router)
}

module.exports = initWebRouter;