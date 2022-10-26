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

app.get('/course/:id',(req,res)=>{
    const id=req.params.id;
   const selectedCourse=course.find(n=>n._id===id);
   res.send(selectedCourse);
    
})

app.get('/category/:id',(req,res)=>{
    const id=req.params.id;
    const selectedCategory=course.filter(n=>n.category_id===id);
    res.send(selectedCategory);
})

app.listen(port,()=>{
    console.log('Code Academy server running on post',port);
})
