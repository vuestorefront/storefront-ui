<template>
  <div id="app">
    <SfHeader 
      :logo="logo"
    >
      <template #navigation>
        <SfHeaderNavigationItem
            v-for="item in navigation"
            :key="item">
          <SfLink href="#">{{item}}</SfLink>
        </SfHeaderNavigationItem>
      </template>
    </SfHeader>
    <SfBreadcrumbs 
      :breadcrumbs="breadcrumbs"
    />
    <SfHeading
      title="Beverages"
    />
    <span>Sort by:</span>
    <SfSelect>
      <SfSelectOption v-for="(option, key) in selectOptions" :key="key" :value="option">
        {{option}}
      </SfSelectOption>
    </SfSelect>

    <SfProductCard
      v-for="(product, key) in products" :key="key"
    />
    <SfSidebar>
      <SfAccordion>
        <SfAccordionItem
            v-for="(accordion, i) in sidebarAccordion"
            :key="i"
            :header="accordion.header"
          >
          <template>
              <SfList class="list">
                <SfListItem
                  v-for="(item, j) in accordion.items"
                  :key="j"
                  class="list__item"
                >
                  <SfMenuItem :label="item.label" :count="item.count" />
                </SfListItem>
              </SfList>
            </template>
        </SfAccordionItem>
      </SfAccordion>
    </SfSidebar>
    <SfFooter/>
  </div>
</template>

<script>
import {SfHeader,
    SfBreadcrumbs,
    SfHeading,
    SfSelect,
    SfProductCard,
    SfSidebar,
    SfAccordion,
    SfList,
    SfFooter,
    SfLink
    } from '@storefront-ui/vue'

export default {
  name: 'App',
  components: {
    SfHeader,
    SfBreadcrumbs,
    SfHeading,
    SfSelect,
    SfProductCard,
    SfSidebar,
    SfAccordion,
    SfList,
    SfFooter,
    SfLink
  },
  data() {
    return {
      logo: "./assets/logo.png",
      navigation: ["home", "products", "our stores"],
      breadcrumbs: [
                    {
                      "text": "Shop",
                      "link": "#"
                    },
                    {
                      "text": "Products",
                      "link": "#"
                    },
                    {
                      "text": "Beverages",
                      "link": "#"
                    }
                  ],
      selectOptions: [
        "Price from high to low", "Price from high to low", "Price from high to low"
      ],
      products: [
        {title: "5 Hour Energy Peach Mango",
        price: "$ 50"},
        {title: "5 Hour Energy Peach Mango",
        price: "$ 50"},
        {title: "5 Hour Energy Peach Mango",
        price: "$ 50"},
        {title: "5 Hour Energy Peach Mango",
        price: "$ 50"},
        {title: "5 Hour Energy Peach Mango",
        price: "$ 50"},
        {title: "5 Hour Energy Peach Mango",
        price: "$ 50"},
        {title: "5 Hour Energy Peach Mango",
        price: "$ 50"},
        {title: "5 Hour Energy Peach Mango",
        price: "$ 50"},
        {title: "5 Hour Energy Peach Mango",
        price: "$ 50"},
        {title: "5 Hour Energy Peach Mango",
        price: "$ 50"}        
      ],
      sidebarAccordion: [
        "Categories", "Brands", "Price", "Popular"
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
