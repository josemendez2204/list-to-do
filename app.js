const express= require ("express")
const bodyParser = require('body-parser')
const app= express ();

require('dotenv').config()

// bodyparser config
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

const mongoose = require('mongoose');

const uri= `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.o377c.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority
`; 

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})

.then (() => console.log ('database connected'))
.catch (e => console.log(e))

//plantillas

app.set("view engine", "ejs");
app.set("views", __dirname + "/viewsEJS");

// app routes
app.use  ('/', require ('./router/routesCrud'))
app.use ('/listtodo', require ('./router/Tasks'))

app.use((req, res, next) => {
    res.status(404).render('404', {title404:"NOT FOUND 404"});
  });
  

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });

