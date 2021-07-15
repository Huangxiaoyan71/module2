import amdRun from './amd-runtime.js';

const root = document.querySelector('#app');

function receiveMessage ( event ) {
  amdRun(event.data, root);
}
window.addEventListener("message", receiveMessage, false);