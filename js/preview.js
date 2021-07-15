import esRun from './es-runtime.js';

const root = document.querySelector('#app');

function receiveMessage ( event ) {
  esRun(event.data, root);
}
window.addEventListener("message", receiveMessage, false);