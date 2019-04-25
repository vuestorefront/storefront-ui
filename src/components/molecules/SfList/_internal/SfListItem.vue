<template>
  <li class="sf-list__item">
    <slot>
      <div class="sf-list__item-content">
        <span class="sf-filter__label">{{ label }}</span>
        <span class="sf-filter__count">{{ count }}</span>
      </div>
    </slot>
  </li>
</template>

<script>
export default {
  props: ["label", "count"]
};
</script>
