const path = require('path');
const fs = require('fs');
const fsPromise = require('fs').promises;
const { optimize } = require('svgo');

/**
 * Args:
 * input: string; (directory with svg icons)
 * output: string; (directory where icon components will be placed)
 * relativePathToIconBase: string; (path from place of icon output to base icon e.g output `/specialDir/icons/`, component placement `/components/`, then relativePathToIconBase would be `../../components/`)
 * optimize: boolean; (optimize svgs wth svgo)
 * */

const getArgValue = (argName) => {
    const argNameLength = argName.length;
    const outputArg = Object.values(process.argv).find(param => param.substring(0, argNameLength) === argName);
    return outputArg ? outputArg.substring(argNameLength + 1, outputArg.length) : undefined;
}

const inputDirectoryPath = path.join(__dirname, getArgValue('input') ?? './assets');
const outputDirectoryPath = path.join(__dirname, getArgValue('output') ?? './');
const relativePathToIconBasePath = getArgValue('relativePathToIconBase') ?? '../';
const framework = getArgValue('framework') ?? 'mitosis'; //vue, react, mitosis


const vueIcon = (name, content, attributes) => `<template>
    <VsfIconBase :size="size" aria-label="${name}" ${attributes} content="${content}"/>
</template>
<script>
import VsfIconBase, { VsfIconSize } from '${relativePathToIconBasePath}VsfIconBase/VsfIconBase';
export default /*#__PURE__*/ {
    name: "vsf-icon-${name}",
    components: {VsfIconBase},
    props: {
        size: {
            type: String,
            default: VsfIconSize.base
        },
        content: {
            type: String,
            default: ''
        }
    }
};
</script>`;

const reactIcon = (name, camelCaseName, content, attributes) => `import VsfIconBase, { VsfIconSize } from '${relativePathToIconBasePath}VsfIconBase/VsfIconBase.lite';

export interface VsfIcon${camelCaseName}Props {
    size?: keyof typeof VsfIconSize,
}

export default function VsfIcon${camelCaseName}(props: VsfIcon${camelCaseName}Props = { size: VsfIconSize.base }, ...rest) {
    return <VsfIconBase size={props.size} aria-label="${name}" ${attributes} {...rest} content={<>${content}</>} />
}`;

// Rewrite if possible to using separate vue and react components, because e.g in react we cant pass style prop to inline styles, because we cant use `...rest` therefore we need to define every possible attrs
const mitosisIcon = (name, camelCaseName, content, attributes) => `import { useStore } from '@builder.io/mitosis'
import VsfIconBase from "../VsfIconBase/VsfIconBase.lite";

export interface VsfIcon${camelCaseName}Props {
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl",
  className?: string;
  ariaLabel?: string;
}
const DEFAULT_VALUES = {
  size: 'base',
};
export default function VsfIcon${camelCaseName}(props: VsfIcon${camelCaseName}Props) {
  const state = useStore({
    get useContent() {
      /* IF-vue */
      return "${content}"
      /* ENDIF-vue */
      /* IF-react */
      return <>${content}</>
      /* ENDIF-react */
    }
  });
  return <VsfIconBase
    class={props.className || ''}
    size={props.size || DEFAULT_VALUES.size}
    ariaLabel={props.ariaLabel || '${name}'}
    ${attributes}
    content={state.useContent}
  />
}`;

const camelize = s => s.replace(/-./g, x => x[1].toUpperCase());
const capitalize = s => s && s[0].toUpperCase() + s.slice(1);
const getSvg = async (svgName, doOptimiziation) => {
    const svgPath = path.join(inputDirectoryPath, svgName);
    let fileContent = await fsPromise.readFile(svgPath, 'utf8').catch(() => ({}));
    if (doOptimiziation) {
        try {
            fileContent = optimize(fileContent, {
                multipass: true,
                svg2js: {
                    pretty: true
                },
                plugins: [{
                    name: 'preset-default',
                    params: {
                        overrides: {
                            removeUselessStrokeAndFill: false,
                        },
                    },
                },]
            }).data;
        } catch (error) {
            console.error('Please install svgo for node in order to do optimization, ' + e);
        }
    }

    const fileName = svgName.split('.')[0];
    return {
        fileName: camelize(fileName),
        name: fileName,
        content: fileContent.substring(fileContent.indexOf('>') + 1, fileContent.lastIndexOf('<')).replace(/"/g, "'"),
        attrs: {
            viewBox: /viewBox="([^"]+)"/.exec(fileContent)?.[1]
        },
    }
};

fs.readdir(inputDirectoryPath, function (err, files) {
    if (err) {
        return console.log('Unable to get icons directory: ' + err);
    }
    const doOptimiziation = (getArgValue('optimize') ?? 'true') === 'true';

    console.log(`Creating ${framework} icons 🎉 ...`);



    if (!fs.existsSync(outputDirectoryPath)) {
        fs.mkdirSync(outputDirectoryPath);
    }

    let vueExports = '';
    let reactExports = '';
    files.forEach(async function (file) {
        const splitFileName = file.split('.');
        if (splitFileName[splitFileName.length - 1] === 'svg') {
            const {
                fileName,
                name,
                content,
                attrs
            } = await getSvg(file, doOptimiziation);
            const capitializedCamelCaseName = capitalize(camelize(fileName));
            const attributes = `viewBox="${attrs.viewBox ?? '0 0 24 24'}"`;

            const componentName = `VsfIcon${capitializedCamelCaseName}`;
            if (framework === 'vue') {
                fsPromise.writeFile(
                    `${outputDirectoryPath}${componentName}.vue`,
                    vueIcon(name, content, attributes)
                );
                vueExports += `export { default as ${componentName} } from './${componentName}.vue';\n`;
            } else if (framework === 'react') {
                fsPromise.writeFile(
                    `${outputDirectoryPath}${componentName}.tsx`,
                    reactIcon(name, capitializedCamelCaseName, content, attributes)
                );
                reactExports += `export { default as ${componentName} } from './${componentName}.tsx';\n`;
            } else if (framework === 'mitosis') {
                fsPromise.writeFile(
                    `${outputDirectoryPath}${componentName}.lite.tsx`,
                    mitosisIcon(name, capitializedCamelCaseName, content, attributes)
                )
                vueExports += `export { default as ${componentName} } from './${componentName}.vue';\n`;
                reactExports += `export { default as ${componentName} } from './${componentName}.lite.tsx';\n`;
            }
        }
        if (vueExports) {
            fsPromise.writeFile(`${outputDirectoryPath}vue.ts`, vueExports);
        }
        if (reactExports) {
            fsPromise.writeFile(`${outputDirectoryPath}react.ts`, reactExports);
        }
    });

    console.log(`Creating icons has finished`);
});
