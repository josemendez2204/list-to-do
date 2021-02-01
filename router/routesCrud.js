const express= require ('express')
const router= express.Router();

router.get ('/', (req,res) => {
    res.render("index", {title:'this is a webpage server created with mongo db and express.js'});
} );

router.get ('/services', (req,res) => {
    res.render("services",{serviceTitle:'this is the service page'});
} );


module.exports= router; 