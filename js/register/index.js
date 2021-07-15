import ReactRegister from './react.js';

const reactMap = {};

ReactRegister.modules.forEach((mod) => {
  reactMap[mod.id] = mod
})

export function getRegisterModuleInfo(id) {
  return reactMap[id] || null
}
