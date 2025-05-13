/**
 * Font Configuration for Decentrix Africa
 * 
 * This file centralizes all font settings for easy management.
 * To change fonts, simply update the values in this file.
 */

export const FONTS = {
  // Main font families
  primary: {
    name: 'Jost',
    fallback: 'sans-serif',
    weights: '100,200,300,400,500,600,700,800,900',
    url: 'Jost:wght@100;200;300;400;500;600;700;800;900',
  },
  heading: {
    name: 'Jost',
    fallback: 'sans-serif',
    weights: '100,200,300,400,500,600,700,800,900',
    url: 'Jost:wght@100;200;300;400;500;600;700;800;900',
  },
  body: {
    name: 'Jost',
    fallback: 'sans-serif',
    weights: '100,200,300,400,500,600,700,800,900',
    url: 'Jost:wght@100;200;300;400;500;600;700;800;900',
  },
  
  // Helper functions
  getImportUrl() {
    // Constructs the Google Fonts import URL with all fonts
    return `https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap`;
  },
  
  getCSSVars() {
    // Returns CSS variables for all fonts
    return `
      --font-primary: ${this.primary.name}, ${this.primary.fallback};
      --font-heading: ${this.heading.name}, ${this.heading.fallback};
      --font-body: ${this.body.name}, ${this.body.fallback};
    `;
  },
  
  getTailwindConfig() {
    // Returns configuration object for Tailwind
    return {
      'sans': [this.primary.name, ...this.primary.fallback.split(', ')],
      'display': [this.heading.name, ...this.heading.fallback.split(', ')],
      'body': [this.body.name, ...this.body.fallback.split(', ')],
    };
  }
};

// Instructions for changing fonts:
// 
// 1. To change fonts, update the 'name', 'url', and 'weights' properties above
// 2. Font URLs should be formatted for Google Fonts
// 3. After changing, rebuild the site
//
// Example changing body font to Roboto:
// body: {
//   name: 'Roboto',
//   fallback: 'sans-serif',
//   weights: '400,700',
//   url: 'Roboto:wght@400;700',
// }, 