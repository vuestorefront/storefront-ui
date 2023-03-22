<template>
  <div class="custom-block">
    <div v-for="(classes, name) in groupedClasses" :key="name">
      <h4 class="w-full capitalize col-span-10 mt-8 text-xl">{{ name }}</h4>
      <div v-for="[name, ...classes] in classes" :key="name" class="mt-4">
        <p
          :class="convertClassesArrayToClass(classes)"
          class="bg-gray-100 dark:bg-zinc-800 p-4 rounded text-black dark:text-white"
        >
          typography-{{ name }}
        </p>
        <p class="font-mono text-xs mt-2 pl-4 border-l-2 dark:border-zinc-700">
          {{ convertClassesArrayToClass(classes).join('.') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
/* Vuepress can't use the most recent Tailwind version, this cannot be pulled from the plugin,
  hardcoding the values for now. */
const typographyClasses = [
  ['headline-1', 'fontSize.6xl', 'lineHeight.extra-tight', 'fontFamily.headings'],
  ['headline-2', 'fontSize.4xl', 'lineHeight.10', 'fontFamily.headings'],
  ['headline-3', 'fontSize.2xl', 'lineHeight.8', 'fontFamily.headings'],
  ['headline-4', 'fontSize.lg', 'lineHeight.7', 'fontFamily.headings'],
  ['headline-5', 'fontSize.base', 'lineHeight.6', 'fontFamily.headings'],
  ['headline-6', 'fontSize.sm', 'lineHeight.5', 'fontFamily.headings'],
  ['text-xl', 'fontSize.xl', 'lineHeight.7'],
  ['text-lg', 'fontSize.lg', 'lineHeight.7'],
  ['text-base', 'fontSize.base', 'lineHeight.6'],
  ['text-sm', 'fontSize.sm', 'lineHeight.5'],
  ['text-xs', 'fontSize.xs', 'lineHeight.4'],
  ['button-lg', 'fontSize.lg', 'lineHeight.7'],
  ['button-base', 'fontSize.base', 'lineHeight.6'],
  ['button-sm', 'fontSize.sm', 'lineHeight.5'],
  ['label-lg', 'fontSize.lg', 'lineHeight.7'],
  ['label-base', 'fontSize.base', 'lineHeight.6'],
  ['label-sm', 'fontSize.sm', 'lineHeight.5'],
  ['error-lg', 'fontSize.lg', 'lineHeight.7'],
  ['error-base', 'fontSize.base', 'lineHeight.6'],
  ['error-sm', 'fontSize.sm', 'lineHeight.5'],
  ['hint-lg', 'fontSize.lg', 'lineHeight.7'],
  ['hint-base', 'fontSize.base', 'lineHeight.6'],
  ['hint-sm', 'fontSize.sm', 'lineHeight.5'],
];

export default {
  data() {
    return {
      typographyClasses,
    };
  },
  methods: {
    convertObjectSyntaxToTailwind(objectSyntax) {
      return objectSyntax
        .replace('fontSize.', 'text-')
        .replace('lineHeight.', 'leading-')
        .replace('fontFamily.', 'font-');
    },
    convertClassesArrayToClass(classes) {
      return classes.map((className) => this.convertObjectSyntaxToTailwind(className));
    },
  },
  computed: {
    groupedClasses() {
      return this.typographyClasses.reduce((acc, [name, ...classes]) => {
        const key = name.split('-')[0];
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push([name, ...classes]);
        return acc;
      }, {});
    },
  },
};
</script>
