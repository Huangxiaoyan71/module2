import { getRegisterModuleInfo } from './register/index.js';

import React from 'react';
import ReactDOM from 'react-dom';


async function run(config, root) {
  clearModules(root);

  config.layout.forEach(async (mod) => {
    const info = getRegisterModuleInfo(mod.id);
    if (!info) {
      return;
    }
    const div = document.createElement('div');
    div.setAttribute('data-id', info.id);
    div.setAttribute('data-type', info.type);
    div.setAttribute('data-es-path', info.es);
    root.appendChild(div);
    const Module = await import(`/dist/${info.es}`);
    ReactDOM.render(
      React.createElement(Module.default, mod.data || {}, null), 
      div
    );
  });
}


function clearModules(root) {
  // TODO
  root.innerHTML = '';
}

export default run;