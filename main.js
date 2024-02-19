// src/scripts/main.js

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.onload = function() {
  const stacks = document.querySelectorAll('.card-stack');

  stacks.forEach(stack => {
      const cards = Array.from(stack.querySelectorAll('.card'));
      let activeIndex = 0; // Start with the first card as active
      let isClickable = true; // Flag to control clickability

      // Set the initial state for the cards
      cards.forEach((card, index) => {
          if (index !== 0) {
              card.style.top = '100%';
              card.style.visibility = 'hidden';
          } else {
              card.classList.add('active'); // First card is active and visible
              card.style.visibility = 'visible';
          }
      });

      const nextArrow = stack.querySelector('.next-arrow');
      nextArrow.addEventListener('click', function() {
          // Check if the button is currently clickable
          if (!isClickable) return; // Ignore the click if not clickable

          isClickable = false; // Disable further clicks
          setTimeout(() => isClickable = true, 1100); // Re-enable clicks after 3 seconds

          const currentActive = cards[activeIndex];
          const nextIndex = (activeIndex + 1) % cards.length;
          const nextCard = cards[nextIndex];

          // Animate the current card out of view
          currentActive.classList.remove('active');
          currentActive.style.top = '-100%';
          currentActive.style.visibility = 'hidden';

          // Prepare the next card
          nextCard.classList.add('active');
          nextCard.style.top = '0'; // Move into view
          nextCard.style.visibility = 'visible';

          // Ensure that the outgoing card resets correctly for the next loop
          setTimeout(() => {
              currentActive.style.top = '100%'; // Reset to below the stack without affecting visibility
          }, 700); // Match the CSS transition time

          activeIndex = nextIndex; // Update the active index
      });
  });
};



  
  document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-toggle');
    const menu = document.getElementById('mobile-menu');

    menuButton.addEventListener('click', function() {
      menu.classList.toggle('hidden');
    });
  });

 


// Form validation