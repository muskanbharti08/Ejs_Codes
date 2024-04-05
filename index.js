let express = require('express');

let app = express();

let port = 8080;

app.set('view engine',"ejs");
app.listen(port,
    ()=>{
            console.log(`server is listening at port ${port}`);

    });


    app.get('/home',
    (req,res)=>{
        
res.render('home.ejs');
    });


    app.get('/login',
    (req,res)=>{
        console.log("request to login page");
        res.render('login.ejs');

    })