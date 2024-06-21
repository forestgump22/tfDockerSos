const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// Crear un nuevo post
router.post("/", async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(201).send(post);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Obtener todos los posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().populate("user_id");
    res.send(posts);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Obtener un post por ID
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate("user_id");
    if (!post) return res.status(404).send();
    res.send(post);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Actualizar un post por ID
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!post) return res.status(404).send();
    res.send(post);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Eliminar un post por ID
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).send();
    res.send(post);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
