document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typed-text");
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
  