---
title: Découvrez la Maison Source
publishDate: 2020-03-04 00:00:00
img: /assets/work/MaisonSource/maisonSourceWeb.png
img_alt: site vitrine Maison Source Web
img_responsive: /assets/work/MaisonSource/maisonSourceTel.png
img_responsive_alt: site vitrine Maison Source Responsive
description: |
    Dans le cadre de mon stage, j'ai eu l'occasion de travailler sur la création d'un site vitrine pour la Maison Source, une entreprise souhaitant renforcer sa présence en ligne et présenter ses produits de manière attrayante et professionnelle.

tags:
    - Développement Web
    - WordPress / PHP
    - Design UI/UX
---
<div class="text">
<div class="container">
  <h2>Objectif :</h2>
  <p>
    L'objectif principal était de retranscrire un modèle Figma fourni par mon maître de stage en pages web fonctionnelles. Ce modèle servait de guide pour le design, l'ergonomie et la navigation du site, afin d'assurer une expérience utilisateur optimale.
  </p>
</div>

<div class="container">
  <h2>Étapes du projet :</h2>
  <p>
    J'ai commencé par analyser le modèle Figma pour comprendre la structure, le style et les fonctionnalités requises pour le site. Cela a impliqué de déterminer comment les différentes sections du site allaient s'agencer et quel contenu devait être mis en avant.
  </p>
</div>

<div class="container">
  <h2>Développement avec WordPress et PHP :</h2>
  <p>
    Pour créer le site, j'ai utilisé WordPress comme système de gestion de contenu (CMS) en combinaison avec PHP pour gérer les fonctionnalités dynamiques. J'ai appris à personnaliser les thèmes et à intégrer des plugins afin de répondre aux besoins spécifiques du projet. Cela m'a permis de développer une meilleure compréhension de la personnalisation des sites WordPress.
  </p>
</div>

<div class="container">
  <h2>Intégration du Design :</h2>
  <p>
    En utilisant le modèle Figma comme référence, j'ai commencé à construire les pages du site, en veillant à respecter les styles, les couleurs et la typographie définis. Cela a inclus l'utilisation de CSS pour le style et l'adaptation du design pour différents appareils (responsive design).
  </p>
</div>

<div class="container">
  <h2>Utilisation des Menus Hamburger :</h2>
  <p>
    Pour optimiser la navigation, surtout sur les appareils mobiles, j'ai intégré des menus hamburger. Cela a rendu le site plus accessible et convivial pour les utilisateurs.
  </p>
</div>
</div>

<!-- Carrousel simple -->
<div class="carousel">
  <div class="carousel-slides">
    <img src="/assets/work/MaisonSource/accueil.jpg" />
    <img src="/assets/work/MaisonSource/enfant.png" />
    <img src="/assets/work/MaisonSource/aussi.png" />
    <img src="/assets/work/MaisonSource/fonction.png"/>
    <img src="/assets/work/MaisonSource/temoignages.png" />
    <img src="/assets/work/MaisonSource/actu.png" />
    <img src="/assets/work/MaisonSource/contact.png" />
  </div>
  <button class="carousel-button prev" onclick="moveSlide(-1)">&#10094;</button>
  <button class="carousel-button next" onclick="moveSlide(1)">&#10095;</button>
</div>

<div class="text">
<div class="container">
  <h2>Gestion des Liens et des Redirections :</h2>
  <p>
    J'ai également pris en charge la gestion des liens internes et des redirections pour garantir une navigation fluide. Cela a été essentiel pour assurer que les utilisateurs pouvaient trouver facilement les informations qu'ils recherchaient.
  </p>
</div>

<div class="container">
  <h2>Tests et Validation :</h2>
  <p>
    Après avoir développé les pages, j'ai effectué des tests pour vérifier que toutes les fonctionnalités fonctionnaient correctement et que le site était compatible avec différents navigateurs et appareils.
  </p>
</div>

<div class="container">
  <h2>Résultats :</h2>
  <p>
    Le site vitrine de la Maison Source a été lancé avec succès, permettant à l'entreprise de mieux présenter ses produits et d'améliorer sa visibilité en ligne. J'ai reçu des retours positifs sur le design et la convivialité du site, ce qui a renforcé ma confiance en mes compétences en développement web.
  </p>
</div>

