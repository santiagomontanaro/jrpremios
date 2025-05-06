const track = document.querySelector('.carousel-track');
let isDown = false;
let startX;
let scrollLeft;

// Arrastrar con el mouse
track.addEventListener('mousedown', (e) => {
  isDown = true;
  track.classList.add('active');
  startX = e.pageX - track.offsetLeft;
  scrollLeft = track.scrollLeft;
});

track.addEventListener('mouseleave', () => {
  isDown = false;
  track.classList.remove('active');
});

track.addEventListener('mouseup', () => {
  isDown = false;
  track.classList.remove('active');
});

track.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - track.offsetLeft;
  const walk = (x - startX) * 2; // velocidad
  track.scrollLeft = scrollLeft - walk;
});

// Desplazamiento automático
setInterval(() => {
  track.scrollBy({ left: 310, behavior: 'smooth' });

  // Si llegó al final, vuelve al principio
  if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 1) {
    track.scrollTo({ left: 0, behavior: 'smooth' });
  }
}, 3000); // cada 3 segundos
