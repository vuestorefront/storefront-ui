const path = require('node:path');
const { promises: fs } = require('node:fs');
const sass = require('sass');
const postcss = require('postcss');
const postcssConfig = require('./postcss.config');

const postcssPlugins = Object.keys(postcssConfig.plugins).map(pluginName => require(pluginName));
const sassModulePath = path.dirname(require.resolve('@storefront-ui/sass'));
const nodeModulesPaths = require.resolve.paths('@storefront-ui/sass');
const sassModuleIndexPath = path.join(sassModulePath, 'storefront-ui.scss');

(async () => {
  const { loadedUrls } = await buildCssFromSassSource({ pathname: sassModuleIndexPath });

  await fs.mkdir('components', { recursive: true });

  loadedUrls
    .map(url => url.pathname, '.scss')
    .filter(pathname => path.basename(pathname).slice(0, 3) === 'Vsf')
    .forEach(async componentPathname => {
      buildCssFromSassSource({
        pathname: componentPathname,
        outDir: 'components',
      })
    });
})()
  .catch(e => {
    console.error(e);
  });

async function buildCssFromSassSource ({ pathname, outDir = '' }) {
  const filename = path.basename(pathname, '.scss');
  const { css: sassCompiled, sourceMap: sassSourceMap, loadedUrls } = await sass.compileAsync(pathname, {
    sourceMap: true,
    sourceMapIncludeSources: true,
    loadPaths: nodeModulesPaths
  });

  const outPath = path.join(outDir, `${filename}.css`);

  const { map: cssSourceMap, css: cssCompiled } = await postcss(postcssPlugins)
    .process(sassCompiled, {
      from: pathname,
      to: outPath,
      map: {
        prev: sassSourceMap,
        inline: false,
        annotation: true,
      }
    });

  await Promise.all([
    fs.writeFile(outPath, cssCompiled),
    fs.writeFile(`${outPath}.map`, cssSourceMap.toString()),
  ]);

  return { loadedUrls };
}
