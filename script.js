// Siddhi Vision Interactive Scripts ✨

document.addEventListener("DOMContentLoaded", () => {

    console.log("✨ Siddhi Vision loaded successfully!");

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function(e){

            e.preventDefault();

            document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });

        });

    });


    // Hero text animation
    const heroTitle = document.querySelector("h1");

    heroTitle.style.opacity = "0";

    setTimeout(() => {

        heroTitle.style.transition = "1s";
        heroTitle.style.opacity = "1";

    },300);


});
const words = [
    "AI Engineer",
    "Full Stack Developer",
    "Future Founder",
    "Tech Explorer"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function typeEffect(){

    const element = document.getElementById("typing");

    if(!element) return;

    current = words[i];

    if(!isDeleting){

        element.textContent = current.substring(0,j++);
        
        if(j > current.length){
            isDeleting = true;
            setTimeout(typeEffect,1000);
            return;
        }

    } else {

        element.textContent = current.substring(0,j--);

        if(j < 0){
            isDeleting = false;
            i = (i+1)%words.length;
        }
    }

    setTimeout(typeEffect,100);
}

typeEffect();
