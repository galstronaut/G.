// Enhanced Opening Screen Animation
document.addEventListener('DOMContentLoaded', function() {
  const openingScreen = document.getElementById('opening-screen');
  const mainContent = document.querySelectorAll('.main-content');
  const openingLogo = document.querySelector('.opening-logo');
  const openingSignature = document.querySelector('.opening-signature');
  const openingEnter = document.querySelector('.opening-enter');
  
  // Preload images to prevent lag during animation
  function preloadImages() {
    const images = [
      '../Gal/images/me5.jpeg',
      './images/2.jpg',
      './images/3.jpg',
      './images/4.jpg'
    ];
    
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }
  
  // Start preloading images immediately
  preloadImages();
  
  // Initialize animation with requestAnimationFrame for smoother performance
  function startOpeningAnimation() {
    requestAnimationFrame(() => {
      // SEMUA ELEMEN MUNCUL BERSAMAAN
      openingLogo.style.opacity = '1';
      openingLogo.style.transform = 'translateX(0)';
      
      openingSignature.style.opacity = '1';
      openingSignature.style.transform = 'translateX(0)';
      
      openingEnter.style.opacity = '1';
    });
  }
  
  // Start the opening animation after a brief delay to ensure DOM is ready
  setTimeout(startOpeningAnimation, 100);
  
  // Enhanced exit function with better performance
  function exitOpening() {
    // Prevent multiple clicks
    if (openingScreen.classList.contains('fade-out')) return;
    
    // Add fade-out class to trigger CSS transition
    openingScreen.classList.add('fade-out');
    
    // Use requestAnimationFrame for smoother animation
    requestAnimationFrame(() => {
      setTimeout(() => {
        // Hide opening screen after transition completes
        openingScreen.style.display = 'none';
        
        // Show main content with animation
        mainContent.forEach(element => {
          element.classList.add('visible');
        });
        
        // Trigger a reflow to ensure the transition works
        void mainContent[0].offsetWidth;
      }, 1200);
    });
  }
  
  // Event listener for click on enter button
  openingEnter.addEventListener('click', exitOpening);
  
  // Also exit automatically after 3 seconds
  const autoExitTimer = setTimeout(exitOpening, 3000);
  
  // Allow skipping by pressing any key
  document.addEventListener('keydown', function(e) {
    if (e.key && !openingScreen.classList.contains('fade-out')) {
      exitOpening();
      clearTimeout(autoExitTimer);
    }
  });
  
  // Allow skipping by tapping on mobile
  openingScreen.addEventListener('touchstart', function() {
    if (!openingScreen.classList.contains('fade-out')) {
      exitOpening();
      clearTimeout(autoExitTimer);
    }
  });
});

// MODAL PILIH PORTFOLIO
const pm = document.getElementById("project-modal");
const openPM = document.getElementById("open-projects");
const closePM = document.getElementById("close-projects");

openPM.addEventListener("click", () => {
  pm.classList.remove("hidden");
  pm.classList.add("flex");
});

closePM.addEventListener("click", () => {
  pm.classList.add("hidden");
  pm.classList.remove("flex");
});

pm.addEventListener("click", (e) => {
  if (e.target === pm) {
    pm.classList.add("hidden");
    pm.classList.remove("flex");
  }
});

// MODAL KARYA
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalAuthor = document.getElementById('modal-author');
const modalPoem = document.getElementById('modal-poem');
const modalClose = document.getElementById('modal-close');

document.querySelectorAll('[data-title]').forEach(btn => {
  btn.addEventListener('click', () => {
    modalTitle.textContent = btn.getAttribute('data-title');
    modalAuthor.textContent = btn.getAttribute('data-author');
    modalPoem.textContent = btn.getAttribute('data-poem');
    modalImg.src = btn.getAttribute('data-img');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  });
});

modalClose.addEventListener('click', () => {
  modal.classList.add('hidden');
  modal.classList.remove('flex');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
});

// Enhanced Gallery Navigation System
document.querySelectorAll('.nav-tab').forEach(tab => {
  tab.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Remove active class from all tabs and sections
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.gallery-section').forEach(s => s.classList.remove('active'));
    
    // Add active class to clicked tab
    this.classList.add('active');
    
    // Show the corresponding section
    const target = this.getAttribute('data-target');
    if (target === 'fashion') {
      document.getElementById('fashion-gallery').classList.add('active');
    } else if (target === 'design') {
      document.getElementById('design-gallery').classList.add('active');
    } else if (target === 'gallery') {
      document.getElementById('gallery').classList.add('active');
    }
    
    // Smooth scroll to the section
    const targetSection = document.getElementById(`${target}-gallery`) || document.getElementById('gallery');
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  });
});