const express = require('express');
const port = process.env.port ||8000;
const path = require('path');
const app = express();
 require('./db/conn');

const static_path = path.join(__dirname,"../public")
app.use(express.static(static_path));
app.get("/",(req, res)=>{
    res.send("Rehan ");
})

app.listen(port, (req,res)=>{
    console.log("App is running Successfully");
})