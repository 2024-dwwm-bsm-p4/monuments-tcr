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
maplayer = document.getElementById("map");
mapcontainer = document.getElementById("mapcontainer");

nav = "";
maplayer.style.display = "none";

var map = L.map('map').setView([48.8566, 2.3522], 18);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 28,
    attribution: '© OpenStreetMap'
}).addTo(map);

divaffichage = document.getElementById("affichage");

// Création d'un tableau contenant les images
const images = [img_tour_eiffel, img_notre_dame, img_arc_de_triomphe, img_mont_saint_michel, img_versailles];

// Fonction pour la gestion des boutons / affichage
function setupEventListeners(btn, img, content, navValue) {
    btn.addEventListener("click", () => {
        updateContent(content);
        applyGrayscale(img);
        nav = navValue;
        navChange();
        maplayer.style.display = "block";
        setTimeout(() => {
            map.invalidateSize(); 
        }, 200);  
    });

    img.addEventListener("click", () => {
        updateContent(content);
        applyGrayscale(img);
        nav = navValue;
        navChange();
        maplayer.style.display = "block"; 
        setTimeout(() => {
            map.invalidateSize();
        }, 200); 
    });
}

// Fonction pour mettre à jour le texte avec l'animation
function updateContent(content) {
    const affichageContent = divaffichage.querySelector('.affichage-content');
    affichageContent.classList.remove("element-appear-left");

  
    setTimeout(() => {
        affichageContent.innerHTML = content; 
        affichageContent.classList.add("element-appear-left");  
    }, 10);
}


// Contenu affiché pour chaque image et bouton
setupEventListeners(btn_tour_eiffel, img_tour_eiffel, `
    <h2>Tour Eiffel</h2><p><h3>Paris, France</h3></p>
    <h4><p>La Tour Eiffel, véritable emblème de Paris, est une prouesse d'ingénierie construite par Gustave Eiffel en 1889. Haute de 330 mètres, elle offre une vue imprenable sur la capitale française et attire des millions de visiteurs chaque année.</p></h4>
`, "eiffel");

setupEventListeners(btn_notre_dame, img_notre_dame, `
    <h2>Notre Dame</h2><p><h3>Paris, France</h3></p>
    <h4><p>Notre-Dame de Paris, chef-d'œuvre de l'architecture gothique, est une cathédrale emblématique située au cœur de la capitale. Construite au XIIe siècle, elle est célèbre pour ses vitraux magnifiques, ses gargouilles et son histoire profondément liée à la culture française.</p></h4>
`, "dame");

setupEventListeners(btn_arc_de_triomphe, img_arc_de_triomphe, `
    <h2>Arc de Triomphe</h2><p><h3>Paris, France</h3></p>
    <h4><p>L'Arc de Triomphe, majestueux monument parisien, domine la place de l'Étoile et célèbre les victoires militaires françaises. Inauguré en 1836, il rend hommage aux soldats qui ont combattu pour la France, notamment durant les guerres napoléoniennes, et offre une vue panoramique impressionnante sur la capitale.</p></h4>
`, "triomphe");

setupEventListeners(btn_mont_saint_michel, img_mont_saint_michel, `
    <h2>Mont Saint-Michel</h2><p><h3>Normandie, France</h3></p>
    <h4><p>Le Mont-Saint-Michel, joyau de l'architecture médiévale, se dresse majestueusement sur un îlot rocheux en Normandie. Ce site classé au patrimoine mondial de l'UNESCO est célèbre pour son abbaye bénédictine, qui attire des millions de visiteurs chaque année, fascinés par ses paysages époustouflants, ses marées spectaculaires et son histoire riche, remontant à plus de mille ans.</p></h4>
`, "michel");

setupEventListeners(btn_versailles, img_versailles, `
    <h2>Versailles</h2><p><h3>Yvelines, France</h3></p>
    <h4><p>Le château de Versailles, emblème du pouvoir royal français, est un chef-d'œuvre de l'architecture classique et un symbole de l'absolutisme de Louis XIV. Situé à quelques kilomètres de Paris, ce vaste palais, avec ses somptueux appartements, ses jardins à la française et ses célèbres fontaines, attire des millions de visiteurs chaque année, émerveillés par la grandeur et l'histoire de ce site classé au patrimoine mondial de l'UNESCO.</p></h4>
`, "versailles");

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

// Fonction pour ajuster la vue de la carte en fonction du monument
function navChange() {
    if (nav == "eiffel") {
        map.setView([48.858950, 2.294481], 18);
    }
    if (nav == "dame") {
        map.setView([48.853261, 2.349742], 18);
    }
    if (nav == "triomphe") {
        map.setView([48.87396808523703, 2.2950489547306456], 18);
    }
    if (nav == "michel") {
        map.setView([48.636698, -1.511855], 15);
    }
    if (nav == "versailles") {
        map.setView([48.806804, 2.119881], 18);
    }
}
