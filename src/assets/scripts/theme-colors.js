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

  // Find elements with yellow classes and convert to accent
  document.querySelectorAll('.text-yellow-500, .text-yellow-400').forEach(el => {
    el.classList.remove('text-yellow-500', 'text-yellow-400');
    el.classList.add('text-accent');
  });

  document.querySelectorAll('.bg-yellow-500, .bg-yellow-400').forEach(el => {
    el.classList.remove('bg-yellow-500', 'bg-yellow-400');
    el.classList.add('bg-accent');
  });

  // Find elements with orange classes and convert to accent
  document.querySelectorAll('.text-orange-500, .text-orange-400').forEach(el => {
    el.classList.remove('text-orange-500', 'text-orange-400');
    el.classList.add('text-accent');
  });

  document.querySelectorAll('.bg-orange-500, .bg-orange-400').forEach(el => {
    el.classList.remove('bg-orange-500', 'bg-orange-400');
    el.classList.add('bg-accent');
  });
}); 