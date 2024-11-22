const express = require('express');
const router = express.Router();
const Post = require('../models/post');

// GET /posts
router.get('/', async (req, res) => {
    const posts = await Post.findAll();
    res.json(posts);
});

// GET /posts/:id
router.get('/:id', async (req, res) => {
    const post = await Post.findByPk(req.params.id);
    if (post) res.json(post);
    else res.status(404).send('Post not found');
});

// POST /posts/add
router.post('/add', async (req, res) => {
    const newPost = await Post.create(req.body);
    res.status(201).json(newPost);
});

// PUT /posts/:id
router.put('/:id', async (req, res) => {
    const post = await Post.findByPk(req.params.id);
    if (post) {
        await post.update(req.body);
        res.json(post);
    } else {
        res.status(404).send('Post not found');
    }
});

// DELETE /posts/:id
router.delete('/:id', async (req, res) => {
    const post = await Post.findByPk(req.params.id);
    if (post) {
        await post.destroy();
        res.status(204).send();
    } else {
        res.status(404).send('Post not found');
    }
});

module.exports = router;