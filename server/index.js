const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const PostModel = require('./models/Posts');
const app = express();
app.use(express.json());
app.use(cors());

//this represents the connection to our db cluster
mongoose.connect('mongodb+srv://rosanderg913:r6xgBbo0ttpUuTzW@cluster0.ahcnplj.mongodb.net/blogdatabase?retryWrites=true&w=majority')

//when app loads at port 3001, this callback function will be called
app.listen(3001, () => {
    console.log('Server runs perfectly on port 3001');
});

//api call to get all blog posts in db
app.get('/getPosts', async (req, res) => {
    try {
        //finds all data in db that matches the schema
      const posts = await PostModel.find({});
      res.json(posts);
    } catch (err) {
      res.json(err);
    }
  });
  

//PRACTICE THIS BY MAKING MULTIPLE ENDPOINTS AND SENDING DATA ACROSS
//api call to send a blog post to db
app.post('/createPost', async (req, res) => {
    //this represents all the data sent by the frontend from the post request (probably from a form for posting a new blog post)
    const post = req.body;
    //this converts all the data into the schema model
    const newPost = new PostModel(post);

    await newPost.save();
    res.json(post);
});







//mongo pass: r6xgBbo0ttpUuTzW
//mongo connection string: mongodb+srv://rosanderg913:<password>@cluster0.ahcnplj.mongodb.net/?retryWrites=true&w=majority
