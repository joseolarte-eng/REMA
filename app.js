document.addEventListener('DOMContentLoaded', () => {
  const btnLocate = document.getElementById('btn-locate');
  const mapSection = document.getElementById('mapa-section');
  const statusTitle = document.getElementById('status-title');
  const statusDesc = document.getElementById('status-desc');

  btnLocate.addEventListener('click', () => {
    // Desplaza suavemente hacia la sección del mapa ubicada debajo del contenido
    mapSection.scrollIntoView({ behavior: 'smooth' });

    statusTitle.textContent = 'Buscando unidad más cercana...';
    statusDesc.textContent = 'Conectando con la red de geolocalización municipal.';

    setTimeout(() => {
      statusTitle.textContent = '🚛 Unidad #402 — En ruta activa';
      statusDesc.textContent = 'Ubicación actualizada: a 4 cuadras de tu zona (Tiempo estimado de llegada: ~6 min).';
    }, 800);
  });
});