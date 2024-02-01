const items = document.querySelectorAll('.carousel .list .item');
console.log("El script transition.js se está ejecutando");

// Resto del código del script...

// Inicializa un índice para rastrear la imagen actual
let currentIndex = 0;

// Función para mostrar la siguiente imagen
const showNextImage = () => {
  // Oculta la imagen actual
  items[currentIndex].style.opacity = 0;
  
  // Incrementa el índice (y vuelve al inicio si es necesario)
  currentIndex = (currentIndex + 1) % items.length;

  // Muestra la siguiente imagen
  items[currentIndex].style.opacity = 1;
};

// Función para mostrar la imagen anterior
const showPrevImage = () => {
  // Oculta la imagen actual
  items[currentIndex].style.opacity = 0;

  // Decrementa el índice (y vuelve al final si es necesario)
  currentIndex = (currentIndex - 1 + items.length) % items.length;

  // Muestra la imagen anterior
  items[currentIndex].style.opacity = 1;
};

// Establece un intervalo para llamar a showNextImage cada 10 segundos
const intervalId = setInterval(showNextImage, 10000);

// Detén el intervalo cuando el mouse está sobre el carrusel
document.querySelector('.carousel').addEventListener('mouseenter', () => {
  clearInterval(intervalId);
});

// Reanuda el intervalo cuando el mouse sale del carrusel
document.querySelector('.carousel').addEventListener('mouseleave', () => {
  clearInterval(intervalId);
  setInterval(showNextImage, 10000);
});

// Agrega event listeners a los botones next y prev
document.getElementById('next').addEventListener('click', showNextImage);
document.getElementById('prev').addEventListener('click', showPrevImage);
