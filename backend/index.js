const express = require('express');
const app = express();


app.get("/",(req,res)=>{
    
    res.json({"name":"Rehan", "age": 20, "address": "pune"});
})

app.get("/about",(req, res)=>{
    res.send('This is about page');
})
app.listen(8000,()=>{
    console.log("The app is running at ")
})