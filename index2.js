let express = require('express');
let path = require('path');


let app = express();

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

let port = 8080;


app.listen(port,()=>{
    console.log("sun rha hu bolo");
});

app.get('/books',(req,res)=>{
    console.log("book page pr response aya hai");
    res.render('book.ejs');
})