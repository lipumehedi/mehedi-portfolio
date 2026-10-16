// Mobile navigation menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Open and close the menu when the menu button is clicked.
menuToggle.addEventListener("click", function () {
    const menuIsOpen = navLinks.classList.toggle("show");
    menuToggle.setAttribute("aria-expanded", menuIsOpen);
    menuToggle.textContent = menuIsOpen ? "✕" : "☰";
});

// Close the mobile menu after choosing a section.
navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("show");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

// Show the current year in the footer automatically.
document.getElementById("year").textContent = new Date().getFullYear();
