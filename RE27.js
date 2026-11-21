document.addEventListener("DOMContentLoaded", function () {
    const marcadores = document.querySelectorAll(".marcador");
    const tarjetas = document.querySelectorAll(".tarjeta-contenedor");

    function activarPar(idObjetivo) {
        marcadores.forEach(function (marcador) {
            const activo = marcador.dataset.target === idObjetivo;
            marcador.classList.toggle("is-active", activo);
            marcador.setAttribute("aria-pressed", String(activo));
        });

        tarjetas.forEach(function (tarjeta) {
            const activa = tarjeta.id === idObjetivo;
            tarjeta.classList.toggle("is-active", activa);
        });
    }

    marcadores.forEach(function (marcador) {
        marcador.addEventListener("click", function () {
            const idObjetivo = marcador.dataset.target;
            activarPar(idObjetivo);
            const tarjetaCorrespondiente = document.getElementById(idObjetivo);
            if (tarjetaCorrespondiente) {
                tarjetaCorrespondiente.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }
        });
    });

    tarjetas.forEach(function (tarjeta) {
        tarjeta.addEventListener("click", function () {
            activarPar(tarjeta.id);
        });

        tarjeta.addEventListener("keydown", function (evento) {
            if (evento.key === "Enter" || evento.key === " ") {
                evento.preventDefault();
                activarPar(tarjeta.id);
            }
        });
    });
});