const express = require("express");
const router = express.Router();
const Post = require("../model/model");

// GET ALL POSTS
router.get("/posts", async (req, res) => {
  try {
    const data = await Post.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// CREATE POST
router.post("/posts", async (req, res) => {
  const newPost = new Post({
    name: req.body.name,
    content: req.body.content,
  });
  try {
    const dataToSave = await newPost.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE ITEM
router.delete("/posts/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Post.findByIdAndDelete(id);
    res.send("Post deleted");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
