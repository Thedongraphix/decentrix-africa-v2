import "@styles/lenis.css";

import Lenis from "lenis";

// Script to handle Lenis library settings for smooth scrolling
// https://github.com/darkroomengineering/lenis
const lenis = new Lenis({
    autoRaf: true,
});

// Export lenis instance for potential use elsewhere
export default lenis;