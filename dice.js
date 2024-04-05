let express = require('express');
let path = require('path');


let app = express();

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

let port = 8080;


app.listen(port,()=>{
    console.log("sun rha hu bolo");
});



app.get('/dice',
(req,res)=>{
    console.log("req to dice");
    res.render('roll.ejs');
});


app.get('/rolls',
(req,res)=>{
    console.log("roll req hua h");
let value = Math.floor(Math.random()*6)+1;

// res.render('rollsData.ejs',{v:value,i:5});
// res.render('rollsData.ejs',{v:value});
res.render('rollsData.ejs',{value});



})