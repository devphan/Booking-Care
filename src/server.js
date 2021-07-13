const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const viewEngine = require('./config/viewEngine');
const initWebRouter = require('./routers/web');
const connectDB = require('./config/connectDB');
require('dotenv').config();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
viewEngine(app)
initWebRouter(app)

connectDB();
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

