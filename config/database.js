const { Sequelize } = require('sequelize');
/**
 * Importe la classe Sequelize depuis le module Sequelize.
 * Cette classe est utilisée pour configurer et gérer la connexion à la base de données.
 */

const sequelize = new Sequelize('database', 'mayssa', 'accessforall', {
    /**
     * Crée une instance de Sequelize qui configure la connexion à la base de données.
     * Les paramètres sont :
     * - `'database'` : Le nom de la base de données à laquelle se connecter.
     * - `'username'` : Le nom d'utilisateur pour la connexion.
     * - `'password'` : Le mot de passe pour l'utilisateur.
     * - Un objet de configuration supplémentaire avec des options spécifiques.
     */
    
    host: 'db',
    // Définit l'hôte de la base de données. Ici, `db` fait référence au service de la base
    // de données défini dans le fichier `docker-compose.yml`.

    dialect: 'postgres',
    // Spécifie le dialecte de la base de données. Ici, on utilise `postgres` pour PostgreSQL.
    define: {
        timestamps: true, // Ajoute automatiquement createdAt et updatedAt
        underscored: true, // Utilise des noms de colonnes snake_case (optionnel)
    },
});

module.exports = sequelize;
/**
 * Exporte l'instance de Sequelize configurée pour qu'elle puisse être utilisée
 * dans d'autres fichiers de l'application.
 */
