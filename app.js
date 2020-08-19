const express = require('express');
const app = express();
const helmet = require('helmet');

app.use(helmet());
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