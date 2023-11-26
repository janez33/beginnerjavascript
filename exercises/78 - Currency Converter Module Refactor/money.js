import { init } from './init.js';

// start the app
const app = document.querySelector('.app');

app.addEventListener('mouseeneter', init, { once: true });
