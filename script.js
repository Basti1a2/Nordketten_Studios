function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    if (elementTop < windowHeight - 150) {
      reveals[i].classList.add("active");
    }
  }
}
window.addEventListener("scroll", reveal);
reveal(); // Einmal beim Start ausführen

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Bonus: Das Icon von "Bars" zu "X" ändern beim Klicken
        const icon = menuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
}

// Schließt das Menü automatisch, wenn man auf einen Link klickt
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});