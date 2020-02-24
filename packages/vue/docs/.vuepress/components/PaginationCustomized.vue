<template>
  <SfPagination
    :current="currentPage"
    :total="20"
    :visible="5"
    @click="page => (currentPage = page)"
  >
    <template #prev="{ isDisabled, go }">
      <button :disabled="isDisabled ? true : false" @click="go()">prev</button>
    </template>
    <template #next="{ isDisabled, go }">
      <button :disabled="isDisabled ? true : false" @click="go()">next</button>
    </template>
  </SfPagination>
</template>
<script>
export default {
  data() {
    return {
      currentPage: 1
    };
  }
};
</script>
