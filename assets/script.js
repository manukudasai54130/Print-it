const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


// ETAPE 2 //
//Sélection des flèches par leurs classes//
const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');

// Ajout de l'écouteur d'événement sur la flèche gauche
leftArrow.addEventListener('click', () => {
    console.log("Flèche gauche cliquée");
});

// Ajout de l'écouteur d'événement sur la flèche droite
rightArrow.addEventListener('click', () => {
    console.log("Flèche droite cliquée");
});

//ETAPE 3  bullets points//
// Sélection des éléments nécessaires
const dotsContainer = document.querySelector('.dots'); 
let currentIndex = 0; // Indice de l'image active

// Fonction pour créer les bullet points
function createDots() {
    slides.forEach((_, index) => {
        const dot = document.createElement('div');//pour chaque image on créer une div qui à la classe dot//
        dot.classList.add('dot');
        if (index === 0) {
            dot.classList.add('dot_selected'); // Si l'index est à 0 alors on ajoute la classe dot selected//
        }
        dotsContainer.appendChild(dot);//Dans ma div avec la classe dots sont insérer mes dot//
    });
}

// Appel de la fonction pour ajouter les bullet points
createDots();

//ETAPE4
/* changement au clique image texte dot*/



const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const bannerImg = document.querySelector('.banner-img');
const tagline = document.querySelector('#banner p');

function updateSlide() {
	console.log("Index actuel :", currentIndex);
    // Changer l'image
    bannerImg.src = slides[currentIndex].image; // change la source de banner image pour aller chercher dans slides l'élément qui correspont à l'index//

    // Changer le texte
    tagline.innerHTML = slides[currentIndex].tagLine;

    // Changer le point actif 
    const dots = document.querySelectorAll('.dot'); 
    dots.forEach(dot => dot.classList.remove('dot_selected')); // Enlève 'dot seclected' de tous les points
    dots[currentIndex].classList.add('dot_selected'); // Ajoute 'dot' au point correspondant à currentIndex
}

arrowRight.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++; //Si l'index est pas à la dernière image on l'augmente et on passe à l'image suivante//
    } else {
        currentIndex = 0;  // sinon on remet l'index à 0 et on affiche la 1ère image//
    }
    updateSlide();
});

arrowLeft.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;//si c'est pas la 1ère image passe à l'image précédente//
    } else {
        currentIndex = slides.length - 1;  // sinon on passe à la dernière image//
    }
    updateSlide();
});




