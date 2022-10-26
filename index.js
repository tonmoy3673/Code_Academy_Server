const express=require('express')
const app=express();
const cors=require('cors')
const port=process.env.PORT || 5000;
app.use(cors());
const course=require('./course.json');
const categories=require('./categories.json')

app.get('/',(req,res)=>{
    res.send('Code API Running');
})


app.get('/course',(req,res)=>{
    res.send(course)
})

app.get('/categories',(req,res)=>{
    res.send(categories)
})

app.listen(port,()=>{
    console.log('Code Academy server running on post',port);
})
