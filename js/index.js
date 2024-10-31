const sections = document.querySelectorAll(".section");
let currentSectionIndex = 0;

window.addEventListener("wheel", (event) => {
    if (event.deltaY > 0) { // Scroll hacia abajo
        if (currentSectionIndex < sections.length - 1) {
            currentSectionIndex++;
        }
    } else if (event.deltaY < 0) { // Scroll hacia arriba
        if (currentSectionIndex > 0) {
            currentSectionIndex--;
        }
    }

    // Desplazar a la sección actual
    sections[currentSectionIndex].scrollIntoView({ behavior: "smooth" });
})