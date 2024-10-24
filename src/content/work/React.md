---
title: Devoirs en Self-Study
publishDate: 2024-10-23 00:00:00
description: |
  Découvrez une sélection de projets réalisés durant ma formation en self-study, conçus pour approfondir ma maîtrise de React. Ces exercices m'ont permis d'apprendre et de pratiquer les concepts fondamentaux de cette bibliothèque, en mettant l'accent sur la création d'applications interactives et réactives.
img: /assets/work/react/react.jpg
img_alt: Image de la page 
tags:
  - Animation
  - Illustration
  - React
---

<section class="container">
  <h2>Augmenter l'âge avec réinitialisation</h2>
  <div class="gridItem">
    <p>
      Cet exercice consistait à créer une application React simple permettant à l'utilisateur d'entrer un âge, puis de l'augmenter d'un an à chaque clic sur un bouton. L'application inclut également une fonctionnalité de réinitialisation pour remettre l'âge à zéro. J'ai utilisé des composants contrôlés pour gérer l'entrée de l'utilisateur, garantissant que l'état de l'âge reste synchronisé avec l'affichage.
    </p>
    <ul>
      <li>Incrémentation de l'âge : À chaque clic sur le bouton "Gagner une année", l'âge de la personne est augmenté de 1.</li>
      <li>Réinitialisation de l'âge : Le bouton "Réinitialiser" remet l'âge à zéro.</li>
    </ul>
    <p>
      Pour allier mes compétences créatives et techniques, j'ai intégré une illustration que j'ai réalisée. Cet exercice m'a permis d'explorer en profondeur la gestion des événements ainsi que l'état des composants dans React, tout en développant ma capacité à concevoir des interfaces utilisateur intuitives et engageantes.
    </p>
  </div>
</section>
    <video controls>
      <source src="/assets/work/react/age.mp4" type="video/mp4">
    </video>


<section class="container">
  <h2>Gestion de PokeAPI</h2>
  <div class="gridItem">
    <p>
      Pour ce projet, j'ai développé une application React interagissant avec l'API de Pokémon (PokeAPI) pour afficher des informations sur divers Pokémon. L'application permet aux utilisateurs de rechercher un Pokémon par son nom, d'afficher ses détails (type, statistiques, etc.) et de visualiser une liste de Pokémon.
    </p>
    <p>
      J'ai mis en œuvre des requêtes asynchrones pour récupérer les données de l'API en utilisant des fonctions dédiées. Les hooks <code>useState</code> et <code>useEffect</code> ont été employés pour gérer l'état des données et les effets secondaires liés aux requêtes. Lorsqu'un utilisateur sélectionne un Pokémon, l'application met à jour l'affichage pour présenter les détails correspondants.
    </p>
    <p>
      Cet exercice m'a permis de renforcer mes compétences en consommation d'API et en gestion des données asynchrones, tout en explorant la création d'interfaces utilisateur interactives. Cela m'a également donné l'occasion d'appliquer des fonctionnalités telles que la recherche dynamique, favorisant une interaction enrichissante avec l'utilisateur.
    </p>
  </div>
</section>
<img src="/assets/work/react/pokeapi.png" alt="pokeApi" />

<section class="container">
  <h2>Horloge en React</h2>
  <div class="gridItem">
    <p>
      Dans cet exercice, j'ai développé une horloge dynamique utilisant React. L'application affiche l'heure actuelle et la date. J'ai utilisé des hooks comme <code>useState</code> pour gérer l'état de l'heure et <code>useEffect</code> pour mettre à jour l'heure toutes les secondes.
    </p>
    <p>
      Pour apporter une touche créative à ce projet, j'ai créé une animation en fond, ce qui a enrichi l'expérience visuelle de l'application. Ce travail m'a permis de me familiariser davantage avec le cycle de vie des composants et la gestion de l'état dans React, tout en approfondissant mes connaissances sur les hooks et leur utilisation pratique dans des projets interactifs.
    </p>
  </div>
</section>
    <video controls>
      <source src="/assets/work/react/horloge.mp4" type="video/mp4">
    </video>


<section class="container">
  <h2>Conclusion</h2>
  <div class="gridItem">
    <p>
      Ces exercices m'ont beaucoup apporté, tant sur le plan technique que créatif. À travers ces travaux, j'ai non seulement exploré la gestion de l'état, les hooks et l'interaction avec des APIs, mais j'ai également renforcé mes compétences en développement d'interfaces engageantes et intuitives. 
      </p>
      <p>
      Chaque projet a été une occasion d'appliquer de nouvelles fonctionnalités et d'améliorer ma compréhension de la gestion d'état et des événements dans des applications réactives. Cette expérience a sans aucun doute enrichi ma formation, illustrant mon engagement à transformer la théorie en pratique et me préparant pour des défis futurs en développement web.
    </p>
  </div>
</section>

<style>
/* Styles généraux pour le texte */
.text {
    width: auto; 
    height: auto; 
    /* margin-left: -200px;
    margin-right: -200px; */
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

.gridItem  p {
    font-size: var(--text-lg);
    line-height: 1.6;
     margin-top: 2rem;
}

/* .gridItem  p:first-of-type {
    margin-top: 2rem;
} */

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
