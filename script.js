const containers = [
  {
    id: 1,
    name: "Contenedor Av. Ayacucho",
    status: "Medio Lleno",
    level: "medium",
    waste: "Organicos, Reciclables",
    distance: "50m",
    photo: "contenedor-1.jpg",
    x: 42,
    y: 44
  },
  {
    id: 2,
    name: "Contenedor Av. Ayacucho",
    status: "Lleno",
    level: "full",
    waste: "Organicos, Reciclables",
    distance: "150m",
    photo: "contenedor-2.jpg",
    x: 56,
    y: 18
  }
];

const markersContainer = document.getElementById("map-markers");
const listContainer = document.getElementById("containers-list");

function selectContainer(id) {
  document.querySelectorAll(".marker").forEach((el) => {
    el.classList.toggle("is-active", Number(el.dataset.id) === id);
  });
  document.querySelectorAll(".container-card").forEach((el) => {
    el.classList.toggle("is-active", Number(el.dataset.id) === id);
  });
}

function renderMarkers() {
  markersContainer.innerHTML = "";
  containers.forEach((item) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `marker marker--${item.level}`;
    btn.dataset.id = item.id;
    btn.style.left = `${item.x}%`;
    btn.style.top = `${item.y}%`;
    btn.title = `${item.name} (${item.status} - ${item.distance})`;
    btn.setAttribute("aria-label", `${item.name}, ${item.status}, a ${item.distance}`);
    btn.textContent = item.id;
    btn.addEventListener("click", () => selectContainer(item.id));
    markersContainer.appendChild(btn);
  });
}

function bindCards() {
  containers.forEach((item) => {
    const card = listContainer.querySelector(`.container-card[data-id="${item.id}"]`);
    if (!card) return;

    const photoEl = card.querySelector(".container-photo");
    if (photoEl && item.photo) {
      photoEl.style.backgroundImage = `url("${item.photo}")`;
    }

    card.addEventListener("click", () => selectContainer(item.id));
  });
}

renderMarkers();
bindCards();