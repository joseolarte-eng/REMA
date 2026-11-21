const bloques = document.querySelectorAll(".bloque");

bloques.forEach((bloque) => {
  bloque.addEventListener("click", () => {
    bloques.forEach((b) => b.classList.remove("activo"));
    bloque.classList.add("activo");
  });
});