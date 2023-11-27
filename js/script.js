// script.js para botones
document.addEventListener('DOMContentLoaded', function () {
    var visitarSitioBtn = document.getElementById('visitarSitio1');
  
    visitarSitioBtn.addEventListener('click', function () {
      // Abrir una nueva pestaña con la página deseada
      window.open('https://cv-bruce-wayne.vercel.app/', '_blank');
  
      // Cambiar la clase del botón a 'btn-outline-success'
      visitarSitioBtn.classList.remove('btn-outline-light');
      visitarSitioBtn.classList.add('btn-outline-success');
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    var visitarSitioBtn = document.getElementById('visitarSitio2');
  
    visitarSitioBtn.addEventListener('click', function () {
      // Abrir una nueva pestaña con la página deseada
      window.open('https://lemon-pie.vercel.app/', '_blank');
  
      // Cambiar la clase del botón a 'btn-outline-success'
      visitarSitioBtn.classList.remove('btn-outline-light');
      visitarSitioBtn.classList.add('btn-outline-success');
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    var visitarSitioBtn = document.getElementById('visitarSitio3');
  
    visitarSitioBtn.addEventListener('click', function () {
      // Abrir una nueva pestaña con la página deseada
      window.open('https://pet-shop-liard-two.vercel.app/', '_blank');
  
      // Cambiar la clase del botón a 'btn-outline-success'
      visitarSitioBtn.classList.remove('btn-outline-light');
      visitarSitioBtn.classList.add('btn-outline-success');
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    var visitarSitioBtn = document.getElementById('visitarSitio4');
  
    visitarSitioBtn.addEventListener('click', function () {
      // Abrir una nueva pestaña con la página deseada
      window.open('https://pizza-front-zeta.vercel.app/', '_blank');
  
      // Cambiar la clase del botón a 'btn-outline-success'
      visitarSitioBtn.classList.remove('btn-outline-light');
      visitarSitioBtn.classList.add('btn-outline-success');
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    var visitarSitioBtn = document.getElementById('visitarSitio5');
  
    visitarSitioBtn.addEventListener('click', function () {
      // Abrir una nueva pestaña con la página deseada
      window.open('https://heroes-rouge.vercel.app/', '_blank');
  
      // Cambiar la clase del botón a 'btn-outline-success'
      visitarSitioBtn.classList.remove('btn-outline-light');
      visitarSitioBtn.classList.add('btn-outline-success');
    });
  });

// script.js para desplazamiento
document.addEventListener('DOMContentLoaded', function () {
    // Obtén todos los enlaces de navegación interna
    var links = document.querySelectorAll('a[href^="#"]');
  
    // Agrega un evento de clic a cada enlace
    links.forEach(function (link) {
      link.addEventListener('click', function (event) {
        // Previene el comportamiento predeterminado del enlace
        event.preventDefault();
  
        // Obtiene el destino del enlace (el elemento con el identificador correspondiente)
        var target = document.getElementById(this.getAttribute('href').substring(1));
  
        // Realiza el desplazamiento suave si el objetivo existe
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth' // Desplazamiento suave
          });
        }
      });
    });
  });
// script para boton de "volver arriba"
document.addEventListener('DOMContentLoaded', function () {
  var btnScrollToTop = document.getElementById('btnScrollToTop');

  // Muestra u oculta el botón según la posición del scroll
  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      btnScrollToTop.style.display = 'block';
    } else {
      btnScrollToTop.style.display = 'none';
    }
  });

  // Agrega un evento de clic al botón para desplazarse suavemente hacia arriba
  btnScrollToTop.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
