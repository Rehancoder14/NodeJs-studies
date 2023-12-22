const mongoose = require('mongoose');
const express = require('express');
const app= express()
mongoose.connect('mongodb://127.0.0.1:27017/StartingMongo', { useNewUrlParser: true, useUnifiedTopology: true }).then(
    ()=>console.log('successful connect')
).catch((err)=>console.log("some thing went wrong"))

const personalData = new mongoose.Schema({
    name: String,
    roll_no: String
})

const Student = new mongoose.model("Student",personalData)
// const createDoc = async()=>{
//     const studentList=  new Student({
//         name: `Node`,
//         roll_no: "A125"
//     })
//     const result = await studentList.save()
//     console.log(result)
// }
// const createMultiDoc = async()=>{
//     const studentList1 = new Student({
//         name: 'aaa',
//         roll_no:'123',
//     })
//     const studentList2 = new Student({
//         name: 'bbb',
//         roll_no: '124'
//     })
//     const studentList3 = new Student({
//         name: 'ccc',
//         roll_no: '125'
//     })
//     const studentList4 = new Student({
//         name: 'ddd',
//         roll_no: '126'
//     })
//     const result = await Student.insertMany([studentList1,studentList2,studentList3,studentList4]);
//     console.log(result);
// }
// createMultiDoc()

const getDocument=async ()=>{
    const result = await Student.find({roll_no:'125'}).select({name : 1});
    console.log(`The result is \n ${result}`)
}

getDocument();

app.get('/',async(req, res)=>{
    const result = await Student.find({name:'aaa'});
    res.json(result);
    
})
app.get('/b',async(req,res)=>{
    const result  = await Student.find({name:'bbb'})
    res.json(result);
})
app.put('/c',async(req,res)=>{
    const result  = await Student.find({name:'ccc'})
    res.json(result);
})
app.post('/d',async(req,res)=>{
    const result  = await Student.find({name:'ddd'})
    res.json(result);
})
app.listen(8000,'127.0.0.1',()=>{
    console.log('showing data');
})