---
title: ReadEase - En cours
publishDate: 2024-10-23 00:00:00
description: |
  Le projet ReadEase est développé pour une cliente souhaitant créer une plateforme web dédiée à la gestion de sa bibliothèque personnelle. L'objectif principal est d'aider l'utilisateur à suivre ses lectures et à organiser son environnement de lecture de manière optimale.
img: /assets/work/BooksApi/achatLivreeLisa.png
img_alt: A platform for managing personal library
tags:
  - Design
  - Frontend
  - Backend
  - React
  - Sequelize
---

<div class="text">
  <div class="container">
    <div class="gridItem">
      <h2>Contexte du Projet</h2>
    </div>
    <div class="gridItem">
      <p>
        Le projet ReadEase est développé pour une cliente qui souhaite avoir une plateforme attrayante pour gérer sa bibliothèque personnelle. L’objectif principal est de permettre à l'utilisateur de suivre ses lectures et d'organiser efficacement son environnement de lecture. La plateforme sera responsive, avec une page d'accueil comprenant des illustrations originales, des animations, et un mode clair/sombre.
      </p>
    </div>
  </div>

  <div class="container">
    <div class="gridItem">
      <h2>Fonctionnalités Principales</h2>
    </div>
    <div class="gridItem">
      <p>
        ReadEase proposera plusieurs fonctionnalités clés, telles que :
      </p>
      <ul>
        <li>Gestion des livres : Suivi des livres à lire, à acheter, et ceux déjà lus.</li>
        <li>Message d'alerte : Confirmation de la suppression d'un livre et notification lorsqu'un livre a été lu.</li>
        <li>Accès sécurisé : Les fonctionnalités de gestion de la bibliothèque seront accessibles uniquement après connexion.</li>
      </ul>
    </div>
  </div>

  <!-- Carrousel simple -->
  <div class="carousel">
    <div class="carousel-slides">
      <img src="/assets/work/BooksApi/menu1.png" alt="Menu accessible sans connexion" />
      <img src="/assets/work/BooksApi/menu2.png" alt="Menu accessible avec connexion" />
      <img src="/assets/work/BooksApi/acheter.png" alt="Page acheter" />
      <img src="/assets/work/BooksApi/lire.png" alt="Page acheter" />
      <img src="/assets/work/BooksApi/bibli.png" alt="Page acheter" />
      <img src="/assets/work/BooksApi/formulaire.png" alt="Page acheter formulaire" />
      <img src="/assets/work/BooksApi/popup.png" alt="popup" />
      <img src="/assets/work/BooksApi/test.png" alt="test insomnia" />
    </div>
    <button class="carousel-button prev" onclick="moveSlide(-1)">&#10094;</button>
    <button class="carousel-button next" onclick="moveSlide(1)">&#10095;</button>
  </div>

  <div class="container">
    <div class="gridItem">
      <h2>Développement Initial</h2>
    </div>
    <div class="gridItem">
      <p>
        J'ai déjà réalisé la gestion du backend et du frontend du projet en utilisant React et Sequelize. Cette phase a inclus :
      </p>
      <ul>
        <li>Configuration de l'environnement de développement : Installation des outils nécessaires et création de la structure du projet.</li>
        <li>Création des composants React : Développement d'une interface utilisateur réactive et dynamique.</li>
        <li>Gestion de l'état : Utilisation de hooks pour gérer les interactions et l'affichage des données.</li>
      </ul>
    </div>
  </div>

  <div class="container">
    <div class="gridItem">
      <h2>Intégration des Images</h2>
    </div>
    <div class="gridItem">
      <p>
        Les images affichées sur la plateforme proviennent du compte de ma cliente, permettant une visualisation à jour de l'application.
      </p>
    </div>
  </div>

  <div class="container">
    <div class="gridItem">
      <h2>Collaboration et Feedback</h2>
    </div>
    <div class="gridItem">
      <p>
        Je maintiens une communication active avec ma cliente pour ajuster le projet en fonction de ses retours et besoins. Cette collaboration est essentielle pour garantir que le produit final corresponde à ses attentes.
      </p>
    </div>
  </div>

  <div class="container">
    <div class="gridItem">
      <h2>Conclusion</h2>
    </div>
    <div class="gridItem">
      <p>
        Le projet ReadEase représente une excellente occasion d'appliquer mes compétences en développement web tout en répondant aux besoins spécifiques de ma cliente. J'ai hâte de finaliser ce projet et de voir comment il aidera à gérer sa bibliothèque personnelle.
      </p>
    </div>
  </div>
</div>

<style>
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr; /* Deux colonnes : h2 à gauche et p à droite */
    gap: 20px;
    margin-bottom: 2rem;
    margin-left: -100px;
    margin-right: -100px;
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
  .content[data-astro-cid-qwekciqp] img {
    border-radius: none;
    box-shadow: none;
    background: none;
    border: none;
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
    height: 100%; 
  }

  .carousel-slides img {
    min-width: 100%; 
    height: 100%; 
    object-fit: contain; /* L'image sera contenue sans déformation */
    display: block; 
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
  }
  
</style>

<script>
let slideIndex = 0;
showSlides(slideIndex);

function moveSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  const slides = document.querySelectorAll('.carousel-slides img');
  if (n >= slides.length) {slideIndex = 0}
  if (n < 0) {slideIndex = slides.length - 1}
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex].style.display = "block";  
}
</script>
