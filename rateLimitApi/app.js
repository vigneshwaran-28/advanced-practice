const express=require('express');
const posts=require('./post');
const rateLimit=require('express-rate-limit');

const app=express();

const limiter=rateLimit({
    max:2,
    windowMs:10000
});

app.use(limiter);

app.get('/',(req,res)=>{
    res.status(200).json({message:posts});
});

app.listen(6000);
