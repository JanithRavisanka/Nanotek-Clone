const express = require("express");
const mongoose = require("mongoose");
const ejs =  require("ejs");

const app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


// mongoose.connect("mongodb+srv://Admin-janith:pJwACPwWsYaNORYp@cluster0.cl5pp.mongodb.net/itemDB");


app.get("/", function(req, res){
    res.render("home", {current:"Home"});
});

app.get("/about", function(req, res){
    res.render("about", {current:"About"});
});

app.get("/contact", function(req, res){
    res.render("contact", {current:"Contact"});
});

app.get("/services", function(req, res){
 res.render("service", {current:"Services"});
});
app.get("/PBA", function(req, res){
    res.render("asus", {title:"POWERED BY ASUS", current:"POWERED BY ASUS"});
});
app.get("/console",function(req, res){
    res.render("console", {title:"CONSOLE GAMING", current:"CONSOLE GAMING"});
});
app.get("/asusrog",function(req, res){
    res.render("asusrog", {title:"ASUS ROG", current:"ASUS ROG"});
});

app.get("/apple",function(req, res){
    res.render("apple", {title:"APPLE PRODUCTS", current:"APPLE PRODUCTS"});
});
app.get("/workstations",function(req, res){
    res.render("workstations", {title:"DESTOP WORKSTATION", current:"DESTOP WORKSTATION"});
});
app.get("/bpc",function(req, res){
    res.render("bpc", {title:"BUDGET DESKTOP COMPUTERS", current:"BUDGET DESKTOP COMPUTERS"});
});


app.get("/:cname",function(req, res){
    res.render("items", {title:req.params.cname, current:req.params.cname});
});




app.listen(3000, function(){
    console.log("sever successfully running on port 3000");
});