<div class="container">
  <h2>Conclusion :</h2>
  <p>
    Ce projet m'a non seulement permis de mettre en pratique mes connaissances en PHP et WordPress, mais aussi de développer des compétences en design et en gestion de projet. J'ai appris à surmonter des défis techniques et à trouver des solutions efficaces pour répondre aux exigences du client.
  </p>
</div>
</div>

<style>
.text {
    width: auto; 
    height: auto; 
       margin-left: -200px;
    margin-right: -200px;
    margin-top:2rem;
    margin-bottom:2rem;
}



/* Container en grid */
.container {
  display: grid;
  grid-template-columns: 1fr 2fr; /* 1/3 pour les titres, 2/3 pour les textes */
  gap: 2rem;
  margin-bottom: 2rem;
  max-width: none; /* Permet de supprimer la largeur maximale */
    width: auto;
}
.content[data-astro-cid-qwekciqp] h2 {
    margin:0;
}
/* Ajustements du style pour les titres et les paragraphes */
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
  text-align: justify;
}

.container p:first-of-type {
  margin-top: 2rem;
}

.container p:last-of-type {
  margin-bottom: 2rem;
}

/* Styles pour le carrousel */
.carousel {
  position: relative;
  width: 100%;
  max-width: 600px; /* Largeur maximale */
  height: 500px; /* Hauteur maximale */
  overflow: hidden;
  margin: 20px auto; /* Centrage avec une marge en haut et en bas */
}

.carousel-slides {
  display: flex;
  transition: transform 0.5s ease;
  width: 100%; /* Pour que les images s'affichent côte à côte */
  height: 100%; /* Assure que les slides respectent la hauteur du carrousel */
}

.carousel-slides img {
  min-width: 100%; /* Assure que chaque image prend toute la largeur du carrousel */
  height: 100%; /* Ajuste la hauteur de l'image au conteneur */
  object-fit: contain; /* L'image sera contenue sans déformation */
  display: block; /* Assure que l'image est un bloc pour le centrage */
}

.content[data-astro-cid-qwekciqp] img {
    border-radius: none;
    box-shadow: none;
    background: none;
    border: none;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  cursor: pointer;
  font-size: 28px; /* Agrandissement des flèches */
  padding: 10px;
  z-index: 10;
}

.prev {
  left: 10px; /* Position du bouton précédent */
}

.next {
  right: 10px; /* Position du bouton suivant */
}

/* Media query pour les appareils mobiles */
@media (max-width: 768px) {
   .tags {
        display: flex; /* Utilise flexbox pour l'affichage des tags */
        flex-direction: column; /* Les tags s'affichent en colonne sur mobile */
            align-items: center;
        justify-content: center;
        margin: 1rem 0; /* Ajoute un espacement vertical */
    }

    .tags span {
        margin-bottom: 0.5rem; /* Ajoute un espacement entre chaque tag */
        font-size: var(--text-md); /* Taille de police adaptée pour les petits écrans */
    }

    .text {
        margin: 1rem; /* Ajustement des marges pour les écrans plus petits */
    }

    .container {
        grid-template-columns: 1fr; /* Une seule colonne sur mobile */
    }

    .carousel {
        max-width: 100%; /* Ajuste la largeur du carrousel pour qu'il prenne tout l'espace */
        height: 300px; /* Hauteur réduite pour les mobiles */
    }

    .carousel-button {
        font-size: 20px; /* Réduit la taille des boutons pour les appareils mobiles */
    }

    .container h2 {
        font-size: var(--text-lg); /* Taille des titres adaptée pour les petits écrans */
    }

    .container p {
        font-size: var(--text-md); /* Taille des paragraphes adaptée pour les petits écrans */
    }
}

</style>

<script>
  let currentSlide = 0;

  function showSlide(index) {
    const slides = document.querySelector('.carousel-slides');
    const totalSlides = slides.children.length;

    // Boucle pour le défilement circulaire
    if (index >= totalSlides) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = totalSlides - 1;
    } else {
      currentSlide = index;
    }

    // Ajuster la position des images
    slides.style.transform = `translateX(${-currentSlide * 100}%)`;
  }

  function moveSlide(direction) {
    showSlide(currentSlide + direction);
  }

  // Initialiser le carrousel
  showSlide(currentSlide);
</script>
