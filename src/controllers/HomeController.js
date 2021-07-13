const e = require("express");
const db = require("../models");

class HomeController {
    async index(req, res) {

        try {
            let data = await db.User.findAll();
            res.render('home.ejs', {
                data: JSON.stringify(data)
            })
            // console.log(data);
        } catch (error) {
            console.log('error = ', error);
        }
        
    }

}



module.exports = new HomeController();
