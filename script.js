const menuButton = document.getElementById("menu-toggle");
const navigation = document.getElementById("main-nav");

if (menuButton && navigation) {

    menuButton.addEventListener("click", function () {

        const menuIsOpen = navigation.classList.toggle("active");

        menuButton.textContent = menuIsOpen ? "✕" : "☰";

        menuButton.setAttribute(
            "aria-expanded",
            menuIsOpen ? "true" : "false"
        );

        menuButton.setAttribute(
            "aria-label",
            menuIsOpen ? "Fermer le menu" : "Ouvrir le menu"
        );

    });

    const navigationLinks = navigation.querySelectorAll("a");

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navigation.classList.remove("active");

            menuButton.textContent = "☰";

            menuButton.setAttribute("aria-expanded", "false");

            menuButton.setAttribute("aria-label", "Ouvrir le menu");

        });

    });

}