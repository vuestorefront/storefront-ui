import replaceImport from './vite-plugins/replaceImports';
import { resolve } from 'path';

export type AvailableFrameworks = 'vue' | 'react';
export const extractImports = (framework: AvailableFrameworks) =>
  new RegExp(`// import ${framework}(.*?)// end import ${framework}`, 'gs');

export const changeImports = (framework: AvailableFrameworks) =>
  new RegExp(`^import (.*?) from '\@storefront-ui\/${framework}'+?;`, 'gm');

export const dynamicImports = (framework: AvailableFrameworks) => new RegExp(`@storefront-ui/${framework}/index`, 'gm');

export const removeCode = (framework: AvailableFrameworks) => new RegExp(`// ${framework}.*?// end ${framework}`, 'gs');

export const changeFrameworkPathInImports = (framework: AvailableFrameworks) =>
  new RegExp(`(import.*?from.*?)(\/${framework}\/)(.*?;)`, 'gs');


export const copiedSfuiPath = (framework: AvailableFrameworks, dirname: string) => resolve(dirname, 'src', 'components', 'sfui', framework, 'index.ts')
export const relativeSfuiPath = (framework: AvailableFrameworks, dirname: string) => resolve(dirname, '..', '..', '..', 'packages', 'sfui', 'frameworks', framework, 'index.ts');

export { replaceImport }
