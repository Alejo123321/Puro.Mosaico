function MiFuncion() {
       // aquí se define el ID del elemento que va a tomar la clase
     var x = document.getElementById("navegador");
     if (x.className === " ") {
         // esta es la clase que se agrega al elemento con eo id="navegador"
       x.className += "responsive";
     } else {
       x.className = " ";
     }
  
 let slideIndex = 0;
 
 
function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    
    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }
    
    slides.style.transform = `translateX(${-slideIndex * 100}%)`;
}
 
 
function moveSlide(step) {
    showSlide(slideIndex + step);
}
 
 
// Initialize slider
showSlide(slideIndex);
 function toggleMenu() {
    const nav = document.getElementById('navegador');
    nav.classList.toggle('show');
}

// Cierra el menú al hacer clic en un enlace (solo en dispositivos móviles)
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function() {
        const nav = document.getElementById('navegador');
        nav.classList.remove('show'); // Cierra el menú después de hacer clic
    });
});
