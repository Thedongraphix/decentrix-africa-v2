/**
 * Font Configuration for Decentrix Africa
 * 
 * This file centralizes all font settings for easy management.
 * To change fonts, simply update the values in this file.
 */

export const FONTS = {
  // Main font families
  primary: {
    name: 'Carme',
    fallback: 'sans-serif',
    weights: '400', // Available weights
    url: 'Carme',
  },
  heading: {
    name: 'Carme',
    fallback: 'sans-serif',
    weights: '400', // Available weights
    url: 'Carme',
  },
  body: {
    name: 'Carme',
    fallback: 'sans-serif',
    weights: '400', // Available weights
    url: 'Carme',
  },
  
  // Helper functions
  getImportUrl() {
    // Constructs the Google Fonts import URL with all fonts
    return `https://fonts.googleapis.com/css2?family=Carme&display=swap`;
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