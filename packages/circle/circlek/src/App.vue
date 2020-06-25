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
    <Heading title="Beverages"/>
    <span>Sort by:</span>
    <SfSelect>
      <SfSelectOption v-for="(option, key) in selectOptions" :key="key" :value="option">
        {{option}}
      </SfSelectOption>
    </SfSelect>

    <SfProductCard
      v-for="(product, key) in products" :key="key"
      :image="product.image"
      width="278px"
      height="278px"
      :regularPrice="product.price"
      wishlistIcon="heart"

    />
    <div :title="Beverages" :visible="true" :button="false" :overlay="false">
      <SfAccordion multiple="true">
        <SfAccordionItem
            v-for="(accordion, i) in sidebarAccordion"
            :key="i"
            :header="accordion.header"
          >
          <template>
            <SfScrollable>
              <SfList class="list">
                <SfListItem
                  v-for="(item, j) in accordion.items"
                  :key="j"
                  class="list__item"
                >
                  <SfMenuItem >
                    {{item}}
                  </SfMenuItem>
                </SfListItem>
              </SfList>
            </SfScrollable>
            </template>
        </SfAccordionItem>
      </SfAccordion>
    </div>
    <SfFooter :column="4">
      <SfFooterColumn v-for="(column, key) in footerColumns" :key="key" :title="column.header">
        <SfList v-if="column.items">
          <SfListItem v-for="item in column.items" :key="item">
            {{item}}
          </SfListItem>
        </SfList>
        <div v-else-if="column.pictures">
          <SfImage v-for="picture in column.pictures" :key="picture" :src='"/assets/"+picture+"_Icon.png"' width="32px" height="32px"/>          
        </div>
        <SfInput v-else type="email"/>
      </SfFooterColumn>
    </SfFooter>
  </div>
</template>

<script>
import {SfHeader,
    SfBreadcrumbs,
    // SfHeading,
    SfSelect,
    SfProductCard,
    // SfSidebar,
    SfAccordion,
    SfList,
    SfFooter,
    SfLink,
    SfInput,
    SfImage
    } from '@storefront-ui/vue'

export default {
  name: 'App',
  components: {
    SfHeader,
    SfBreadcrumbs,
    // SfHeading,
    SfSelect,
    SfProductCard,
    // SfSidebar,
    SfAccordion,
    SfList,
    SfFooter,
    SfLink,
    SfInput,
    SfImage
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
        price: "$ 50",
        image: "./assets/image_93.png"},
        {title: "5 Hour Energy Peach Mango",
        price: "$ 50",
        image: "./assets/image_93.png"},
        {title: "5 Hour Energy Peach Mango",
        price: "$ 50",
        image: "./assets/image_93.png"},
        {title: "5 Hour Energy Peach Mango",
        price: "$ 50",
        image: "./assets/image_93.png"},
        {title: "5 Hour Energy Peach Mango",
        price: "$ 50",
        image: "./assets/image_93.png"},
        {title: "5 Hour Energy Peach Mango",
        price: "$ 50",
        image: "./assets/image_93.png"},
        {title: "5 Hour Energy Peach Mango",
        price: "$ 50",
        image: "./assets/image_93.png"},
        {title: "5 Hour Energy Peach Mango",
        price: "$ 50",
        image: "./assets/image_93.png"},
        {title: "5 Hour Energy Peach Mango",
        price: "$ 50",
        image: "./assets/image_93.png"},
        {title: "5 Hour Energy Peach Mango",
        price: "$ 50",
        image: "./assets/image_93.png"}        
      ],
      sidebarAccordion: [
        {
          header: "Categories",
          items: ["Energy Drinks", "Soft Drinks", "Cans", "Water", "Sugar-free Drinks"]
        }, 
        {
          header: "Brands",
          items: ["Extra Strenght", "Coca-cola", "Pepsi", "Red Bull", "Waterlove"]
        },
        {
          header: "Price",
          items: []
        },
        {
          header: "Popular",
          items: ["Candy","E-Cigarettes", "Grocery", "Health & Beauty", "Household", "Ready to Eat / Food"]
        },
      ],
      footerColumns: [
        {
          header: "ABOUT US",
          items: ["Who we are", "Quality in the details", "Customer Reviews"]
        },
        {
          header: "DEPARTMENTS",
          items: ["Department1", "Department2", "Department3", "Department4" ]
        },
        {
          header: "HELP",
          items: ["Energy Drinks", "Soft Drinks", "Cans", "Water", "Sugar-free Drinks"]
        },
        {
          header: "PAYMENTS & DELIVERY",
          items: ["Energy Drinks", "Soft Drinks", "Cans", "Water", "Sugar-free Drinks"]
        },
        {
          header: "SOCIAL",
          pictures: ["Facebook", "Pinterest", "Google", "Twitter", "Youtube"]
        },
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
