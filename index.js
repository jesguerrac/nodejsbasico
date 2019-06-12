const express = require("express");
const app = express();

app.get("/app",(req,res)=>{
    res.send("estoy en ruta app");
});

app.get("/",(req,res)=>{
    res.send("estoy en ruta home");
});

app.get("*",(req,res)=>{
    res.send("nose dond estoy");
});

app.listen(3000,()=>{
    console.log('server init');
})