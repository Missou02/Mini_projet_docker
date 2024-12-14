FROM node:16
# Cette ligne spécifie l'image de base utilisée pour le conteneur.
# Ici, on utilise l'image officielle Node.js, version 16.
# Cette image inclut Node.js et npm préinstallés.

WORKDIR /app
# Définit le répertoire de travail à l'intérieur du conteneur.
# Toutes les commandes suivantes seront exécutées dans ce répertoire.
# Ici, on utilise `/app` comme dossier principal du projet.

COPY package*.json ./
# Copie les fichiers `package.json` et `package-lock.json` depuis votre machine locale
# dans le répertoire de travail du conteneur (`/app`).
# Ces fichiers contiennent les informations nécessaires pour installer les dépendances Node.js.

RUN npm install
# Exécute la commande `npm install` dans le conteneur.
# Cela installe toutes les dépendances définies dans le fichier `package.json`.

COPY . .
# Copie tous les fichiers et dossiers de votre projet depuis la machine locale
# dans le conteneur, à l'emplacement du répertoire de travail (`/app`).
# Cela inclut le code source de votre application.

EXPOSE 3000
# Indique que l'application à l'intérieur du conteneur utilise le port 3000.
# Cela ne mappe pas directement ce port sur l'hôte mais sert de documentation pour les utilisateurs.

CMD ["npm", "run", "dev"]
# Définit la commande par défaut exécutée lorsque le conteneur démarre.
# Ici, il exécute `npm run dev`, qui lance généralement le serveur en mode développement.
# La configuration exacte de `dev` dépend de la commande définie dans le fichier `package.json`.
