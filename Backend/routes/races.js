const express = require('express');
const router = express.Router();
const Post = require('../models/Race');
 
// Routes
router.get('/', async (req,res)  => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err){
        res.json ({message:err});
    }
});
// Posts 
router.post('/', async (req, res) => {
    const post = new Post ({
        name: req.body.name,
        price: req.body.price
 
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json ({ message: err });
    }
});

//Hitta Specifik post
router.get('/:postId', async (req, res) => {
    try {
  const post = await Post.findById(req.params.postId);
  res.json(post);
    }catch(err){
        res.json({message:err});
    }
});

// Ta bort post 
router.delete('/:postId',async (req, res ) =>{
try {
    const removedPost = await Post.remove({_id:req.params.postId});
    res.json (removedPost);
}  catch (err){ 
    res.json({ message: err });
}
});

router.patch('/:postId', async (req, res )=>{
    try {
  const updatedPost = await Post.updateOne(
      { _id: req.params.postId }, 
      { $set: { name: req.body.name } }
      );
      res.json(updatedPost);
    }catch (err){
        res.json({ message: err});
    }
});

module.exports = router;
