const express=require('express')
const app=express();
const cors=require('cors')
const port=process.env.PORT || 5000;
app.use(cors());
const course=require('./course.json');


app.get('/',(req,res)=>{
    res.send('Code API Running');
})


app.get('/course',(req,res)=>{
    res.send(course)
})




app.listen(port,()=>{
    console.log('Code Academy server running on post',port);
})
