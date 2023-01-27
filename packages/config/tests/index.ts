type AvailableFrameworks = 'vue' | 'react';
export const extractImports = (framework: AvailableFrameworks) =>
  new RegExp(`// import ${framework}(.*?)// end import ${framework}`, 'gs');

export const changeImports = (framework: AvailableFrameworks) =>
  new RegExp(`import(.*?)from.*?\@storefront-ui\/${framework}.*?\;`, 'gs');

export const dynamicImports = (framework: AvailableFrameworks) => new RegExp(`@storefront-ui/${framework}/index`, 'gm');

export const removeCode = (framework: AvailableFrameworks) => new RegExp(`// ${framework}.*?// end ${framework}`, 'gs');

export const changeFrameworkPathInImports = (framework: AvailableFrameworks) =>
  new RegExp(`(import.*?from.*?)(\/${framework}\/)(.*?;)`, 'gs');
