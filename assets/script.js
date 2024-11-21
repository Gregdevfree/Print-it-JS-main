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
let tagLine = document.querySelector('#banner p') // au lieu de '#banner p span' qui gardait "Impression tous formats" en 1ère ligne
let dots = document.querySelectorAll('.dot')

// Index de l'image actuellement affichée
let currentIndex = 0

// Fonction pour mettre à jour l'image et le texte du carrousel
function updateCarousel() {
  // Mettre à jour l'image
  bannerImage.src = `./assets/images/slideshow/${slides[currentIndex].image}`
  // Mettre à jour le texte
  tagLine.innerHTML = slides[currentIndex].tagLine

  // Mettre à jour les bullet points
  updateDots()
}

// Fonction pour mettre à jour les bullet points (dots)
function updateDots() {
  // Réinitialisation de toutes les classes .dot
  dots.forEach((dot) => {
    dot.classList.remove('dot_selected')
  })

  // Ajout de la classe 'dot_selected' au dot correspondant à l'index actuel
  dots[currentIndex].classList.add('dot_selected')
}

// Fonction de navigation dans le carrousel
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

  // Mettre à jour l'image, le texte, et les bullet points
  updateCarousel()
}

// Ajout de conditions aux eventListeners pour les flèches gauche et droite
if (arrowLeft && arrowRight && bannerImage && tagLine) {
  arrowLeft.addEventListener('click', () => navigateCarousel('left'))
  arrowRight.addEventListener('click', () => navigateCarousel('right'))
} else {
  console.error('Certains éléments DOM nécessaires sont manquants.')
}

// Initialiser le carrousel avec la première image et texte
updateCarousel()
