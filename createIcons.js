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
const framework = getArgValue('framework') ?? 'vue'; //vue, react

// https://github.com/preactjs/preact-compat/issues/222
const attributesMap = {
    'accent-height': 'accentHeight',
    'alignment-baseline': 'alignmentBaseline',
    'arabic-form': 'arabicForm',
    'baseline-shift': 'baselineShift',
    'cap-height': 'capHeight',
    'clip-path': 'clipPath',
    'clip-rule': 'clipRule',
    'color-interpolation': 'colorInterpolation',
    'color-interpolation-filters': 'colorInterpolationFilters',
    'color-profile': 'colorProfile',
    'color-rendering': 'colorRendering',
    'fill-opacity': 'fillOpacity',
    'fill-rule': 'fillRule',
    'flood-color': 'floodColor',
    'flood-opacity': 'floodOpacity',
    'font-family': 'fontFamily',
    'font-size': 'fontSize',
    'font-size-adjust': 'fontSizeAdjust',
    'font-stretch': 'fontStretch',
    'font-style': 'fontStyle',
    'font-variant': 'fontVariant',
    'font-weight': 'fontWeight',
    'glyph-name': 'glyphName',
    'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
    'glyph-orientation-vertical': 'glyphOrientationVertical',
    'horiz-adv-x': 'horizAdvX',
    'horiz-origin-x': 'horizOriginX',
    'marker-end': 'markerEnd',
    'marker-mid': 'markerMid',
    'marker-start': 'markerStart',
    'overline-position': 'overlinePosition',
    'overline-thickness': 'overlineThickness',
    'panose-1': 'panose1',
    'paint-order': 'paintOrder',
    'stop-color': 'stopColor',
    'stop-opacity': 'stopOpacity',
    'strikethrough-position': 'strikethroughPosition',
    'strikethrough-thickness': 'strikethroughThickness',
    'stroke-dasharray': 'strokeDasharray',
    'stroke-dashoffset': 'strokeDashoffset',
    'stroke-linecap': 'strokeLinecap',
    'stroke-linejoin': 'strokeLinejoin',
    'stroke-miterlimit': 'strokeMiterlimit',
    'stroke-opacity': 'strokeOpacity',
    'stroke-width': 'strokeWidth',
    'text-anchor': 'textAnchor',
    'text-decoration': 'textDecoration',
    'text-rendering': 'textRendering',
    'underline-position': 'underlinePosition',
    'underline-thickness': 'underlineThickness',
    'unicode-bidi': 'unicodeBidi',
    'unicode-range': 'unicodeRange',
    'units-per-em': 'unitsPerEm',
    'v-ideographic': 'vIdeographic',
    'v-alphabetic': 'vAlphabetic',
    'v-hanging': 'vHanging',
    'v-mathematical': 'vMathematical',
    'vert-adv-y': 'vertAdvY',
    'vert-origin-x': 'vertOriginX',
    'vert-origin-y': 'vertOriginY',
    'word-spacing': 'wordSpacing',
    'writing-mode': 'writingMode',
    'x-height': 'xHeight'
}

const vueIcon = (name, content, attributes) => `
<template>
    <VsfIconBase :size="size" aria-label="${name}" ${attributes} content="${content}"/>
</template>
<script lang="ts" setup>
import { PropType } from 'vue';
import VsfIconBase from '../VsfIconBase/VsfIconBase.vue';
import { VsfIconSizeEnum } from '../VsfIconBase/types';

defineProps({
    size: {
        type: String as PropType<VsfIconSizeEnum>,
        default: VsfIconSizeEnum.base
    }
});
</script>`;

const reactIcon = (name, camelCaseName, content, attributes) => `
import type { VsfIconProps } from '${relativePathToIconBasePath}VsfIcons/types';
import VsfIconBase from '${relativePathToIconBasePath}VsfIconBase';
import { VsfIconSizeEnum } from '${relativePathToIconBasePath}VsfIconBase/types';

export default function VsfIcon${camelCaseName}({
    className = '',
    size = VsfIconSizeEnum.base,
    ariaLabel = '${name}'
}: VsfIconProps) {
    return <VsfIconBase className={className} size={size} ariaLabel={ariaLabel} ${attributes}>${content}</VsfIconBase>;
}`;

const vueExports = [];
const reactExports = [];
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

const counterTags = (content) => {
    const regex = /<([a-z]+)(?=[\s>])(?:[^>=]|='[^']*'|="[^"]*"|=[^'"\s]*)*\s?\/?>/gi;
    let resultMatch;
    let count = 0;
    do {
        resultMatch = regex.exec(content);
        if (resultMatch) count++;
    } while (resultMatch);
    return count;
}

const createExports = async (file, doOptimiziation) => {
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
            await fsPromise.writeFile(
                `${outputDirectoryPath}${componentName}.vue`,
                vueIcon(name, content, attributes)
            );
            vueExports.push(componentName);
        } else if (framework === 'react') {
            let parsedContent = content;
            for (let attr in attributesMap) {
                parsedContent = parsedContent.replaceAll(attr, attributesMap[attr]);
            }

            parsedContent = counterTags(parsedContent) <= 1 ? parsedContent : `<>${parsedContent}</>`

            await fsPromise.writeFile(
                `${outputDirectoryPath}${componentName}.tsx`,
                reactIcon(name, capitializedCamelCaseName, parsedContent, attributes)
            );
            reactExports.push(componentName);
        }
    }
}

const createIndexFiles = (frameworkName, fileName = 'index') => {
    if (frameworkName === 'vue') {
        let vueExportsString = ''
        vueExports.sort().forEach(component => {
            vueExportsString += `export { default as ${component} } from './${component}.vue';\n`;
        });
        fsPromise.writeFile(`${outputDirectoryPath}${fileName}.ts`, vueExportsString);
    } else {
        let reactExportsString = '';
        reactExports.sort().forEach(component => {
            reactExportsString += `export { default as ${component} } from './${component}';\n`;
        });
        fsPromise.writeFile(`${outputDirectoryPath}${fileName}.ts`, reactExportsString);
    }
}

const generateIconFiles = async (err, files) => {
    if (err) {
        return console.log('Unable to get icons directory: ' + err);
    }
    const doOptimiziation = (getArgValue('optimize') ?? 'true') === 'true';
    console.log(`Creating ${framework} icons 🎉 ...`);

    if (!fs.existsSync(outputDirectoryPath)) {
        fs.mkdirSync(outputDirectoryPath);
    }

    for await (const file of files) {
       await createExports(file, doOptimiziation);
    };

    if (vueExports.length) {
        createIndexFiles('vue');
    }
    if (reactExports.length) {
        createIndexFiles('react')
    }

    console.log(`Creating icons has finished!`);
}
fs.readdir(inputDirectoryPath, generateIconFiles);


