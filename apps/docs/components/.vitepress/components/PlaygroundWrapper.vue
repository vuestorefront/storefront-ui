<template>
    <div class="flex justify-center w-full h-auto h-min-40 align-center">
        <component :is="component"/>
    </div>
</template>

<script setup>
    const props = defineProps({
        component: String
    })     
</script>