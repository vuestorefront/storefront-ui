<template>
  <Layout>
    <template #after-content>
      <div class="flex custom-block -mt-8 w-full -pb-[2px] rounded-t text-black dark:text-white">
        <button
          @click="framework = 'vue'"
          class="px-4 py-2 transition-colors flex items-center border-b-2"
          :class="{
            'text-green border-b-2 border-green ': framework === 'vue',
            'hover:border-green-500 hover:border-opacity-40 dark:hover:border-opacity-80': framework !== 'vue',
          }"
        >
          <iconify-icon icon="vscode-icons:file-type-vue" class="mr-2" height="20" />
          Vue
        </button>
        <button
          @click="framework = 'react'"
          class="px-4 py-1 transition-colors flex items-center border-b-2"
          :class="{
            'text-blue-400 border-blue-400  ': framework === 'react',
            'hover:border-blue-300 hover:border-opacity-40 dark:hover:border-opacity-80 ': framework !== 'react',
          }"
        >
          <iconify-icon icon="logos:react" class="mr-2" height="16" />
          React
        </button>
        <div class="flex-1 border-b-2"></div>
      </div>
      <div class="custom-block pt-8 pb-4">
        <Content slot-key="vue" v-if="framework === 'vue'" />
        <Content slot-key="react" v-else-if="framework === 'react'" />
      </div>
      <Content slot-key="after-content" />
    </template>
  </Layout>
</template>
<script>
export default {
  name: 'SfuiComponent',
  data() {
    return {
      framework: 'vue',
    };
  },
};
</script>
