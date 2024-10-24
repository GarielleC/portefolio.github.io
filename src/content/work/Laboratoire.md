---
title: Laboratoire de Développement
publishDate: 2024-10-23 00:00:00
description: |
  Découvrez un projet de laboratoire réalisé durant ma formation, conçu pour évaluer mes compétences en jonglant entre le backend et le frontend. Ce projet m'a permis d'appliquer des concepts clés de développement tout en créant une application fonctionnelle et interactive.
img: /assets/work/react/drone2.jpg
img_alt: Image du laboratoire 
tags:
  - Fullstack
  - Backend
  - Frontend
---

<section class="container">
  <h2>Petit Laboratoire de Développement</h2>
  <div class="gridItem">
    <p>
      Ce projet consistait à créer une application qui simule un site de e-commerce pour les drones FPV et les voitures télécommandées, où l'utilisateur peut interagir avec différentes fonctionnalités, telles que parcourir les produits, ajouter des articles au panier, gérer une liste de favoris et consulter le stock disponible.
    </p>
    <p>
      J'ai intégré un système de gestion de base de données pour stocker ces informations, ce qui m'a permis de travailler à la fois sur le frontend avec React et le backend avec une API REST.
    </p>
    <ul>
      <li>Fonctionnalités principales :
        <ul>
          <li>Les utilisateurs peuvent parcourir les produits disponibles et voir des informations détaillées.</li>
          <li>Ajout au panier : Les utilisateurs ont la possibilité d'ajouter des articles à leur panier pour un achat ultérieur.</li>
          <li>Liste de favoris : Permet aux utilisateurs de sauvegarder leurs articles préférés pour y revenir plus tard.</li>
          <li>Consultation du stock : Les utilisateurs peuvent vérifier la disponibilité des articles en temps réel.</li>
        </ul>
      </li>
    </ul>
    <p>
      Ce projet a constitué ma première expérience avec un projet d'une telle envergure. Il m'a permis de clarifier mes préférences en matière de développement, que ce soit en backend, frontend ou fullstack, tout en me faisant découvrir Sequelize et la gestion des bases de données.
    </p>
    <p>
      J'ai également travaillé sur l'intégration entre le frontend et le backend, assurant une communication fluide dans les deux sens. Cette initiative a été déterminante pour renforcer mes compétences en développement fullstack, en intégrant des appels API et en manipulant efficacement les données. J'ai approfondi ma maîtrise de la gestion d'état avec des hooks, ce qui a enrichi ma capacité à concevoir des applications réactives et intuitives.
    </p>
  </div>
</section>

<video controls>
  <source src="/assets/work/react/labo.mp4" type="video/mp4">
</video>

<section class="container">
  <h2>Conclusion</h2>
  <div class="gridItem">
    <p>
      Ce laboratoire de développement m'a offert une expérience précieuse pour mettre en pratique mes connaissances et compétences techniques. En jonglant avec les différentes facettes du développement, j'ai pu appliquer des concepts théoriques à des situations réelles, consolidant ainsi ma formation et ma préparation pour des projets futurs.
    </p>
  </div>
</section>

<style>
/* Styles généraux pour le texte */
.text {
    width: auto; 
    height: auto; 
    margin-top: 2rem;
    margin-bottom: 2rem;
}

/* Container en grid */
.container {
    display: grid;
    grid-template-columns: 1fr 2fr; 
    gap: 2rem;
    margin-bottom: 2rem;
    max-width: none; 
    width: auto;
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

.gridItem p {
    font-size: var(--text-lg);
    line-height: 1.6;
    margin-top: 2rem;
}

.gridItem p:last-of-type {
    margin-top: 2rem; /* Applique une marge supérieure de 2rem au dernier paragraphe */
}

/* Styles pour les vidéos */
video {
    width: 100%; 
    height: auto; 
    margin-top: 1rem;
    border-radius: 8px; 
}

/* Styles pour les listes */
.gridItem ul {
    margin: 1.5rem 0; /* 1.5rem en haut et en bas */
}

.gridItem ul li {
    font-size: var(--text-md); 
    margin-bottom: 1.5rem; 
}

/* Media query pour les appareils mobiles */
@media (max-width: 768px) {
    .text {
        margin: 1rem;
    }

    .container {
        grid-template-columns: 1fr; 
    }

    .container h2 {
        font-size: var(--text-lg); 
    }

    .container p {
        font-size: var(--text-md); 
    }
}
</style>
