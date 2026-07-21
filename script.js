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