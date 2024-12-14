// Importation du framework Express pour gérer les routes
const express = require('express');

// Création d'un routeur Express pour définir les routes spécifiques à ce module
const router = express.Router();

// Importation du modèle Sequelize pour la table 'posts'
const Post = require('../models/post');

// Définition de la route GET /posts pour récupérer tous les articles
router.get('/', async (req, res) => {
    try {
        const posts = await Post.findAll();
        if (posts.length === 0) {
            return res.status(404).json({ message: 'No posts found' });
        }
        res.json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).json({ message: 'Error fetching posts' });
    }
});

// Définition de la route GET /posts/:id pour récupérer un article spécifique par son ID
router.get('/:id', async (req, res) => {
    // Utilise Sequelize pour trouver un article par sa clé primaire (ID)
    const post = await Post.findByPk(req.params.id);
    // Si l'article est trouvé, le renvoyer en JSON
    if (post) res.json(post);
    // Sinon, renvoyer un statut 404 avec un message d'erreur
    else res.status(404).send('Post not found');
});

// Définition de la route POST /posts/add pour créer un nouvel article
router.post('/add', async (req, res) => {
    // Utilise Sequelize pour créer un nouvel article avec les données du corps de la requête
    const newPost = await Post.create(req.body);
    // Renvoie le nouvel article avec un statut 201 (Créé)
    res.status(201).json(newPost);
});

// Définition de la route PUT /posts/:id pour mettre à jour un article existant
router.put('/:id', async (req, res) => {
    // Trouve l'article à mettre à jour en utilisant son ID
    const post = await Post.findByPk(req.params.id);
    if (post) {
        // Met à jour l'article avec les données fournies dans le corps de la requête
        await post.update(req.body);
        // Renvoie l'article mis à jour
        res.json(post);
    } else {
        // Si l'article n'est pas trouvé, renvoyer un statut 404 avec un message d'erreur
        res.status(404).send('Post not found');
    }
});

// Définition de la route DELETE /posts/:id pour supprimer un article
router.delete('/:id', async (req, res) => {
    // Trouve l'article à supprimer en utilisant son ID
    const post = await Post.findByPk(req.params.id);
    if (post) {
        // Supprime l'article si trouvé
        await post.destroy();
        // Renvoie un statut 204 (No Content) pour indiquer que l'article a été supprimé
        res.status(204).send();
    } else {
        // Si l'article n'est pas trouvé, renvoyer un statut 404 avec un message d'erreur
        res.status(404).send('Post not found');
    }
});

// Exporte ce routeur pour l'utiliser dans d'autres parties de l'application
module.exports = router;
