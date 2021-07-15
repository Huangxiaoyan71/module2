import { defaultConfig } from './config.js';

const btnFormat = document.querySelector('#btn-format');
const btnRender = document.querySelector('#btn-render');
const editor = document.querySelector('#editor');
const preview = document.querySelector('#preview');
editor.value = formatConfig(defaultConfig);

document.addEventListener('readystatechange', () => {
  const config = getConfig();
  preview.contentWindow.postMessage(config,'*');
})

function getConfig() {
  const str = editor.value;
  const func = new Function(`return ${str}`);
  const config = func();
  return config;
}

function formatConfig(config) {
  return JSON.stringify(config, null, 2);
}

btnFormat.addEventListener('click', () => {
  const config = getConfig();
  const configStr = JSON.stringify(config, null, 2);
  editor.value = configStr;
}, false);

btnRender.addEventListener('click', () => {
  const config = getConfig();
  preview.contentWindow.postMessage(config,'*');
});
