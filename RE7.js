document.addEventListener("DOMContentLoaded", function () {
    const tarjeta = document.querySelector(".beneficio-card");
    if (!tarjeta) {
        return;
    }

    tarjeta.addEventListener("mouseenter", function () {
        tarjeta.classList.add("beneficio-card--destacado");
    });

    tarjeta.addEventListener("mouseleave", function () {
        tarjeta.classList.remove("beneficio-card--destacado");
    });
});