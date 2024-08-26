let links = document.querySelectorAll(".horisontal-menu-point");
let bodyId = document.querySelector("body").id;

for(let link of links) {
    if(link.dataset.active == bodyId) {
        link.classList.add("active");
    }
};



