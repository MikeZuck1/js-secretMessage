// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML;

// Declaration of my table 
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// step 1
secretMessage.pop(); 
console.log(secretMessage.length);  

// step 2
secretMessage.push('to', 'Program.'); 
// console.log(secretMessage); // step 3

// step 4 
secretMessage[7] = 'right';
// console.log(secretMessage); 

// step 5
secretMessage.shift(); 
// console.log(secretMessage); 

// step 6
secretMessage.unshift('Programming'); 
// console.log(secretMessage); 

// step 7
secretMessage.splice(6, 11, 'know,'); 
// console.log(secretMessage);

// step 8 
console.log(secretMessage.join(' ')); 
