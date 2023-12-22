const express = require('express');
const router = express.Router();
const Student = require('../models/students');
const app = express()
app.use(express.json())
router.get('/r',(req, res)=>{
    res.send("hello world this rest api")
})
router.get('/showusers',async (req,res)=>{
    const id = req.params.id;
    const result = await Student.findById(id);
    
    if(result!=null || result==[]){
        res.json(result);
    }
    else{
        res.json({
            "Message":"List is empty"
        })
    }
    
})
router.post('/deleteuser/:id',async(req,res)=>{
    const id  = req.params.id;
    const result = await Student.findByIdAndDelete(id);
    console.log(result);
    res.json({
        "message": "Succcessfully deleted"
    })
})

router.post('/students', (req,res)=>{
   try{
    console.log(req.body);
    const user = new Student(req.body);
    user.save().then(async()=>{
        // res.send(user);
        // const result  = await Student.find();
        // res.json(result)
        res.json({
            "message": "Success"
        })
    }).catch((e)=>{
        res.send(e);
    })
   }
   catch(e){
    console.log(e)
   }
})
module.exports =router;