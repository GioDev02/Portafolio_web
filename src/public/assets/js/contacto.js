// contacto.js
const formulario = document.querySelector('form');
const mensajeExito = document.getElementById('mensaje-exito');
const mensajeError = document.getElementById('mensaje-error');

formulario.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(formulario);
    const datos = {};

    formData.forEach((value, key) => {
        datos[key] = value;
    });

    try {
        const response = await fetch('/enviar-correo', {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const resultado = await response.text();
        
        if (response.ok) {
            mensajeExito.textContent = 'Correo enviado exitosamente';
            mensajeExito.style.display = 'block';
        } else {
            throw new Error(resultado);
        }
    } catch (error) {
        mensajeError.textContent = 'Hubo un problema al enviar el correo.';
        mensajeError.style.display = 'block';
    }
});

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
  
