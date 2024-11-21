// Tableau contenant les informations des slides (images et textes)
const slides = [
  {
    image: 'slide1.jpg',
    tagLine: 'Impressions tous formats <span>en boutique et en ligne</span>'
  },
  {
    image: 'slide2.jpg',
    tagLine:
      'Tirages haute définition grand format <span>pour vos bureaux et events</span>'
  },
  {
    image: 'slide3.jpg',
    tagLine: 'Grand choix de couleurs <span>de CMJN aux pantones</span>'
  },
  {
    image: 'slide4.png',
    tagLine: 'Autocollants <span>avec découpe laser sur mesure</span>'
  }
]

// Sélection des éléments nécessaires
let arrowLeft = document.querySelector('.arrow_left')
let arrowRight = document.querySelector('.arrow_right')
let bannerImage = document.querySelector('.banner-img')
let tagLine = document.querySelector('#banner p span')


// Ajout de l'eventListener sur la flèche gauche (image précédente)
arrowLeft.addEventListener('click', () => {
  // Test avec console.log ou une alerte pour tester - A supprimer à l'étape finale
  console.log(
    "Flèche gauche cliquée"
  )
  alert('Flèche gauche cliquée')
})

// Ajout de l'eventListener sur la flèche droite (image suivante)
arrowRight.addEventListener('click', () => {
  // Test avec console.log ou une alerte pour tester - A supprimer à l'étape finale
  console.log('Flèche droite cliquée')
  alert('Flèche droite cliquée')
})
