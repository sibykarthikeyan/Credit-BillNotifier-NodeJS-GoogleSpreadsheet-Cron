const express = require('express');
const app = express();

app.get("/getExpense",(req,res)=>{
    res.status(200);
   res.send("Heelo to ecpense"); 
});

app.listen(3000,()=>{
    console.log("Listening on port 3000")
});

module.exports = app;