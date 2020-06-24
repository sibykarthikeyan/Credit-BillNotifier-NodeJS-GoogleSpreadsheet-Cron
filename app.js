const express = require('express');
const app = express();

app.get("/getBillAmount",(req,res)=>{
    res.status(200);
   res.send("Second build travis"); 
});

app.listen(3000,()=>{
    console.log("Listening on port 3000")
});

module.exports = app;