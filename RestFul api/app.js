
const express = require('express');

const studRouter = require('./router/router');
const app = express()
require("./db/conn")
const port = process.env.PORT || 8000;  // Assigning port number

app.use(studRouter);
app.use(express.json())

app.listen(port,(req,res)=>{
    console.log(`the app is running at ${port}`);
})