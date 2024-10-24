---
title: Le Lotus d'Or - Exercice pratique Node.js
publishDate: 2024-10-23 00:00:00
description: |
    Le projet Le lotus d'or a été réalisé dans le cadre d'une formation pour apprendre à gérer un projet full Node.js. L'objectif était de créer un site web pour un restaurant fictif afin de maîtriser la création et la gestion de bases de données, l'utilisation de SQL Server Management Studio, et la manipulation des routes en Node.js, avec un apprentissage autonome encouragé par une brève explication technique.
img: /assets/work/menu/accueil.png
img_alt: Restaurant website project
tags:
    - Node.js
    - SQL
    - Backend
    - Design
---

<div class="text">
  <div class="container">
    <div class="gridItem">
      <h2>Contexte du Projet</h2>
    </div>
    <div class="gridItem">
      <p>
        Ce projet a été réalisé dans le cadre d'un exercice en formation où nous avions 4 jours pour concevoir un site web pour un restaurant fictif, "Le lotus d'or". Bien que nous n'ayons pas encore reçu de cours approfondis sur Node.js, une brève explication nous a été donnée afin de tester notre capacité à nous débrouiller et à apprendre par nous-mêmes. Le but principal était de relier une base de données SQL Server Management Studio aux pages du site, en manipulant les routes et en affichant les informations stockées.
      </p>
    </div>
  </div>

  <div class="container">
    <div class="gridItem">
      <h2>Fonctionnalités Principales</h2>
    </div>
    <div class="gridItem">
      <p>
        Le projet comprenait les fonctionnalités suivantes :
      </p>
      <ul>
        <li>Gestion de la base de données : Création et gestion des tables via SQL Server Management Studio.</li>
        <li>Routes : Manipulation des routes pour afficher les pages du restaurant.</li>
        <li>Interaction base de données/pages : Connexion entre la base de données et l'affichage des données sur les pages du site.</li>
      </ul>
    </div>
  </div>

  <div class="blockImage">
    <div class="imageGroup">
      <img src="/assets/work/menu/accueil.png" />
      <img src="/assets/work/menu/menu.png" />
    </div>
    <div class="imageGroup--lower"">
      <img src="/assets/work/menu/potage.png" />
      <img src="/assets/work/menu/comentaire.png" />
    </div>
  </div>

  <div class="container">
    <div class="gridItem">
      <h2>Développement Initial</h2>
    </div>
    <div class="gridItem">
      <p>
        L'objectif de ce projet était avant tout technique. Ceux qui parvenaient à atteindre l'objectif principal — la gestion de la base de données et l'affichage des informations sur les pages — pouvaient alors se concentrer sur l'aspect design. Le design n'était donc qu'un bonus, accordé uniquement à ceux qui avaient complété les fonctionnalités de base avant la date limite de rendu.
      </p>
    </div>
  </div>

  <div class="container">
    <div class="gridItem">
      <h2>Conclusion</h2>
    </div>
    <div class="gridItem">
      <p>
        Ce projet a été une excellente occasion de tester notre capacité à apprendre rapidement et à nous adapter à un nouveau framework. Il m'a permis d'explorer Node.js et la gestion de bases de données tout en m'exerçant à la logique de développement backend.
      </p>
    </div>
  </div>
</div>

<style>

.blockImage {
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    justify-items: center;
}

.blockImage img {
    width: 90%;
    border-radius: 10px;
    object-fit: cover;
}

.imageGroup {
    display: flex;
    flex-direction: column;
    align-items: center; 
    gap: 1rem;
}

.imageGroup--lower {
    display: flex;
    flex-direction: column; 
    align-items: center; 
    margin-top: 40px; 
    gap: 1rem;
}
  
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 2rem;
  }

  .container h2 {
    margin: 0;
    font-size: var(--text-xl);
    text-align: left;
  }

  .container h2:first-of-type {
    margin-top: 2rem;
  }

  .container h2:last-of-type {
    margin-bottom: 2rem;
  }

  .container p {
    font-size: var(--text-lg);
    margin: 2rem 0;
  }

  .container ul {
    margin: 2rem 0;
  }

  .container li {
    margin-bottom: 1rem;
  }

  /* Media query pour les appareils mobiles */
@media (max-width: 768px) {
    .container {
        grid-template-columns: 1fr; 
        margin-left: 0; 
        margin-right: 0;
    }

    .container h2 {
        font-size: var(--text-lg);
    }

    .container p,
    .container ul,
    .container li {
        font-size: var(--text-md); 
        margin: 1rem 0; 
    }

    /* Styles pour afficher les images en une seule colonne */
    .blockImage {
        display: grid; 
        grid-template-columns: 1fr; 
        gap: 0.5rem; 
    }

    .blockImage img {
        width: 100%; /* Les images prennent toute la largeur de leur conteneur */
        object-fit: cover; /* Ajustement sans déformation */
    }

    .imageGroup, .imageGroup--lower {
        gap: 0.5rem; 
    }
}

</style>
