const express = require("express");

const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})

let output = "";

app.get("/",(req,res)=>{
    res.render("index",{output:output});
})


app.post("/submit",(req,res)=>{
    console.log("Take outputs from here and add into an array of existing tasks");
})

app.get("/work",(req,res)=>{
    console.log("This will be having the same functionality except it will be stored in different array");
    res.send("I work");


})

app.post("/",(req,res)=>{
    let task = req.body.task;
    
        output += '<li class="list-group-item"><input type="checkbox" class="task-done">'+task+'</li>';

    
    res.render("index.ejs",{output:output});    
})
