document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
  
    sections.forEach(section => {
      const content = section.querySelector('div');
      section.addEventListener('click', function () {
        // Oculta todos los contenidos antes de mostrar o ocultar el contenido de la sección clicada
        sections.forEach(otherSection => {
          const otherContent = otherSection.querySelector('div');
          if (otherSection !== section) {
            otherContent.style.display = 'none';
          }
        });
  
        // Cambia la visibilidad del contenido de la sección clicada
        content.style.display = (content.style.display === 'none' || content.style.display === '') ? 'block' : 'none';
      });
    });
  });
  