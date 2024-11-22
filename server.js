const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const postsRoutes = require('./routes/posts');

const app = express();
app.use(bodyParser.json());
app.use('/posts', postsRoutes);

const PORT = 3000;

// Synchroniser Sequelize et démarrer le serveur
sequelize.sync()
    .then(() => {
        console.log('Database connected');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => console.log('Error: ' + err));