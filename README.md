Projet Back-end - Application de Réservation Five

Nom : [Ton Nom ici]Prénom : [Ton Prénom ici]

📊 Fonctionnalités principales

Gestion des utilisateurs (inscription, connexion)

Authentification avec JWT

CRUD sur les terrains de foot (6 terrains)

Génération dynamique des créneaux

Réservation de créneaux

Paiement en ligne via Stripe Checkout (test)

Historique des réservations par utilisateur

Système de confirmation après paiement

✨ Bonus implémentés



📂 Structure du projet

backend/
├── controllers/
│   ├── authController.js
│   ├── creneauxController.js
│   ├── reservationsController.js
│   ├── paiementController.js
│   
├── models/
│   ├── utilisateur.js
│   ├── terrain.js
│   ├── creneau.js
│   ├── reservation.js
│   ├── paiement.js
│
├── routes/
│   ├── authRoutes.js
│   ├── terrainsRoutes.js
│   ├── creneauxRoutes.js
│   ├── reservationsRoutes.js
│   ├── paiementRoutes.js
│
├── middlewares/
│   ├── authMiddleware.js
│
├── .env
├── index.js

⚖️ Librairies principales utilisées

express - serveur web

mongoose - ODM MongoDB

jsonwebtoken - gestion des tokens JWT

joi - validation des données

bcrypt - hash des mots de passe

dotenv - variables d'environnement

stripe - API de paiement

🔗 Lancer le projet

1. Installer les dépendances

npm install

2. Créer un fichier .env

PORT=3000
MONGO_URI=mongodb://localhost:27017/fiveApp
JWT_SECRET=123456789abcdef
STRIPE_SECRET_KEY=sk_test_...

3. Lancer le serveur

npm start

Serveur disponible sur : http://localhost:3000/

👁️ Routes principales

POST /api/auth/signup - inscription

POST /api/auth/login - connexion

GET /api/terrains - liste des terrains

GET /api/creneaux/:terrainId - créneaux disponibles

POST /api/reservations - créer une réservation

POST /api/stripe/create-checkout-session - démarrer un paiement

POST /api/paiement - enregistrer un paiement

🛡️ Sécurité

JWT utilisé pour protéger les routes sensibles

Middleware de vérification de token

Validation avec Joi

Champs obligatoires + types contrôlés dans tous les models Mongoose

📄 Remarques

Toutes les opérations critiques (paiement, réservation) sont protégées contre les doublons

Paiements simulés via Stripe en environnement de test