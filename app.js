const express = require('express');
const app = express();
const helmet = require('helmet');
const mysql = require('mysql');

app.use(helmet());

var con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  
app.get("/getBillAmount",(req,res)=>{
    res.status(200);
   res.send("Second build travis"); 
});
app.get("/test2",(req,res)=>{
    res.status(200);
    res.send("test done");
});
app.listen(4000,()=>{
    console.log("Listening on port 3000")
});

module.exports = app;