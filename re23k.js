document.addEventListener("DOMContentLoaded", () => {
    const markers = document.querySelectorAll(".marker");
    const infoCard = document.getElementById("container-info-card");
    const statusText = document.getElementById("info-status-text");
    const titleEl = document.getElementById("info-title");
    const descriptionEl = document.getElementById("info-description");

    function syncCardWithMarker(marker) {
        const state = marker.dataset.state;
        const level = marker.dataset.level;
        const name = marker.dataset.name;
        const summary = marker.dataset.summary;

        markers.forEach((btn) => {
            const isActive = btn === marker;
            btn.classList.toggle("is-selected", isActive);
            btn.setAttribute("aria-pressed", String(isActive));
        });

        infoCard.classList.remove("info-card--medio", "info-card--lleno");
        infoCard.classList.add(`info-card--${level}`);

        statusText.textContent = state;
        titleEl.textContent = name;
        descriptionEl.textContent = summary;
    }

    markers.forEach((marker) => {
        marker.addEventListener("click", () => {
            syncCardWithMarker(marker);
        });
    });

    const initialMarker = document.querySelector(".marker.is-selected");
    if (initialMarker) {
        syncCardWithMarker(initialMarker);
    }
});