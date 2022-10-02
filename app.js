const express = require('express');
const app = express();
const https = require('https');
const request = require('request');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine','ejs');


var items = [];

app.get("/", function(req,res){

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  var today = new Date();
  var currentDay = today.getDate();
  var day = today.toLocaleDateString("en-US", options);

  res.render('list',{kindOfDay: day, newListItem:items});
});

app.post("/", function(req,res){
  newItem = req.body.newitem
  items.push(newItem);
  res.redirect("/");
})

app.listen(process.env.PORT || 3000, function(){
  console.log("Server running on port 3000");
});
