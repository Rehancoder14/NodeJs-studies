const exp = require('constants');
const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');
//EXPRESS
app.use('/static',express.static('static'))
app.use(express.urlencoded())
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))


//PUG
app.get('/',(req, res)=>{
    const param = {
        'title': "Pug template",
        'content': 'Rehan is best in whatever he does'
    }
    res.status(200).render('index.pug',param)
})

// app.get("/demo",(req, res)=>{
//     res.status(200).render('demo', { title: 'Hey', message: 'Hello there! this is me studying nodeJs' })
//     // res.send('my first express app')
// })
// app.get('/home',(req, res)=>{
//     res.send('my home in express')
// })
// app.get('/contact',(req, res)=>{
//     res.send('my contact in express')
// })
// app.post('/contact',(req, res)=>{
//     res.send('my post request in contact express ')
// })
app.post('/', (req, res)=>{
    name = req.body.name;
    age = req.body.age;
    gender = req.body.gender;
    address = req.body.address;
    more = req.body.more;
    let outputtoWrite = `The name of the student is ${name},\n He is ${age} years old.\n He is ${gender}, \nHe lives in ${address},\n ${more}`
    fs.writeFileSync('output.txt',outputtoWrite)
    const param = {
        'message': "Your data has submitted succesfully",
        // 'content': 'Rehan is best in whatever he does'
    }
    res.status(200).render('index.pug',param)
})
const port  = 80;
app.listen(port, ()=>{
    console.log("application running successfully");
})