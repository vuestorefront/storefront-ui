<template>
  <SfFooter class="ck-footer" :column="column" :multiple="multiple">
    <SfFooterColumn
      v-for="column in columns"
      :key="column.title"
      :title="column.title"
    >
      <SfList v-if="column.items">
        <SfListItem v-for="item in column.items" :key="item">
          <SfMenuItem class="ck-footer__item" :label="item" />
        </SfListItem>
      </SfList>
      <div v-else :style="{ display: 'flex' }">
        <SfImage
          v-for="picture in column.pictures"
          :key="picture"
          width="32"
          height="32"
          :src="src(picture)"
          :style="{ margin: '0 3px 0 0' }"
        />
      </div>
    </SfFooterColumn>
  </SfFooter>
</template>
<script>
import { SfFooter } from "@storefront-ui/vue";
import { SfList } from "@storefront-ui/vue";
import { SfImage } from "@storefront-ui/vue";
import { SfMenuItem } from "@storefront-ui/vue";
export default {
  components: {
    SfFooter,
    SfList,
    SfImage,
    SfMenuItem,
  },
  data() {
    return {
      isMobile: false,
      columns: [
        {
          title: "About us",
          items: ["Who we are", "Quality in the details", "Customer Reviews"],
        },
        {
          title: "Departments",
          items: ["Women fashion", "Men fashion", "Kidswear", "Home"],
        },
        {
          title: "Help",
          items: ["Customer service", "Size guide", "Contact us"],
        },
        { title: "Payment & delivery", items: ["Purchase terms", "Guarantee"] },
        {
          title: "Social",
          pictures: ["fb", "pinterest", "twitter", "plus", "yt"],
        },
      ],
      column: 4,
      multiple: false,
    };
  },
  methods: {
    src(picture) {
      return require(`../assets/${picture}.png`);
    },
  },
};
</script>
<style lang="scss">
@import "@storefront-ui/vue/styles.scss";

.ck-footer {
  background: black;
  --menu-item-label-color: white;
  --footer-column-title-background: black;
  --chevron-color: white;
  --footer-column-title-font-weight: 500;
  --footer-column-title-font-size: 16px;
}

.sf-footer-column__title {
  color: white;
}
</style>
