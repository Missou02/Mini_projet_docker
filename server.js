const express = require('express');
/**
 * Importe le module `express`, un framework minimaliste pour créer des serveurs Node.js.
 */

const bodyParser = require('body-parser');
/**
 * Importe le module `body-parser`, qui permet de traiter les données des requêtes HTTP.
 * Il est utilisé ici pour analyser le corps des requêtes au format JSON.
 */

const sequelize = require('./config/database');
/**
 * Importe l'instance Sequelize configurée depuis `./config/database`.
 * Cette instance est utilisée pour gérer la connexion à la base de données.
 */

const postsRoutes = require('./routes/posts');
/**
 * Importe les routes pour gérer les endpoints liés aux "posts" depuis `./routes/posts`.
 */

const app = express();
/**
 * Crée une application Express, qui sera utilisée pour définir les routes et démarrer le serveur.
 */

app.use(bodyParser.json());
/**
 * Configure l'application Express pour utiliser `body-parser`.
 * Cela permet à l'application d'analyser les corps des requêtes envoyées en JSON
 * et de les rendre disponibles dans `req.body`.
 */

app.use('/posts', postsRoutes);

/**
 * Monte les routes liées aux "posts" sur le chemin `/posts`.
 * Par exemple :
 * - Une requête `GET /posts` sera gérée par les routes définies dans `postsRoutes`.
 * - Une requête `POST /posts/add` sera également redirigée vers ce fichier.
 */

const PORT = 3000;
/**
 * Définit le port sur lequel le serveur écoute les requêtes HTTP.
 * Ici, le serveur sera accessible sur `http://localhost:3000`.
 */

sequelize.sync({ force: true })
/**
 * Synchronise les modèles Sequelize avec la base de données.
 * Cela vérifie ou crée les tables dans la base de données, en fonction des modèles définis.
 */

    .then(() => {
        console.log('Database synchronized');
        /**
         * Une fois la synchronisation réussie, affiche un message dans la console
         * confirmant que la connexion à la base de données a réussi.
         */
    })
    .catch(err => console.log('Error synchronizing database:', err));
/**
 * Si la synchronisation échoue (par exemple, en cas de problème de connexion à la base de données),
 * affiche une erreur détaillée dans la console.
 */
