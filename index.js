const express=require('express')
const app=express();
const port=process.env.PORT || 5000;


app.get('/',(req,res)=>{
    res.send('Code API Running');
})

app.listen(port,()=>{
    console.log('Code Academy server running on post',port);
})
