const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const viewEngine = require('./config/viewEngine');
const initWebRouter = require('./routers/web');
require('dotenv').config();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
viewEngine(app)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

