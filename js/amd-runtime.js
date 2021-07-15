import { getRegisterModuleInfo } from './register/index.js';
const { React, ReactDOM } = window;

requirejs.config({
  baseUrl: '/dist/',
  paths: {}
});

define('react', [], () => { return React });
define('react-dom', [], () => { return ReactDOM });

async function run(config, root) {
  clearModules(root);

  const paths = {};
  config.layout.forEach((mod) => {
    const info = getRegisterModuleInfo(mod.id);
    paths[mod.id] = info.amd.replace(/.js$/, '');
  });

  requirejs.config({
    baseUrl: './../dist/',
    paths,
  });


  require(['react', 'react-dom', 'require', ...config.layout.map(m => m.id)], (React, ReactDOM, require) => {
    config.layout.forEach(async (mod) => {
      console.log(mod.id);
      const info = getRegisterModuleInfo(mod.id);
      const Module = require(mod.id);

      const div = document.createElement('div');
      div.setAttribute('data-id', info.id);
      div.setAttribute('data-type', info.type);
      div.setAttribute('data-es-path', info.es);
      root.appendChild(div);
      ReactDOM.render(
        React.createElement(Module, mod.data || {}, null), 
        div
      );
    });
  });

}


function clearModules(root) {
  // TODO
  root.innerHTML = '';
}

export default run;