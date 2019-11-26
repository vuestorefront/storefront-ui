<template>
  <SfPagination :current="currentPage" :total="20" :visible="5"  @click="page => currentPage = page">
      <template #prev="{ isDisabled, go }">
        <button @click="go()" :disabled="isDisabled ? true : false">prev</button>
      </template>
      <template #next="{ isDisabled, go }">
        <button @click="go()" :disabled="isDisabled ? true : false">next</button>
      </template>
  </SfPagination>
</template>

<script>
export default {
  data () {
    return {
      currentPage: 1
    }
  }
}
</script>