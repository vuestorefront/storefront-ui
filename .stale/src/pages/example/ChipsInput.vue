<template>
  <div class="ml-4 mt-4">
    <!-- eslint-disable-next-line -->
    <ChipsInput value="Label" :handleChipClose="handleChipClose">
      <template #icon>
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          class="w-full h-full fill-gray-500"
        >
          <!-- eslint-disable-next-line -->
          <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
          ></path>
        </svg>
      </template>
    </ChipsInput>
  </div>
</template>

<script>
/* eslint-disable */
import ChipsInput from "../../../../mitosis/output/vue/vue2/src/blocks/ChipsInput.vue";

export default {
  name: "chips-input",
  components: {
    ChipsInput,
  },
  data() {
    return {};
  },
  methods: {
    handleChipClose() {
      console.log("Clicked");
    },
  },
};
</script>
