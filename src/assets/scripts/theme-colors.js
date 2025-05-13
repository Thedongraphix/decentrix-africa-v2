// Ensure Decentrix Africa brand colors are applied correctly
document.addEventListener('DOMContentLoaded', () => {
  // Define our colors
  const colors = {
    primary: '#0A0340',
    secondary: '#49A4F3',
    accent: '#EEAA38'
  };

  // Apply colors to CSS variables
  document.documentElement.style.setProperty('--color-primary', colors.primary);
  document.documentElement.style.setProperty('--color-secondary', colors.secondary);
  document.documentElement.style.setProperty('--color-accent', colors.accent);

  // Find accent/yellow/orange elements and convert to primary
  document.querySelectorAll('.text-yellow-500, .text-yellow-400, .text-accent, .text-orange-500, .text-orange-400, .text-orange-300').forEach(el => {
    el.classList.remove('text-yellow-500', 'text-yellow-400', 'text-accent', 'text-orange-500', 'text-orange-400', 'text-orange-300');
    el.classList.add('text-primary');
  });

  document.querySelectorAll('.bg-yellow-500, .bg-yellow-400, .bg-accent, .bg-orange-500, .bg-orange-400').forEach(el => {
    el.classList.remove('bg-yellow-500', 'bg-yellow-400', 'bg-accent', 'bg-orange-500', 'bg-orange-400');
    el.classList.add('bg-primary');
  });

  // Apply to hover states
  document.querySelectorAll('.hover\\:text-accent, .hover\\:text-orange-500, .hover\\:text-orange-400, .hover\\:text-yellow-500, .hover\\:text-yellow-400').forEach(el => {
    el.classList.remove('hover:text-accent', 'hover:text-orange-500', 'hover:text-orange-400', 'hover:text-yellow-500', 'hover:text-yellow-400');
    el.classList.add('hover:text-primary');
  });

  document.querySelectorAll('.hover\\:bg-accent, .hover\\:bg-orange-500, .hover\\:bg-orange-400, .hover\\:bg-yellow-500, .hover\\:bg-yellow-400').forEach(el => {
    el.classList.remove('hover:bg-accent', 'hover:bg-orange-500', 'hover:bg-orange-400', 'hover:bg-yellow-500', 'hover:bg-yellow-400');
    el.classList.add('hover:bg-primary');
  });

  // Update buttons
  document.querySelectorAll('button:not([class*="bg-primary"]), .btn:not([class*="bg-primary"])').forEach(el => {
    // Add hover effect if not present
    if (!el.classList.contains('hover:bg-primary') && !el.classList.contains('hover:text-primary')) {
      el.classList.add('hover:bg-primary/10', 'hover:text-primary');
    }
  });
}); 