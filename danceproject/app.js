// const fs = require('fs');
const express = require('express');
const path = require('path');
const app = express()
const port  = 80;

app.use('/static',express.static('static'))
app.use(express.urlencoded())
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))

app.get('/',(req,res)=>{
    const param= {}
    res.status(200).render('index.pug',param)
})

app.listen(port,()=>{
    console.log(`application started successfully on port ${port}`)
})