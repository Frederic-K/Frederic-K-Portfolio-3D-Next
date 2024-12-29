/* eslint-disable import/no-anonymous-default-export */
export default {
  projectsPage: {
    title: "Projets",
    subtitle: "Mes Projets",
    catchphrase:
      "Explorer le monde du développement logiciel à travers des projets innovants, un apprentissage continu et des collaborations significatives.",
    projects: {
      "ohmyfood": {
        title: "Ohmyfood",
        subtitle:
          "Dynamisez une page web avec des animations CSS - Site ohmyfood",
        overview:
          "Recruté en tant que développeur junior chez Ohmyfood! Jeune startup de commande de repas en ligne qui souhaite s’imposer sur le marché de la restauration à Paris. Son site 100 % mobile permet aux utilisateurs de composer leur propre menu et réduire leur temps d’attente dans les restaurants car leur menu est préparé à l’avance. Le site se compose dans un premier temps de 4 menus et sera dynamisé avec des animations CSS.",
        specifications: {
          technical: [
            "2 maquettes à intégrer : mobile imposé et libre pour desktop / tablette.",
            "Identité graphique : fonts : logo et titre : Shrikhand / texte : Roboto couleurs : primaire #9356DC (violet), secondaire #FF79DA (rose), tertiaire #99E2D0 (vert).",
            "Développement à réaliser uniquement en HTML et CSS (préprocesseur Sass).",
            "Validation du code par W3C.",
            "Compatibilité avec les navigateurs Chrome et Firefox.",
          ],
          functional: [
            "Les cartes des restaurants sur la page d'accueil redirigent l’utilisateur vers la page du menu du restaurant.",
            "Une flèche dans l’entête des pages des menus renvoie à l'accueil.",
            "Le lien “Contact” dans le pied de page renvoie vers une adresse mail.",
            "Les animations : Loading spinner sur la page d'accueil.",
            "Les boutons doivent s'éclaircir et l’ombre s'accentuer, les “j’aime” en forme de cœur doivent se remplir progressivement.",
            "Les menus doivent apparaître progressivement, et le clic/survole doit faire apparaître une coche coulissante.",
            "Les intitulés des menus doivent être rognés au besoin avec “...”.",
          ],
        },
      },
      "gameon": {
        title: "GameOn",
        subtitle: "Créez une landing page avec Javascript - Site GameOn",
        overview:
          "Recruté en tant que développeur Front-End junior dans une PME, GameOn. Entreprise spécialisée dans les conférences et les concours de jeux. Volonté de simplification de la page d'accueil et du formulaire d’inscription aux concours suite aux retours utilisateurs. Le développeur n’a pas eu le temps de terminer le projet avant son départ pour un nouveau job. Objectif : prendre le relais sur le développement et le terminer.",
        specifications: {
          technical: [
            "Travailler sur un repo forké.",
            "Utiliser des fichiers séparés pour le HTML, le CSS et le JavaScript.",
            "Utilisation exclusive du JavaScript (pas de jquery).",
            "Commenter le code.",
            "2 maquettes à réviser et une Pop-up à créer.",
            "S’assurer que l’affichage soit responsive.",
          ],
          functional: [
            "Rendre fonctionnel le bouton X pour fermer le formulaire.",
            "Mise en place d’un contrôle des informations saisies par l’utilisateur.",
            "Mise en place de messages d’erreur en cas de saisie incorrecte.",
            "Mise en place de la validation du formulaire au click du bouton d’envoi.",
            "Ajouter un message de confirmation après la validation réussie du formulaire.",
          ],
        },
      },
      "fisheye": {
        title: "Fisheye",
        subtitle:
          "Créez un site accessible pour une plateforme de photographes - Site Fisheye",
        overview:
          "Entreprise : site web de photographes freelance qui permet aux photographes indépendants de présenter leurs meilleurs travaux et d’être contactés. Volonté de moderniser le site. Les bases du site ont été commencées par une collègue appelée sur un autre projet. Objectif : prendre le relais sur le développement et rendre le site dynamique et accessible.",
        specifications: {
          technical: [
            "Utiliser des fichiers séparés pour le HTML, le CSS et le Javascript.",
            "Balises sémantiques et commentaire du code si besoin.",
            "Utilisation exclusive de Javascript (pas de JQuery).",
            "2 maquettes et 2 modal à intégrer.",
            "Responsive sur mobile non demandé.",
          ],
          functional: [
            "Page d'accueil : le clic sur le portrait du photographe mène à sa page personnelle.",
            "Page du photographe : Affiche la galerie des travaux du photographe : photo et vidéo.",
            "Possibilité de liker chaque média, un total est affiché.",
            "Possibilité de tri : date, titre ou popularité.",
            "Lightbox : le clic sur un média ouvre une vue rapprochée.",
            "Mise en place d’une modale de contact.",
            "Accessibilité : répondre aux besoins d'accessibilité : Navigation, Contraste, Description alternative.",
          ],
        },
      },
      "lespetitsplats": {
        title: "Les petits plats",
        subtitle:
          "Développez un algorithme de recherche en JavaScript - Site Les petits plats",
        overview:
          "Mon profil : Développeur Freelance missionné par l'entreprise -Les petits plats- en tant que Développeur Front-end. L’entreprise : éditeur de livre de recettes de cuisine. La mission : digitalisation de l’entreprise avec la création de son site web. Le scénario : intégrer la maquette du site, implémenter la fonctionnalité de recherche de recette. L’objectif : avoir un site le plus fluide possible avec un moteur de recherche de recettes le plus rapide possible.",
        specifications: {
          technical: [
            "Utiliser des fichiers séparés pour le HTML, le CSS et le Javascript (éventuellement Bootstrap).",
            "Validation W3C sans erreurs.",
            "1 maquette à intégrer.",
            "1 fichier de 50 recettes.",
            "2 algorithmes de recherche (2 branches du repo) :",
            "boucles natives (for, while…)",
            "programmation fonctionnelle avec les méthodes de l’objet array (forEach, filter, map…).",
          ],
          functional: [
            "Une fiche d’investigation de fonctionnalité avec un algorigramme à destination du Back-end.",
            "La recherche peut se faire via la barre de recherche principale et se déclenche après la saisie de 3 caractères.",
            "La recherche principale peut être affinée via la recherche avancée et est actualisée à chaque filtre ajoutée ou retirée.",
            "La recherche peut se faire via la recherche avancée comprenant 3 listes de filtres (ingrédients, appareils et ustencils) mis à jour après chaque recherche.",
            "Chaque liste de filtre avancé possède sa propre barre de recherche avancée présentant uniquement les filtres disponibles des recettes éventuellement déjà recherchées.",
          ],
        },
      },
      "learnathome": {
        title: "Learn@Home",
        subtitle:
          "Définissez les besoins pour une app de soutien scolaire - Site Learn@Home",
        overview:
          "Vous êtes employé depuis 5 ans chez Dev4U, une entreprise de services du numérique. En tant que lead développeur de l’entité web, vous êtes chargé de la conception du site web pour Learn@Home, une association qui met en relation des enfants en difficulté scolaire avec des tuteurs bénévoles.",
        specifications: {
          technical: [
            "Diagrammes de cas d’usage pour chaque fonctionnalité majeure.",
            "User stories avec critères d'acceptation.",
            "Maquettes du site comprenant les pages de connexion, tableau de bord, chat, calendrier, et gestion des tâches.",
          ],
          functional: [
            "Page de connexion avec récupération de mot de passe et lien de création de compte.",
            "Tableau de bord avec récapitulatif des tâches, liste des événements, et compteur de messages non lus.",
            "Interface de chat avec photo de profil, indicateur de lecture, et horodatage des messages.",
            "Page de calendrier.",
            "Page de gestion des tâches où l'élève peut créer des tâches pour lui-même et le bénévole pour les élèves qu’il suit.",
          ],
        },
      },
      "kasa": {
        title: "KASA",
        subtitle:
          "Développez une application Web avec React et React Router - Site KASA",
        overview:
          "Mon profil : Développeur Freelance missionné par l'entreprise -Kasa- en tant que Développeur Front-end. L’entreprise : leaders de la location d’appartements entre particuliers en France. La mission : refonte totale du site agé de 10 ans pour passer à une stack complète en JS (NodeJs - React) avec de nouvelles maquettes. L’objectif : démarrer le projet React et développer l’ensemble de l’application, les composants React, les routes React Router, en suivant les maquettes Figma (responsives).",
        specifications: {
          technical: [
            "React : Découpage en composants modulaires et réutilisables.",
            "Un composant par fichier.",
            "Structure logique des différents fichiers.",
            "Utilisation des props entre les composants.",
            "Utilisation du state dans les composants quand c'est nécessaire.",
            "Gestion des événements.",
            "Listes.",
            "React Router : Les paramètres des routes sont gérés par React Router dans l'URL pour récupérer les informations de chaque logement.",
            "Il existe une page par route.",
            "La page 404 est renvoyée pour chaque route inexistante, ou si une valeur présente dans l’URL ne fait pas partie des données renseignées.",
            "La logique du routeur est réunie dans un seul fichier.",
          ],
          functional: [
            "Développer l'application en suivant les maquettes Figma pour assurer la responsivité.",
            "Assurer une navigation fluide et intuitive entre les différentes pages de l'application.",
          ],
        },
      },
      "sportsee": {
        title: "SportSee",
        subtitle:
          "Développez un tableau de bord d'analytics avec React - Site SportSee",
        overview:
          "Mon profil : développeur chez SportSee. L’entreprise : une startup dédiée au coaching sportif. La mission : nouvelle version de la page profil de l’utilisateur. L’objectif : développer un tableau de bord permettant à l’utilisateur de suivre le nombre de sessions réalisées, le nombre de calories brûlées et informations clés.",
        specifications: {
          technical: [
            "Développer la page avec React.",
            "Séparation logique du code dans des composants réutilisables.",
            "Utilisation de D3 ou Recharts pour intégrer les graphiques.",
            "Utilisation du backend fourni pour la réalisation des appels HTTP.",
            "Utilisation de Fetch ou Axios pour les appels.",
            "Réaliser les appels hors composant React.",
            "Commencer en travaillant avec un mock des données puis réaliser l’intégration de l’API.",
            "Mettre en place un système de modélisation des données pour formater les données de l’API avant utilisation.",
          ],
          functional: [
            "Kanban avec les User Stories.",
            "Maquette Figma.",
            "Desktop first.",
            "Lisible sur les écrans d’au moins 1024 par 780 pixels.",
          ],
        },
      },
      "argentbank": {
        title: "ArgentBank",
        subtitle:
          "Utilisez une API pour un compte utilisateur bancaire avec React - Site ArgentBank",
        overview:
          "Mon profil : développeur front-end chez Remede Agency. L’entreprise : une agence spécialisée dans le développement d’application web. La mission : aider la banque Argent Bank à mettre en place son application. L’objectif : Création d'une application web permettant aux clients de se connecter et de gérer leurs comptes et leur profil. Spécifier les endpoints d’API nécessaires pour une éventuelle deuxième mission.",
        specifications: {
          technical: [
            "Phase 1 : Développer une application web complète et responsive avec React.",
            "Exploiter les API fournies par le back-end (documentation Swagger disponible).",
            "Utilisation de Redux pour gérer le state de l’ensemble de l’application.",
            "Phase 2 : Proposer une modélisation côté back-end des API pour les transactions.",
            "Fournir la documentation Swagger qui précise : La méthode, Les routes, La description, Les paramètres et réponses.",
          ],
          functional: [
            "Phase 1 : L'utilisateur peut visiter la page d'accueil.",
            "L'utilisateur peut se connecter au système.",
            "L'utilisateur peut se déconnecter du système.",
            "L'utilisateur ne peut voir les informations relatives à son propre profil qu'après s'être connecté avec succès.",
            "L'utilisateur peut modifier le profil et conserver les données dans la base de données.",
            "Phase 2 : Permettre de visualiser toutes leurs transactions pour le mois en cours.",
            "Permettre de visualiser les détails d'une transaction dans une autre vue.",
            "Permettre d'ajouter, de modifier ou de supprimer des informations sur une transaction.",
          ],
        },
      },
      "wealthhealth": {
        title: "Wealth Health",
        subtitle:
          "Faites passer une librairie jQuery vers React - Site Wealth Health : HRnet",
        overview:
          "Mon profil : développeur front-end chez Wealth Health. L’entreprise : une grande société financière. La mission : aider la société à améliorer son application web interne HRnet de gestion des dossiers employés. L’objectif : Faire passer l’application utilisant une librairie JQuery vers React / Faire une nouvelle version des pages “Create Employee” et “Employee List”.",
        specifications: {
          technical: [
            "Migrer l'application existante de jQuery vers React.",
            "Créer des composants React pour les pages 'Create Employee' et 'Employee List'.",
            "Assurer la compatibilité avec les fonctionnalités existantes et améliorer l'interface utilisateur.",
          ],
          functional: [
            "Les utilisateurs doivent pouvoir créer de nouveaux employés et consulter la liste des employés existants.",
            "L'application doit être responsive et offrir une meilleure expérience utilisateur par rapport à la version jQuery.",
          ],
        },
      },
      "agenceazeon": {
        title: "Agence Azeon",
        subtitle:
          "Proposer un MVP du cœur de la page 'offre d'emploi' pour son client",
        overview:
          "Mon profil : développeur front-end pour le compte de l'Agence Azeon.",
        specifications: {
          technical: [
            "Migrer la partie Front-end existante en PHP vers React.",
            "Implémenter un gestionnaire d'état global avec la technologie Redux.",
            "Implémenter une un système de recherche et de filtrage avancé.",
            "Intégrer un système de souscription à la Newsletter avec contrôle des entrées et validation des champs, ainsi de la présence d'une inscription déjà existante avec une notification.",
            "Mettre en place un système d'affichage pour mettre en avant les offres phare ou urgentes.",
          ],
          functional: [
            "Assurer la compatibilité avec les fonctionnalités existantes et améliorer l'interface utilisateur.",
            "Intégrer l'internasionalisation et avec un design full responsive pour une meilleure expérience utilisateur.",
          ],
        },
      },
      "musicfestival": {
        title: "Music Festival",
        subtitle:
          "Page de destination du festival de musique avec Tailwind CSS",
        overview:
          "Ce projet est une implémentation pratique d'une page de destination pour un festival de musique utilisant Tailwind CSS. Il démontre diverses fonctionnalités de Tailwind CSS et des techniques de conception réactive.",
        specifications: {
          technical: [
            "Utilisation de Tailwind CSS pour la conception réactive.",
            "Implémentation de la bascule de mode sombre.",
            "Création d'animations personnalisées.",
            "Intégration d'un carrousel interactif pour les artistes en vedette.",
            "Navigation collante avec menu déroulant.",
            "Mise en page de la chronologie pour le programme de l'événement.",
            "Tableau d'informations sur les billets.",
          ],
          functional: [
            "La page doit être réactive pour les mises en page mobiles et de bureau.",
            "Les utilisateurs peuvent basculer entre les modes clair et sombre.",
            "Le carrousel doit permettre de faire défiler les artistes en vedette.",
            "La navigation doit rester en haut de la page lors du défilement et offrir un menu déroulant pour les sections supplémentaires.",
          ],
        },
      },
      "portfoliolivecv": {
        title: "Portfolio Live CV",
        subtitle: "Portfolio - Live CV (Web App ReactJS)",
        overview:
          "Ceci est mon premier portfolio à l'issue de ma formation ReactJS qui vise à mieux se connaître et montrer les compétences majeures acquises. Vous voulez tester le 'Thème' ou le 'Formulaire' : cliquer sur mon logo !",
        specifications: {
          technical: [
            "Utilisation de ReactJS pour créer une application web interactive.",
            "Intégration de Redux pour la gestion de l'état.",
            "Utilisation de SCSS pour le style et MUI pour les composants d'interface utilisateur.",
          ],
          functional: [
            "L'application permet aux utilisateurs d'interagir avec le thème et le formulaire en cliquant sur le logo.",
            "Elle est conçue pour être réactive et offrir une expérience utilisateur fluide.",
          ],
        },
      },
      "bookstoremernstack": {
        title: "Book Store",
        subtitle: "Book Store - MERN Stack",
        overview:
          "À mi-chemin de mon parcours d'apprentissage de la stack technologique MERN (MongoDB, Express.js, React.js, Node.js), voici une première application pratique de ce que j'ai appris. Très excitant et amusant : créer une application full stack simple appelée 'Book store', revisitée avec une touche de Redux et MUI, incluant un 'mode sombre' et un formulaire avec contrôle des entrées. L'application vous permet de voir la liste des livres à travers un tableau ou des cartes. Créez des références de livres, visualisez un aperçu d'un livre, ses détails, modifiez ses informations et supprimez-le.",
        specifications: {
          technical: [
            "Utilisation de la stack technologique MERN (MongoDB, Express.js, React.js, Node.js) pour créer une application full stack.",
            "Intégration de Redux pour la gestion de l'état.",
            "Utilisation de MUI pour les composants d'interface utilisateur et implémentation d'un mode sombre.",
          ],
          functional: [
            "L'application permet aux utilisateurs de gérer une collection de livres, y compris la création, la visualisation, la modification et la suppression de livres.",
            "Elle offre une interface utilisateur réactive et intuitive.",
          ],
        },
      },
      "fredericksblogv2": {
        title: "Frederic-K’s Blog",
        subtitle: "Frederic-K’s Blog - Version 2",
        overview:
          "Ce blog de démonstration met en avant des compétences en développement Full Stack MERN et propose une gamme de fonctionnalités pour les propriétaires de blogs et les utilisateurs. L'internationalisation (i18n) permet désormais au blog d'être accessible en plusieurs langues pour le contenu statique, offrant une expérience utilisateur personnalisée et inclusive. Les animations Framer Motion enrichissent l'interface utilisateur avec des animations fluides et dynamiques, améliorant l'interaction et l'engagement des utilisateurs.",
        specifications: {
          technical: [
            "Construit avec la stack MERN (MongoDB, Express, React, Node.js).",
            "Frontend : React, Tailwind CSS et Framer Motion.",
            "Backend : Node.js et Express.",
            "Base de données : MongoDB.",
            "Fonctionnalités améliorées : validation des emails, récupération de mot de passe, formulaire de contact, optimisation de la base de données.",
          ],
          functional: [
            "Pour les propriétaires de blogs : créer, mettre à jour et supprimer des articles ; gérer les utilisateurs et les commentaires via un tableau de bord.",
            "Pour les utilisateurs : parcourir les articles avec des carrousels et des lightboxes, fonctionnalité de recherche avancée, création de compte utilisateur (email/mot de passe ou connexion Google), interagir avec les articles (commenter, aimer), formulaire de contact.",
          ],
        },
      },
      "2tat": {
        title: "2TAT",
        subtitle: "2TAT - Outil d'Assistance Technique",
        overview:
          "Cette application est conçue pour faciliter et sécuriser la gestion financière dans le contexte des opérations de marché. Initialement, notre point de départ était une feuille de calcul Excel basique utilisée pour gérer et distribuer les budgets. Cependant, des améliorations significatives ont été identifiées : la précision des calculs et de la distribution financière, ainsi qu'une ergonomie optimisée pour une expérience plus conviviale, simple et intuitive.",
        specifications: {
          technical: [
            "Application de bureau multiplateforme utilisant Tauri (Windows, macOS, Linux).",
            "Interface web moderne construite avec React.",
            "Développement rapide avec Vite et Hot Module Replacement (HMR).",
            "Arithmétique décimale précise avec Decimal.js.",
            "Calculs financiers optimisés et distribution ('algorithme de penny pinching').",
          ],
          functional: [
            "L'application permet de gérer et de distribuer les budgets avec précision et efficacité.",
            "Elle offre une interface utilisateur réactive et intuitive.",
          ],
        },
      },
      "portfolio3dnext": {
        title: "Portfolio 3D Next",
        subtitle: "Portfolio - 3D Next",
        overview:
          "Bienvenue sur la deuxième édition de mon portfolio interactif, conçu pour refléter l'évolution de mes compétences et de mon parcours professionnel. Ce projet actualisé intègre des technologies modernes et des animations 3D pour offrir une expérience utilisateur encore plus immersive et engageante.",
        specifications: {
          technical: [
            "Next.js : Framework React pour le développement d'applications web modernes.",
            "Three.js : Bibliothèque JavaScript pour créer et afficher des graphiques 3D dans le navigateur.",
            "Tailwind CSS : Framework CSS utilitaire pour un design rapide et réactif.",
            "Framer Motion : Bibliothèque pour des animations fluides et dynamiques.",
            "Zustand : Gestion de l'état simple et scalable pour React.",
            "React Hook Form : Gestion des formulaires avec validation intégrée.",
            "Zod : Validation de schémas pour TypeScript et JavaScript.",
            "i18n : Internationalisation pour rendre le contenu accessible dans plusieurs langues.",
            "EmailJS : Service pour envoyer des emails directement depuis le navigateur.",
            "Responsivité : Design adaptatif pour une expérience utilisateur optimale sur tous les appareils.",
          ],
          functional: [
            "Mode Clair ou Sombre : Choisissez entre un thème clair ou sombre pour une expérience visuelle adaptée à vos préférences.",
            "Internationalisation : Accédez au contenu dans plusieurs langues pour une portée globale.",
            "Animations 3D : Profitez d'une expérience visuelle enrichie grâce à des éléments 3D interactifs.",
            "Formulaire de Contact : Un moyen simple et efficace de me joindre pour toute demande.",
          ],
        },
      },
      // TODO: Add more projects here >>> digitaljob / migrate tags ans technology to the array of meta data of project
    },
  },
}
