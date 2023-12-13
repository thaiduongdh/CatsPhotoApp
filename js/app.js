const express = require("express");

const path = require("path");

const app = express ()

const port= 3000;

app.use("/js",express.static(path.join(__dirname,"js")));
app.use("/img",express.static(path.join(__dirname,"img")));
app.use("/css",express.static(path.join(__dirname,"css")));


app.get("/",function(req,res){
     res.sendFile(path.join(__dirname,"..","index.html"));
     });

app.listen(port,function(){
    console.log(`Server is running on https://localhost: ${port}`);
})