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

// Index de l'image actuellement affichée
let currentIndex = 0

// Fonction pour mettre à jour l'image et le texte du carrousel
function updateCarousel() {
  bannerImage.src = `./assets/images/slideshow/${slides[currentIndex].image}`
  tagLine.innerHTML = slides[currentIndex].tagLine
}

function navigateCarousel(direction) {
  // Si direction est 'left', on décrémente l'index, sinon on l'incrémente
  currentIndex =
    direction === 'left'
      ? currentIndex === 0
        ? slides.length - 1
        : currentIndex - 1
      : currentIndex === slides.length - 1
      ? 0
      : currentIndex + 1

  // Mettre à jour l'image et le texte
  updateCarousel()

  // Test avec console.log - A supprimer à l'étape finale
  console.log(
    `Flèche ${direction} cliquée, affichage de l'image à l'index ${currentIndex}`
  )
}

// Ajout des eventListeners
if (arrowLeft && arrowRight && bannerImage && tagLine) {
  arrowLeft.addEventListener('click', () => navigateCarousel('left'))
  arrowRight.addEventListener('click', () => navigateCarousel('right'))
} else {
  console.error('Certains éléments DOM nécessaires sont manquants.')
}

// Initialiser le carrousel avec la première image et texte
updateCarousel()
