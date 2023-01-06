type AvailableFrameworks = 'vue' | 'react';
export const extractImports = (framework: AvailableFrameworks) =>
  new RegExp(`// import ${framework}(.*?)// end import ${framework}`, 'gs');

export const changeImports = (framework: AvailableFrameworks) =>
  new RegExp(`import(.*)from.*../sfui/frameworks/${framework}.*`, 'gm');

export const removeCode = (framework: AvailableFrameworks) => new RegExp(`// ${framework}.*?// end ${framework}`, 'gs');

export const changeFrameworkPathInImports = (framework: AvailableFrameworks) =>
  new RegExp(`(import.*from.*)(/${framework}/)(.*)`, 'gm');
