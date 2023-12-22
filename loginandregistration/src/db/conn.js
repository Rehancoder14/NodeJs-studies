const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/logindb', { useNewUrlParser: true, useUnifiedTopology: true }).then(
    ()=>console.log('successful connect')
).catch((err)=>console.log("some thing went wrong"))
