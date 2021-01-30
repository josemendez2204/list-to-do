const express= require ("express")
const app= express ();
const port= 3000
app.use(express.static(__dirname + "/public"));

const mongoose = require('mongoose');
const user= 'cruddeveloper';
const password= 'TMMkPeLNOlP0h7Rt';
const dbname= 'databaseCrud';
const uri= `mongodb+srv://${user}:${password}@cluster0.o377c.mongodb.net/${dbname}?retryWrites=true&w=majority
`; 

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})

.then (() => console.log ('database connected'))
.catch (e => console.log(e))

//plantillas

app.set("view engine", "ejs");
app.set("views", __dirname + "/viewsEJS");

// app routes
app.use  ('/', require ('./router/routesCrud'))
app.use ('listtodo', require ('./router/Tasks'))

app.use((req, res, next) => {
    res.status(404).render('404', {title404:"NOT FOUND 404"});
  });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });

