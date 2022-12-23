<template>
  <div>
    <ul>
      <li v-for="c in components" :key="c">
        <RouterLink :to="'/' + type + '/components/' + c.replace('Vsf', '').toLowerCase()">
          {{ c }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script>
import components from '../../utils/components.json';
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    components() {
      const list = this.type === 'react' ? components.react : components.vue;
      return list.filter((c) => !/VsfIcon.+/.test(c));
    },
  },
};
</script>
