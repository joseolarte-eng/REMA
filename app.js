document.addEventListener('DOMContentLoaded', () => {
  const btnLocate = document.getElementById('btn-locate');
  const statusPanel = document.getElementById('status-panel');
  const statusTitle = document.getElementById('status-title');
  const statusDesc = document.getElementById('status-desc');

  btnLocate.addEventListener('click', () => {
    statusPanel.classList.add('active');
    btnLocate.disabled = true;
    btnLocate.style.opacity = '0.75';

    setTimeout(() => {
      statusTitle.textContent = '🚛 Unidad #402 — En ruta';
      statusDesc.textContent = 'Distancia estimada: a 4 cuadras de tu zona (Tiempo estimado de llegada: ~6 min).';
      btnLocate.disabled = false;
      btnLocate.style.opacity = '1';
      btnLocate.textContent = 'Actualizar ubicación';
    }, 900);
  });
});