// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');

function showOnScroll(){
  reveals.forEach((el)=>{
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const offset = 90; // jarak trigger animasi
    
    if(elementTop < windowHeight - offset){
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', showOnScroll);
showOnScroll();
