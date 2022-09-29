const express = require('express');
const app = express();
const https = require('https');
const request = require('request');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine','ejs');

app.get("/", function(req,res){

  var today = new Date();
  var currentDay = today.getDate();
  var day = "";

  if (currentDay === 6 || currentDay === 7){
    day = "weekend";
  }else{
    day = "week";
  }

  res.render('list',{ kindOfDay : day});
})

app.listen(process.env.PORT || 3000, function(){
  console.log("Server running on port 3000");
})
