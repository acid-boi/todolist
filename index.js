const express = require("express");

const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.set('view engine','ejs');
app.use(express.static('public'));


app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})

app.get("/",(req,res)=>{
    res.render("index");
})


app.post("/submit",(req,res)=>{
    console.log("Take outputs from here and add into an array of existing tasks");
})

app.get("/work",(req,res)=>{
    console.log("This will be having the same functionality except it will be stored in different array");
    res.send("I work");


})
