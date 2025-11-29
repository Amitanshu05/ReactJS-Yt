
// jab ek hi file se bhot saari cheesein bhejni ho 

// Export (app.js)
export const age = 22;
export const college = 'VIT';

// Import (script.js)
import { age, college } from './app.js'; // ✅ Naam same, Brackets hain



// Kya hai: File ki "main" cheez bhejne ke liye. Ek file mein sirf ek Default Export ho sakta hai.

// Export (app.js)
const user = 'Amitanshu';
export default user;

// Import (script.js)
import myUser from './app.js'; // ✅ Koi bhi naam, No brackets

