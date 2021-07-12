const express = require('express');
const router = express.Router();

const initWebRouter = function(app) {
    router.get('/', (req, res) => {
        return res.send('Hello Booking Care')
    })
    return app.use('/', router)
}

module.exports = initWebRouter;