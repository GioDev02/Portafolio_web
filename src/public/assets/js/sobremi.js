// Si es necesario agregar efectos personalizados
document.addEventListener('DOMContentLoaded', function() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    carouselItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.classList.add('fadeIn');
        });
        item.addEventListener('mouseleave', () => {
            item.classList.remove('fadeIn');
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("programador-text");
    const text = textElement.innerHTML;
    textElement.innerHTML = ''; // Vaciar el contenido inicial
    
    let index = 0;
    const speed = 20; // Velocidad en milisegundos
  
    function typeWriter() {
      if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
      }
    }
  
    typeWriter(); // Iniciar el efecto
  });
  