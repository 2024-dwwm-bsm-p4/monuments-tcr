// Récupération des boutons et images
btn_tour_eiffel = document.getElementById("tour_eiffel");
btn_notre_dame = document.getElementById("notre_dame");
btn_arc_de_triomphe = document.getElementById("arc_de_triomphe");
btn_mont_saint_michel = document.getElementById("mont_saint_michel");
btn_versailles = document.getElementById("versailles");

img_tour_eiffel = document.getElementById("img_tour_eiffel");
img_notre_dame = document.getElementById("img_notre_dame");
img_arc_de_triomphe = document.getElementById("img_arc_de_triomphe");
img_mont_saint_michel = document.getElementById("img_mont_saint_michel");
img_versailles = document.getElementById("img_versailles");
mapcontainer = document.getElementById("map");
nav = "";
mapcontainer.style.display = "none";

var map = L.map('map').setView([48.8566, 2.3522], 18);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 28,
    attribution: '© OpenStreetMap'
}).addTo(map);



divaffichage = document.getElementById("affichage");

// Creation d'un tableau contenant les images

const images = [img_tour_eiffel, img_notre_dame, img_arc_de_triomphe, img_mont_saint_michel, img_versailles];


// Fonction pour la gestion des boutons / affichage
function setupEventListeners(btn, img, content, navValue) {
    btn.addEventListener("click", () => {
        divaffichage.innerHTML = content;
        applyAnimation();
        applyGrayscale(img);
        nav = navValue;
        navChange();
        mapcontainer.style.display = "block";  // Afficher la div contenant la carte
        setTimeout(() => {
            map.invalidateSize();  // Forcer le redimensionnement de la carte
        }, 200);  // Ajouter un petit délai pour garantir que la carte est bien visible avant l'appel
    });

    img.addEventListener("click", () => {
        divaffichage.innerHTML = content;
        applyAnimation();
        applyGrayscale(img);
        nav = navValue;
        navChange();
        mapcontainer.style.display = "block";  // Afficher la div contenant la carte
        setTimeout(() => {
            map.invalidateSize();  // Forcer le redimensionnement de la carte
        }, 200);  // Ajouter un petit délai pour garantir que la carte est bien visible avant l'appel
    });
}


// Contenu affiché pour chaque image et bouton
setupEventListeners(btn_tour_eiffel, img_tour_eiffel, `
    <h2>Tour Eiffel</h2><p><h3>Paris, France</h3></p>
    <h4><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></h4>
    `, "eiffel"
);

setupEventListeners(btn_notre_dame, img_notre_dame, `
    <h2>Notre Dame</h2><p><h3>Paris, France</h3></p>
    <h4><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></h4>,`, "dame"
);

setupEventListeners(btn_arc_de_triomphe, img_arc_de_triomphe, `
    <h2>Arc de Triomphe</h2><p><h3>Paris, France</h3></p>
    <h4><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></h4>`, "triomphe"
);

setupEventListeners(btn_mont_saint_michel, img_mont_saint_michel, `
    <h2>Mont Saint-Michel</h2><p><h3>Paris, France</h3></p>
    <h4><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></h4>,`, "michel"
);

setupEventListeners(btn_versailles, img_versailles, `
    <h2>Versailles</h2><p><h3>Paris, France</h3></p>
    <h4><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></h4>`, "versailles"
);


// Fonction pour mettre les images en gris
function applyGrayscale(clickedImage) {
    images.forEach(image => {
        if (image !== clickedImage) {
            image.style.filter = "grayscale(1)"; 
        } else {
            image.style.filter = "grayscale(0)"; 
        }
    });
}

// Fonction pour appliquer l'animation
function applyAnimation() {
    divaffichage.classList.remove("element-appear-left");

    setTimeout(() => {
        divaffichage.classList.add("element-appear-left");
    }, 10);
}

function navChange(){
if (nav == "eiffel"){
    map.setView([48.858950, 2.294481], 18)
}

if (nav == "dame"){
    map.setView([48.853261, 2.349742], 18)
}

if (nav == "triomphe"){
    map.setView([48.87396808523703, 2.2950489547306456], 18)
}

if (nav == "michel"){
    map.setView([48.636698, -1.511855], 15)
}

if (nav == "versailles"){
    map.setView([48.806804, 2.119881], 18)
}



}