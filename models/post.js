const { DataTypes } = require('sequelize');
/**
 * Importe `DataTypes` depuis le module Sequelize.
 * `DataTypes` permet de définir les types de données pour les colonnes de la table.
 */

const sequelize = require('../config/database');
/**
 * Importe une instance de Sequelize configurée (connexion à la base de données)
 * depuis le fichier `../config/database`.
 */

const Post = sequelize.define('Post', {
    /**
     * Définit un modèle nommé `Post`. Un modèle représente une table dans la base de données.
     * Le modèle ici s'appelle `Post` et sera mappé à une table du même nom (ou son équivalent en minuscules/pluriel).
     */
    
    title: {
        type: DataTypes.STRING,
        // Définit la colonne `title` de type chaîne de caractères (STRING).
        
        allowNull: false,
        // Indique que cette colonne ne peut pas avoir de valeur nulle (elle est obligatoire).
    },
    
    content: {
        type: DataTypes.TEXT,
        // Définit la colonne `content` de type texte (TEXT), utilisée pour des contenus longs.
        
        allowNull: false,
        // Cette colonne est également obligatoire.
    },
},
{
    tableName: 'posts', // vérifiez que le nom est correct
    timestamps: true, // Cela permet d'activer les champs createdAt et updatedAt automatiquement
}
);
/**
 * La méthode `define` crée une structure de table en utilisant les attributs spécifiés.
 * Ici, chaque entrée dans la table `Post` aura deux colonnes : `title` et `content`.
 */

module.exports = Post;
/**
 * Exporte le modèle `Post` afin qu'il puisse être utilisé dans d'autres parties de l'application,
 * comme les contrôleurs ou les fichiers de routes.
 */
