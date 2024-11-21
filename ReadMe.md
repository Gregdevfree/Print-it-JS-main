# Print-it-JS-main
1er commit "Etape 1 projet 8 - ajout des flèches slider"
-->Ajout des 2 flèches dans index.html et sans modifier le css

<div id="banner"> <!--carrousel de 4 images-->
		<img class="banner-img" src="./assets/images/slideshow/slide1.jpg" alt="Banner Print-it">
		<!--intégration des flèches de navigation-->
		<img class =" arrow arrow_left" src="./assets/images/arrow_left.png" alt="arrow_left"><!--voir si on renomme alt en suivant ou précédent pour accessibilité-->
		<img class =" arrow arrow_right" src="./assets/images/arrow_right.png" alt="arrow_right">
		<p>Impressions tous formats <span>en boutique et en ligne</span></p>
--> suppression du doublon body {} dans style.css

2e commit "Etape 2 projet 8 - eventListener sur chacune des flèches-2ème version"(annule et remplace le précédent commit)
-->modification du html:
Pour améliorer l'accessibilité, ajout des attributs aria-label sur les flèches gauche et droite

<div id="banner"> <!--carrousel/slider-->
		<img class="banner-img" src="./assets/images/slideshow/slide1.jpg" alt="Banner Print-it">
		<!--intégration des flèches de navigation-->
		<img class="arrow arrow_left" src="./assets/images/arrow_left.png" alt="Précédente" aria-label="Image précédente">
		<img class="arrow arrow_right" src="./assets/images/arrow_right.png" alt="Suivante" aria-label="Image suivante">
		<p>Impressions tous formats <span>en boutique et en ligne</span></p>

-->suppression de <script src="script.js" defer></script> car déjà présence de <script src="./assets/script.js"></script> en fin du <body>

-->tests console.log et alert () voir copies d'écrans dans soutenance

3e commit "Etape 3 projet 8 - Ajout des bullet points au slider"
-->4 slides dans const slides donc 4 bullet points avec slides.length; dans Console -->voir copies d'écrans dans soutenance
-->ajout dans html des 4 bullet points d'après les classes CSS .dots; .dot et .dot-selected
		<div class="dots">
			<div class="dot dot_selected"></div>
			<div class="dot"></div>
			<div class="dot"></div>
			<div class="dot"></div>
		</div>
-->le point qui signale la diapositive en cours de visionnage est dot_selected avec la propriété background-color: blanc

