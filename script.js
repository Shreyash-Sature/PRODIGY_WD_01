const navbar = document.getElementById("navbar");
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    // Gradual navbar background opacity
    let scrollValue = window.scrollY;
    let opacity = Math.min(scrollValue / 400, 1);
    navbar.style.background = `rgba(0, 0, 0, ${opacity})`;

    // Active link highlight
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (scrollValue >= sectionTop && scrollValue < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove("active"));
            document.querySelector(`.nav-links a[href="#${section.id}"]`)
                .classList.add("active");
        }
    });
});
