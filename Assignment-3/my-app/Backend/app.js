const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PostModel = require('../Models/post')
const mongoose = require('mongoose')
const LoginModel = require('../Models/login')

mongoose.connect("mongodb+srv://emwcd7:Giants216@cluster1.5zwjiu7.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
console.log('Connected to database')
})
.catch(()=>{
console.log('connection error')
});


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//disable cors
app.use((req, res, next) =>{
  res.setHeader("Access-Control-Allow-Origin","*")
  res.setHeader("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept")
  res.setHeader("Access-Control-Allow-Methods","GET,POST,PATCH,DELETE,OPTIONS")
  next();
})

app.use((req,res,next) =>{

  next();
})

app.post('/posts',(req,res,next)=>{
  const post = new PostModel({
    title: req.body.title,
    content: req.body.content
  })
  post.save().then(createPost=> {
    res.status(201).json({
    message:'Post added successful',
    postId: createPost._id
    });
  })
})

app.get('/posts',(req,res,next)=> {
  PostModel.find().then(documents=>{
    res.status(200).json({
      message:"This is fetched data",
      posts: documents
    });
  });
});

app.delete('/posts/:id', (req,res,next)=> {
  PostModel.deleteOne({_id:req.params.id}).then(result =>{
    console.log(result)
    res.status(200).json({message:"Post deleted"})
  }).catch(err => {
    console.log(err)
  })
})


app.post('/login',(req,res,next)=>{
  const login = new loginModel({
    email: req.body.email,
    password: req.body.password
  })
  login.save().then(createLogin=> {
    res.status(201).json({
    message:'Login added successful',
    loginId: createLogin._id
    });
  })
})

app.get('/login',(req,res,next)=> {
  LoginModel.find().then(documents=>{
    res.status(200).json({
      message:"This is fetched data",
      login: documents
    });
  });
});


module.exports = app;
