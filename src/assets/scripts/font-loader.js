// Font loader script to ensure consistent font loading across all devices
document.addEventListener('DOMContentLoaded', () => {
  // Force fonts to be applied
  applyFonts();
  
  // Check if fonts are loaded
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      console.log('All fonts are loaded!');
      // Apply fonts again after they're loaded
      applyFonts();
    });
  } else {
    // Fallback for browsers that don't support document.fonts
    setTimeout(applyFonts, 500);
  }
  
  // Apply fonts with a delay as a fallback
  setTimeout(applyFonts, 1000);
});

// Helper function to apply fonts
function applyFonts() {
  // Set font CSS variables directly via JavaScript
  document.documentElement.style.setProperty('--font-primary', "'Carme', sans-serif");
  document.documentElement.style.setProperty('--font-heading', "'Carme', sans-serif");
  document.documentElement.style.setProperty('--font-body', "'Carme', sans-serif");
  
  // Force application on key elements
  const elements = {
    headings: document.querySelectorAll('h1, h2, h3, h4, h5, h6, .heading, .title'),
    body: document.querySelectorAll('p, span, li, .body-text, .content'),
    buttons: document.querySelectorAll('button, .btn, [role="button"], [type="button"], [type="submit"], [type="reset"]')
  };
  
  // Apply fonts to specific element types
  elements.headings.forEach(el => {
    el.style.fontFamily = 'Carme, sans-serif';
  });
  
  elements.body.forEach(el => {
    el.style.fontFamily = 'Carme, sans-serif';
  });
  
  elements.buttons.forEach(el => {
    el.style.fontFamily = 'Carme, sans-serif';
  });
  
  // Force Carme on the entire document as a fallback
  document.body.style.fontFamily = 'Carme, sans-serif';
  document.documentElement.style.fontFamily = 'Carme, sans-serif';
} 