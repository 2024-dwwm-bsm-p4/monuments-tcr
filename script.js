btn_tour_eiffel = document.getElementById("tour_eiffel");
btn_notre_dame = document.getElementById("notre_dame");
btn_arc_de_triomphe = document.getElementById("arc_de_triomphe");
btn_mont_saint_michel = document.getElementById("mont_saint_michel");
btn_versailles = document.getElementById("versailles");
img_tour_eiffel = document.getElementById("tour_eiffel_img");
img_notre_dame = document.getElementById("notre_dame_img");
img_arc_de_triomphe = document.getElementById("arc_de_triomphe_img");
img_mont_saint_michel = document.getElementById("mont_saint_michel_img");
img_versailles = document.getElementById("versailles_img");
divaffichage = document.getElementById("affichage");

console.log("test");

btn_tour_eiffel.addEventListener("click", () => {
divaffichage.innerHTML = "<h2> Tour Eiffel </h2><p><h3> Paris, France </h3></p> <h4><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, labore quas quam veniam soluta quos exercitationem magni doloribus beatae numquam architecto saepe vitae sit harum, fugiat aperiam voluptate unde reprehenderit.<p></h4>";
applyAnimation();
});

img_tour_eiffel.addEventListener("click", () => {
    divaffichage.innerHTML = "<h2> Tour Eiffel </h2><p><h3> Paris, France </h3></p> <h4><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, labore quas quam veniam soluta quos exercitationem magni doloribus beatae numquam architecto saepe vitae sit harum, fugiat aperiam voluptate unde reprehenderit.<p></h4>";
    applyAnimation();
});

btn_notre_dame.addEventListener("click", () => {
    divaffichage.innerHTML = "<h2> Notre Dame </h2><p><h3> Paris, France </h3></p> <h4><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, labore quas quam veniam soluta quos exercitationem magni doloribus beatae numquam architecto saepe vitae sit harum, fugiat aperiam voluptate unde reprehenderit.<p></h4>"
    applyAnimation();
});

img_notre_dame.addEventListener("click", () => {
    divaffichage.innerHTML = "<h2> Notre Dame </h2><p><h3> Paris, France </h3></p> <h4><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, labore quas quam veniam soluta quos exercitationem magni doloribus beatae numquam architecto saepe vitae sit harum, fugiat aperiam voluptate unde reprehenderit.<p></h4>"
    applyAnimation();
});

btn_arc_de_triomphe.addEventListener("click", () => {
    divaffichage.innerHTML = "<h2> Arc de triomphe </h2><p><h3> Paris, France </h3></p> <h4><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, labore quas quam veniam soluta quos exercitationem magni doloribus beatae numquam architecto saepe vitae sit harum, fugiat aperiam voluptate unde reprehenderit.<p></h4>"
    applyAnimation();
});

img_arc_de_triomphe.addEventListener("click", () => {
    divaffichage.innerHTML = "<h2> Arc de triomphe </h2><p><h3> Paris, France </h3></p> <h4><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, labore quas quam veniam soluta quos exercitationem magni doloribus beatae numquam architecto saepe vitae sit harum, fugiat aperiam voluptate unde reprehenderit.<p></h4>"
    applyAnimation();
});

btn_mont_saint_michel.addEventListener("click", () => {
    divaffichage.innerHTML = "<h2> Mont Saint-Michel </h2><p><h3> Paris, France </h3></p> <h4><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, labore quas quam veniam soluta quos exercitationem magni doloribus beatae numquam architecto saepe vitae sit harum, fugiat aperiam voluptate unde reprehenderit.<p></h4>"
    applyAnimation();
});

img_mont_saint_michel.addEventListener("click", () => {
    divaffichage.innerHTML = "<h2> Mont Saint-Michel </h2><p><h3> Paris, France </h3></p> <h4><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, labore quas quam veniam soluta quos exercitationem magni doloribus beatae numquam architecto saepe vitae sit harum, fugiat aperiam voluptate unde reprehenderit.<p></h4>"
    applyAnimation();
});

btn_versailles.addEventListener("click", () => {
    divaffichage.innerHTML = "<h2> Versailles </h2><p><h3> Paris, France </h3></p> <h4><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, labore quas quam veniam soluta quos exercitationem magni doloribus beatae numquam architecto saepe vitae sit harum, fugiat aperiam voluptate unde reprehenderit.<p></h4>"
    applyAnimation();
});

img_versailles.addEventListener("click", () => {
    divaffichage.innerHTML = "<h2> Versailles </h2><p><h3> Paris, France </h3></p> <h4><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, labore quas quam veniam soluta quos exercitationem magni doloribus beatae numquam architecto saepe vitae sit harum, fugiat aperiam voluptate unde reprehenderit.<p></h4>"
    applyAnimation();
});

function applyAnimation() {
    divaffichage.classList.remove("element-appear-left");

    setTimeout(() => {
        divaffichage.classList.add("element-appear-left");
    }, 10); 
}
