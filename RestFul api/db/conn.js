const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/restapitut', { useNewUrlParser: true, useUnifiedTopology: true }).then(
    ()=>console.log('successfully connected')
).catch((err)=>console.log("some thing went wrong"))  /// connecting mongo db
